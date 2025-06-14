import ContentContainer from "@/components/ContentContainer/ContentContainer";
import ProductFullView from "@/modules/cards/ProductFullView";
import { products } from "@/public/products";
import { getProductById } from "@/services/products/getProducts";
import BreadCrumb from "@/components/BreadCrumb/BreadCrumb";
type Props = {
  params: {
    id: string;
  };
};

export default async function Home({ params: { id } }: Props) {
  const product = await getProductById(await id)
  if (!product) return <p>К сожалению товар не найден</p>;
  return (
    <div
      className="section fullH"
      style={{
        padding: "44px 0",
        background: "#FEF7E6",
      }}
    >
      <ContentContainer>
        <BreadCrumb title={product.data.attributes.name}/>
        <ProductFullView product={product} />
      </ContentContainer>
    </div>
  );
}
