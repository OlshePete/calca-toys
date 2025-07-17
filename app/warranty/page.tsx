import BreadCrumb from '@components/BreadCrumb/BreadCrumb';
import ContentContainer from '@components/ContentContainer/ContentContainer';
import WarrantyPageContent from '@components/PageContents/WarrantyPageContent';
import { getContacts, getWarranty } from '@services/getContent';
import { Suspense } from 'react';

export default async function WarrantyPage() {
  const content = await getWarranty();
  const contacts = await getContacts();
  return (
    <div className="section  fullH" style={{ background: '#FEF7E6', padding: '44px 0' }}>
      <Suspense fallback={<>Loading...</>}>
        <ContentContainer>
          <BreadCrumb />
          <WarrantyPageContent content={content} contacts={contacts} />
        </ContentContainer>
      </Suspense>
    </div>
  );
}
