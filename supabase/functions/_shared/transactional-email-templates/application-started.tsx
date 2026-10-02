import * as React from 'npm:react@18.3.1'
import { Body, Container, Head, Html, Link, Preview, Text } from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

interface Props {
  name?: string
  email?: string
  whatsapp?: string
  whatsappLink?: string
  time?: string
}

const Email = ({ name = 'Unknown', email = '', whatsapp = '', whatsappLink = '', time = '' }: Props) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>New applicant: {name}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={text}><strong>First name:</strong> {name}</Text>
        <Text style={text}><strong>Email:</strong> {email}</Text>
        <Text style={text}>
          <strong>WhatsApp:</strong>{' '}
          {whatsappLink ? <Link href={whatsappLink} style={link}>{whatsapp}</Link> : whatsapp}
        </Text>
        <Text style={text}><strong>Time:</strong> {time}</Text>
        <Text style={text}>They haven't finished the application yet.</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: Email,
  subject: (d: Record<string, any>) => `New applicant: ${d.name ?? 'Unknown'}`,
  displayName: 'New applicant (started)',
  to: 'sidsel@loschenkohl.com',
  previewData: { name: 'Jane', email: 'jane@example.com', whatsapp: '+44 7000 000000', whatsappLink: 'https://wa.me/447000000000', time: '2 Oct 2026, 22:40 (London)' },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Arial, sans-serif' }
const container = { padding: '20px 25px' }
const text = { fontSize: '15px', color: '#1a1a1a', lineHeight: '1.5', margin: '0 0 10px' }
const link = { color: '#1a1a1a', textDecoration: 'underline' }
