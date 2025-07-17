import { Breadcrumb } from '@chakra-ui/react';
import ContactsPageContent from '@components/PageContents/ContactsPageContent';
import { getContacts } from '@services/getContent';
import { getStartPageMetaDate } from '@services/getMetaData';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const globalMeta = await getStartPageMetaDate();
  const contacts = await getContacts();
  const companyName =
    contacts?.data.attributes.essential.find((item) => item.title === 'Сокращённое наименование')
      ?.content || 'Калька игрушки';
  const fullCompanyName = contacts?.data.attributes.essential.find(
    (item) => item.title === 'Полное наименование'
  )?.content;
  const address = contacts?.data.attributes.address;
  const phone = contacts?.data.attributes.phone;
  const email = contacts?.data.attributes.email;
  const workingHours = contacts?.data.attributes.time;

  const title = `Контакты ${companyName} - Адрес, телефон, время работы`;
  const description = `${companyName}: ${address}. ☎ ${phone}. Время работы: ${workingHours}. Официальные контакты компании для связи.`;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://calca-toys.ru';

  return {
    title,
    description,
    keywords: `контакты ${companyName}, адрес ${companyName}, телефон ${companyName}, email, обратная связь, местоположение, ${address}, ${phone}, ${workingHours}`,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/contacts`,
      siteName: fullCompanyName || globalMeta?.data.attributes.title,
      locale: 'ru_RU',
      type: 'website',
      images: [
        {
          url: `${baseUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: `Контактная информация ${companyName}`,
        },
      ],
    },
    alternates: {
      canonical: `${baseUrl}/contacts`,
    },
    verification: {
      google: 'google-site-verification',
      yandex: 'yandex-verification',
    },
    other: {
      'contact:phone': phone,
      'contact:email': email,
      'contact:address': address,
      'contact:hours': workingHours,
      'og:street-address': address,
      'og:locality': 'Санкт-Петербург',
      'og:country-name': 'Россия',
      'business:contact_data:street_address': address,
      'business:contact_data:locality': 'Санкт-Петербург',
      'business:contact_data:country_name': 'Россия',
      'business:contact_data:email': email,
      'business:contact_data:phone_number': phone,
      'business:hours': workingHours,
    },
  };
}

export default async function ContactsPage() {
  const contacts = await getContacts();
  return (
    <div className="section  fullH" style={{ background: '#FEF7E6', paddingTop:'32px'}}>
      <ContactsPageContent key={'contact-page-contant-extra-key'} contacts={contacts} />
    </div>
  );
}
