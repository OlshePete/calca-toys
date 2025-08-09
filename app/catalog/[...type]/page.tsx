'use server'
import ContentContainer from '@components/ContentContainer/ContentContainer';
import BreadCrumb from '@components/BreadCrumb/BreadCrumb';
import CatalogContent from '@components/PageContents/CatalogContent';
import getSearchProducts from '@services/products/getSearchProducts';
import { getCategoryNameByType } from '@services/categories/getCategories';
import { AvailableSettingsProvider } from '@components/context/useAvailableSettings';
import { ProductsProvider } from '@components/context/useProductsContext';
import { getAllProducts } from '@services/products/getProducts';
import { IAllProductsContent, ITypeLabels, TypeLabel } from '@apptypes/api';

export interface ISearchParams {
  type?: string;
  tag?: {
    title?: string;
  };
  material?: string;
  price?: string;
  [key: string]: string | { title?: string } | undefined;
}

interface Props  {
  searchParams: Promise<ISearchParams>,
  params: {
    type: string[];
  };
};
interface PageProps {
  params: Promise<{
    type: string[];
  }>;
  searchParams: Promise<ISearchParams>;
}

const labels: ITypeLabels = {
  toy: 'Игрушки',
  balloon: 'Воздушные шары',
  supplies: 'Товары для праздника',
};

const findMaterials = (label:TypeLabel, allProducts:IAllProductsContent) => {
  const rawMaterials = allProducts.data.reduce<string[]>((acc, product) => {
    const filteredByLabel = product.attributes?.materials?.data.filter(
      (material) => material.attributes.type === label
    );
    const newList = filteredByLabel?.map((material) => material.attributes.title) ?? [];
    return [...acc, ...newList];
  }, []);
  return Array.from(new Set(rawMaterials));
};

const findPriceLimits = (label: TypeLabel, allProducts: IAllProductsContent): [number, number] => {
  const filteredProduct = allProducts.data.filter(
    (product) => product.attributes.type.data?.attributes.internal === label
  );
  const prices = filteredProduct.map(
    (product) => product.attributes.discount_price ?? product.attributes.price
  );
  const min = !isFinite(Math.min(...prices)) ? 0 : Math.min(...prices)
  const max = !isFinite(Math.max(...prices)) ? 0 : Math.max(...prices)
  return [ min, max ];
};

type Params = Promise<{ type: string }>
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>
 
export default async function Page({ searchParams, params }:{searchParams:SearchParams, params:Params}) {
  const { type } = await params;
  const label = type[0] as TypeLabel;

  const allProducts = await getAllProducts();
  const resolvedSearchParams = await searchParams as ISearchParams;
  
  const materials = findMaterials(label, allProducts);
  const priceLimits = findPriceLimits(label, allProducts);

  const categories = await getCategoryNameByType(label);
  const categoriesName = categories.data.map((cat) => ({
    title: cat.attributes.title,
    paramName: cat.attributes.paramName,
    variants: cat.attributes.tags.data.map((tag) => tag.attributes.title),
  }));
  const categoryParamKeys = categoriesName.map((category) => category.paramName);

  const products = await getSearchProducts(label, resolvedSearchParams, categoryParamKeys);
  const pagination = products.meta?.pagination;

  return (
    <div
      className="section fullH"
      style={{
        paddingTop: '44px',
        background: '#FEF7E6',
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