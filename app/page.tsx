import MainCarousel from "@/modules/carousels/MainCarousel";
import ProductsCarousel from "@/modules/carousels/ProductsCarousel";
export default function Home() {
  return (
    <main>
      <div className="section fullH" style={{}}>
        <MainCarousel/>
      </div>
      <div className="section" style={{background:"#FEF7E6",padding:'110px 0' }}>
        <ProductsCarousel label="Хит продаж"/>
      </div>
      <div className="section" style={{ background: "green" }}>
        <p>оформление шарами</p>
      </div>
      <div className="section" style={{ background: "green" }}>
        <p>НАДУЕМ ваши</p>
      </div>
      <div className="section" style={{ background: "green" }}>
        <p>игрушки</p>
      </div>
      <div className="section" style={{ background: "green" }}>
        <p>Акционные предложения</p>
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
