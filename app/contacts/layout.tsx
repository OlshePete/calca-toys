import { getContacts } from '@/services/getContent'
import Script from 'next/script'

export default async function ContactsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const contacts = await getContacts()
  const companyName = contacts?.data.attributes.essential.find(item => item.title === "Сокращённое наименование")?.content
  const address = contacts?.data.attributes.address
  const phone = contacts?.data.attributes.phone
  const email = contacts?.data.attributes.email
  const workingHours = contacts?.data.attributes.time

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": companyName,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": address,
      "addressLocality": "Санкт-Петербург",
      "addressCountry": "RU"
    },
    "email": email,
    "telephone": phone,
    "openingHours": workingHours
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData)
        }}
      />
      {children}
    </>
  )
} 