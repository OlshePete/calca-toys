import type { Metadata, ResolvingMetadata } from 'next'
import MainCarousel from "@/modules/carousels/MainCarousel";
import ProductsCarousel from "@/modules/carousels/ProductsCarousel";
import ServicesCarousel from "@/modules/carousels/ServicesCarousel";
import SubscribeCarousel from "@/modules/carousels/SubscribeCarousel";
import CommercialWrapper from "@/modules/commercial/CommercialWrapper";
import { products, services, subscride_images } from "@/public/products";
import { getStartPageMetaDate } from "@/services/getMetaData";
import { getStartPageContent } from '@/services/getContent';
import TestApi from '@/components/test/TestApi';
import MainCarouselContent from '@/components/server/MainCarouselContent';
import { getAllProducts } from '@/services/ products/getProducts';

export async function generateMetadata(): Promise<Metadata> {
  const globalMeta = await getStartPageMetaDate()
  const title = globalMeta?.data.attributes.title ?? 'test9'
  const description = globalMeta?.data.attributes.description ?? '9test test test'
  return {
    title,
    description
  }
}

export default async function Home() {
const products = await getAllProducts()
  // const res = await getStartPageMetaDate() 
  // const mainContent = await getStartPageContent()
  // console.log("%%%%%$$$$ static server\n",JSON.stringify(res, null, 2),'\n');
  
  return (
    <main>
      <div className="section fullH" style={{}}>
        {/* {JSON.stringify(res, null, 2)} */}
        {/* <TestApi/> */}
        {/* <MainCarousel/> */}
        <MainCarouselContent/>
      </div>
       <div className="section" style={{background:"#FEF7E6",padding:'110px 0' }}>
      {products &&   <ProductsCarousel label="Хит продаж" products={products.data.filter(p=>p.attributes.mustHave)}/>}
      </div>
    <div className="section" style={{}}>
        <ServicesCarousel label="Оформление шарами" services={services}/>
      </div>
      <div className="section" style={{ minHeight:'auto' }}>
        <CommercialWrapper variant="service1"/>
      </div>
       <div className="section" style={{ background: "#FEF7E6",padding:'110px 0'  }}>
        <ProductsCarousel label="игрушки" products={products.data.filter(p=>p?.attributes.type==="toy")}/>
      </div>
     <div className="section" style={{ background: "#FEF7E6",padding:'110px 0'  }}>
        <ProductsCarousel label="Акционные предложения" products={products.data.filter(p=>p?.attributes.discount_price)}/>
      </div>
      <div className="section" style={{ }}>
        <CommercialWrapper variant="service2"/>
      </div>
       <div className="section" style={{ padding:'60px 0' }}>
        <SubscribeCarousel images={subscride_images}/>
      </div>
    </main>
  );
}
