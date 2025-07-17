import Breadcrumbs from '@components/BreadCrumb/BreadCrumb';
import ContentContainer from '@components/ContentContainer/ContentContainer';
import BasketContent from '@components/PageContents/BasketContent';
import { Suspense } from 'react';

export default function Home() {
  console.log('basket page prerender')
  return (
    <div>
      <div className="section  fullH" style={{ background: '#FEF7E6', padding: '44px 0' }}>
        <Suspense fallback={<>Loading...</>}>
          <ContentContainer>
            <Breadcrumbs />
            <BasketContent />
          </ContentContainer>
        </Suspense>
      </div>
    </div>
  );
}
