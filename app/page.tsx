import MainCarousel from "@/modules/carousels/MainCarousel";
import ProductsCarousel from "@/modules/carousels/ProductsCarousel";
import ServicesCarousel from "@/modules/carousels/ServicesCarousel";
import SubscribeCarousel from "@/modules/carousels/SubscribeCarousel";
import CommercialWrapper from "@/modules/commercial/CommercialWrapper";
import { products, services, subscride_images } from "@/public/products";

export default function Home() {
  return (
    <main>
      <div className="section fullH" style={{}}>
        <MainCarousel/>
      </div>
      <div className="section" style={{background:"#FEF7E6",padding:'110px 0' }}>
        <ProductsCarousel label="Хит продаж" products={products.filter(p=>p?.mustHave)}/>
      </div>
      <div className="section" style={{}}>
        <ServicesCarousel label="Оформление шарами" services={services}/>
      </div>
      <div className="section" style={{ minHeight:'auto' }}>
        <CommercialWrapper variant="service1"/>
      </div>
      <div className="section" style={{ background: "#FEF7E6",padding:'110px 0'  }}>
        <ProductsCarousel label="игрушки" products={products.filter(p=>p?.type==="toy")}/>

      </div>
      <div className="section" style={{ background: "#FEF7E6",padding:'110px 0'  }}>
        <ProductsCarousel label="Акционные предложения" products={products.filter(p=>p?.discount_price)}/>
      </div>
      <div className="section" style={{ }}>
        <CommercialWrapper variant="service2"/>

      </div>
      <div className="section" style={{  }}>
        
        <SubscribeCarousel images={subscride_images}/>
      </div>
    </main>
  );
}
