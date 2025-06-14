import ContentContainer from "@/components/ContentContainer/ContentContainer";
import BreadCrumb from "@/components/BreadCrumb/BreadCrumb";
import CatalogContent from "@/components/PageContents/CatalogContent";
import getSearchProducts from "@/services/products/getSearchProducts";
import { getCategoryNameByType } from "@/services/categories/getCategories";
import { AvailableSettingsProvider } from "@/components/context/useAvailableSettings";
import { ProductsProvider } from "@/components/context/useProductsContext";
import { getAllProducts } from "@/services/products/getProducts";
import { IAllProductsContent, ITypeLabels, TypeLabel } from "@/types/api";

export interface ISearchParams {
  type?: string;
  tag?: {
      title?: string;
  };
  material?: string;
  price?:string;
  [key: string]: string | { title?: string } | undefined; // Динамические параметры
}
interface Props  {
  searchParams: Promise<ISearchParams>,
  params: {
    type: string[];
  };
};
const labels:ITypeLabels = {
  'toy':'Игрушки',
  'balloon':'Воздушные шары',
  'supplies':'Товары для праздника'
}
  const findMaterials = ( label:TypeLabel, allProducts:IAllProductsContent ) => {
      const rawMaterials = allProducts.data.reduce<string[]>((acc, product)=>{
        const filteredByLabel = product.attributes?.materials?.data.filter(material=>material.attributes.type===label)
        const newList = filteredByLabel.map(material=>material.attributes.title)??[]
        return [...acc, ...newList]
      },[]) 
    return Array.from(new Set(rawMaterials))
  }
  const findPriceLimits = (  label:TypeLabel, allProducts:IAllProductsContent ):[number, number] => {
    const filteredProduct = allProducts.data.filter(product=>(console.log('priceLimits111',product),product.attributes.type.data?.attributes.internal === label)) 
    const prices = filteredProduct.map(product=>product.attributes.discount_price??product.attributes.price)
    
    return [Math.min(...prices)??0,Math.max(...prices)??10000]
  }
export default async function Home({ searchParams, params }: Props) {

  const {type} = await params
  const label = type[0] as TypeLabel

  const allProducts = await getAllProducts()
  const materials = findMaterials(label, allProducts)
  const priceLimits = findPriceLimits(label, allProducts) 
  const filters = (await searchParams)

  const categories = await getCategoryNameByType(label)
  const categoriesName = categories.data.map(cat=>({title:cat.attributes.title,paramName:cat.attributes.paramName,variants:cat.attributes.tags.data.map(tag=>tag.attributes.title)}))
  const categoryParamKeys = categoriesName.map(category=>category.paramName)

  const products = await getSearchProducts(label, filters, categoryParamKeys)
  const pagination = products.meta?.pagination
  
  console.log('##products',products, label, filters, categoryParamKeys);

  return (
    <div
      className="section fullH"
      style={{
        paddingTop: "44px",
        background: "#FEF7E6",
      }}
    >
      <ProductsProvider products={allProducts}>
        <ContentContainer>
          <BreadCrumb />
          <AvailableSettingsProvider products={products}>
            <CatalogContent
              products={products}
              label={labels[label] as TypeLabel}
              categoriesName={categoriesName}
              pagination={pagination}
              materials={materials}
              priceLimits={priceLimits}
            />
          </AvailableSettingsProvider>
        </ContentContainer>
      </ProductsProvider>
    </div>
  );
}
