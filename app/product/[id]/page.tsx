import ContentContainer from "@/components/ContentContainer/ContentContainer";
import ProductFullView from "@/modules/cards/ProductFullView";
import { products } from "@/public/products";
import {  } from "module";
type Props = {
  params:{
    id:string
  }
}

export default function Home({params:{id}}:Props) {
const product = products.find(p=>p.id===Number(id))
if (!product) return <p>К сожалению товар не найден</p>
  return (
    <div className="section fullH" style={{
      paddingTop:'140px',background: "#FEF7E6",
    }}>
      <ContentContainer>

      <p>Breadcrumbs</p>
    <ProductFullView product={product}/> 
      </ContentContainer>

    </div >
  );
}
