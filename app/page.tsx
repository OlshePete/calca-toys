import type { Metadata } from 'next';
import { Suspense } from 'react';
import ProductsCarousel from '@modules/carousels/ProductsCarousel';
import ServicesCarousel from '@modules/carousels/ServicesCarousel';
import SubscribeCarousel from '@modules/carousels/SubscribeCarousel';
import CommercialWrapper from '@modules/commercial/CommercialWrapper';
import { services } from '@public/products';
import { getStartPageMetaDate } from '@services/getMetaData';
import MainCarouselContent from '@components/server/MainCarouselContent';
import { getAllProducts } from '@services/products/getProducts';
import { getSubscribeData } from '@services/getContent';

export async function generateMetadata(): Promise<Metadata> {
  const globalMeta = await getStartPageMetaDate();
  const title = globalMeta?.data.attributes.title ?? 'Калька - Воздушные шары';
  const description = globalMeta?.data.attributes.description ?? 'Воздушные шары, мягкие игрушки, услуги для рпавздника';
  return {
    title,
    description,
  };
}

export default async function Home() {
  const products = await getAllProducts();
  const subsribeData = await getSubscribeData();

  return (
    <Suspense>
      <div className="section fullH" style={{ minHeight:'100vh',height:'100vh', position: 'relative', top: '-77px' }}>
        <MainCarouselContent />
      </div>
      <div className="section" style={{ background: '#FEF7E6', padding: '110px 0' }}>
        {products && (
          <ProductsCarousel
            label="Хит продаж"
            products={products.data.filter((p) => p.attributes.mustHave)}
          />
        )}
      </div>
     <div className="section" style={{}}>
        <ServicesCarousel label="Оформление шарами" services={services} />
      </div>
      <div className="section" style={{ minHeight: 'auto' }}>
        <CommercialWrapper variant="alone" />
      </div>
      <div className="section" style={{ background: '#FEF7E6', padding: '110px 0' }}>
        <ProductsCarousel
          label="игрушки"
          products={products.data.filter(
            (p) => p?.attributes.type.data.attributes.internal === 'toy'
          )}
          link="/toy"
        />
      </div>
       <div className="section" style={{ background: '#FEF7E6', padding: '110px 0' }}>
        <ProductsCarousel
          label="Акционные предложения"
          products={products.data.filter((p) => p?.attributes.discount_price)}
        />
      </div>
      <div className="section">
        <CommercialWrapper variant="list" />
      </div>
      <div className="section" style={{ padding: '60px 0' }}>
        <SubscribeCarousel content={subsribeData} />
      </div> 
    </Suspense>
  );
}
