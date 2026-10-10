import * as React from 'npm:react@18.3.1'
import { Body, Container, Head, Html, Link, Preview, Text } from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

interface Props {
  first?: string
  name?: string
  email?: string
  time?: string
  pageUrl?: string
  commitments?: string[]
  forOwner?: boolean
  agreementDate?: string
}

const Email = ({ first = '', name = '', email = '', time = '', pageUrl = '', commitments = [], forOwner = false, agreementDate = '8 October 2026' }: Props) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>{forOwner ? `${name} signed the Monad OS agreement` : 'Your signed Monad OS agreement'}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={text}>{forOwner ? `${name} just confirmed their place in Monad OS.` : `Hi ${first},`}</Text>
        {!forOwner && <Text style={text}>Thank you for saying yes. This is your copy of the agreement you just signed. I'm really looking forward to doing this work with you.</Text>}
        <Text style={heading}>Monad OS Private · Exchange Agreement, {agreementDate}</Text>
        <Text style={text}><strong>Signed by:</strong> {name}</Text>
        <Text style={text}><strong>Email:</strong> {email}</Text>
        <Text style={text}><strong>Signed:</strong> {time}</Text>
        <Text style={text}><strong>Commitments confirmed:</strong></Text>
        {commitments.map((c, i) => <Text key={i} style={item}>✓ {c}</Text>)}
        <Text style={text}>
          The full agreement:{' '}
          <Link href={pageUrl} style={link}>{pageUrl}</Link>
        </Text>
        {!forOwner && <Text style={text}>Next: book your first strategic session and your activations from the page above.</Text>}
        {!forOwner && <Text style={text}>Sidsel</Text>}
      </Container>
    </Body>
  </Html>
)

const sample = {
  first: 'Jane', name: 'Jane Doe', email: 'jane@example.com', time: '8 Oct 2026, 10:00 (London)',
  pageUrl: 'https://monadmethod.com/welcome/jane', commitments: ['I will do the work.'],
}

export const template = {
  component: Email,
  subject: 'Your signed Monad OS agreement',
  displayName: 'Monad OS agreement (client copy)',
  previewData: sample,
} satisfies TemplateEntry

export const ownerTemplate = {
  component: (p: Props) => Email({ ...p, forOwner: true }),
  subject: (d: Record<string, any>) => `Signed: ${d.name ?? 'Unknown'} accepted the Monad OS agreement`,
  displayName: 'Monad OS agreement (owner notification)',
  to: 'sidsel@loschenkohl.com',
  previewData: sample,
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Arial, sans-serif' }
const container = { padding: '20px 25px', maxWidth: '560px' }
const text = { fontSize: '15px', color: '#1a1a1a', lineHeight: '1.5', margin: '0 0 10px' }
const heading = { fontSize: '17px', fontWeight: 700, color: '#1a1a1a', margin: '20px 0 12px', borderTop: '3px solid #7ec8c8', paddingTop: '14px' }
const item = { fontSize: '15px', color: '#1a1a1a', lineHeight: '1.5', margin: '0 0 8px', paddingLeft: '8px' }
const link = { color: '#1a1a1a', textDecoration: 'underline' }
