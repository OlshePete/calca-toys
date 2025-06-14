import BreadCrumb from "@/components/BreadCrumb/BreadCrumb";
import ContentContainer from "@/components/ContentContainer/ContentContainer";
import PaymentsPageContent from "@/components/PageContents/PaymentsPageContent";
import { getContacts, getPayments } from "@/services/getContent";

function parseContacts(text:string) {
  const phoneRegex = /(?:\+?\d{1,3}[\s-]?)?(?:\(\d{2,3}\)|\d{2,3})[\s-]?\d{2,3}[\s-]?\d{2,3}[\s-]?\d{2,3}\b/g;
  
  const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g;
  
  const phones = text.match(phoneRegex) || [];
  const emails = text.match(emailRegex) || [];
  
  const cleanedPhones = phones.map(phone => phone.trim().replace(/\s+/g, ' '));
  const cleanedEmails = emails.map(email => email.trim().toLowerCase());
  
  return {
    phones: [...new Set(cleanedPhones)],
    emails: [...new Set(cleanedEmails)] 
  };
}

export default async function PaymentsPage() {
  const content = await getPayments()
  const contacts = await getContacts()
  const links = parseContacts(content.data.attributes.content)
  return (
    <div className='section  fullH'  style={{background:"#FEF7E6",padding:'44px 0' }}>
     <ContentContainer>
      <BreadCrumb />
      <PaymentsPageContent
        contacts={contacts}
        content={content}
        links={links}
      />
     </ContentContainer>
    </div>
  )
}
