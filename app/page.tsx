import MainCarousel from "@/modules/carousels/MainCarousel";
import ProductsCarousel from "@/modules/carousels/ProductsCarousel";
import { products } from "@/public/products";

export default function Home() {
  return (
    <main>
      <div className="section fullH" style={{}}>
        <MainCarousel/>
      </div>
      <div className="section" style={{background:"#FEF7E6",padding:'110px 0' }}>
        <ProductsCarousel label="Хит продаж" products={products.filter(p=>p?.mustHave)}/>
      </div>
      <div className="section" style={{ background: "green" }}>
        <p>оформление шарами</p>
      </div>
      <div className="section" style={{ background: "green" }}>
        <p>НАДУЕМ ваши</p>
      </div>
      <div className="section" style={{ background: "#FEF7E6",padding:'110px 0'  }}>
        <ProductsCarousel label="игрушки" products={products.filter(p=>p?.type==="toy")}/>

      </div>
      <div className="section" style={{ background: "#FEF7E6",padding:'110px 0'  }}>
        <ProductsCarousel label="Акционные предложения" products={products.filter(p=>p?.discount_price)}/>
      </div>
      <div className="section" style={{ background: "green" }}>
        <p>Подарочная упаковка</p>
      </div>
      <div className="section" style={{ background: "green" }}>
        <p>подпишись на нас @vellum.paper</p>
      </div>
    </main>
  );
}
