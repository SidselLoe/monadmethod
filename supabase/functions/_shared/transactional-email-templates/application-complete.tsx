import * as React from 'npm:react@18.3.1'
import { Body, Container, Head, Hr, Html, Link, Preview, Text } from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

interface Props {
  name?: string
  email?: string
  whatsapp?: string
  whatsappLink?: string
  time?: string
  readiness?: string
  answers?: { question: string; answer: string }[]
}

const Email = ({ name = 'Unknown', email = '', whatsapp = '', whatsappLink = '', time = '', answers = [] }: Props) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>Application complete: {name}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={text}><strong>Name:</strong> {name}</Text>
        <Text style={text}><strong>Email:</strong> {email}</Text>
        <Text style={text}>
          <strong>WhatsApp:</strong>{' '}
          {whatsappLink ? <Link href={whatsappLink} style={link}>{whatsapp}</Link> : whatsapp}
        </Text>
        <Text style={text}><strong>Time:</strong> {time}</Text>
        <Hr style={hr} />
        {answers.map((a, i) => (
          <React.Fragment key={i}>
            <Text style={question}>{a.question}</Text>
            <Text style={text}>{a.answer || '(no answer)'}</Text>
          </React.Fragment>
        ))}
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: Email,
  subject: (d: Record<string, any>) => `Application complete: ${d.name ?? 'Unknown'} (${d.readiness ?? ''})`,
  displayName: 'Application complete',
  to: 'sidsel@loschenkohl.com',
  previewData: {
    name: 'Jane', email: 'jane@example.com', whatsapp: '+44 7000 000000', whatsappLink: 'https://wa.me/447000000000',
    time: '2 Oct 2026, 22:40 (London)', readiness: 'Yes',
    answers: [{ question: "What do you do, and what's your business?", answer: 'I run a design studio.' }],
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Arial, sans-serif' }
const container = { padding: '20px 25px' }
const text = { fontSize: '15px', color: '#1a1a1a', lineHeight: '1.5', margin: '0 0 10px' }
const question = { ...text, fontWeight: 'bold' as const, margin: '16px 0 4px' }
const link = { color: '#1a1a1a', textDecoration: 'underline' }
const hr = { borderColor: '#e5e5e5', margin: '16px 0' }
