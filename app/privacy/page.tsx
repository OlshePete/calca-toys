import PrivacyPageContent from '@components/PageContents/PrivacyPageContent';
import { getContacts, getPrivacy } from '@services/getContent';
import { Suspense } from 'react';
import CustomHeading from '../../ui/Heading/CustomHeading';

export default async function PrivacyPage() {
  const response = await getPrivacy();

  const contacts = await getContacts();
  const title = response.data.attributes.title;
  return (
    <div className="section  fullH" style={{ background: '#FEF7E6', padding: '44px 0' }}>
      <Suspense fallback={<>Loading...</>}>
        <PrivacyPageContent content={response} contacts={contacts}>
          <CustomHeading label={title} visual={'post_header'} pt={'60px'} pb={'40px'}/>
        </PrivacyPageContent>
      </Suspense>
    </div>
  );
}
