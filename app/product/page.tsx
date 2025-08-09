import { getAllProducts } from '@services/products/getProducts';
import { IProduct, IResponseData } from '@apptypes/api';
import ProductPreview from '@modules/cards/ProductPreview';
import { Box, SimpleGrid } from '@chakra-ui/react';
import ContentContainer from '@components/ContentContainer/ContentContainer';
import Breadcrumbs from '@components/BreadCrumb/BreadCrumb';
import { Suspense } from 'react';

export default async function ProductsPage() {
  const products = await getAllProducts();

  return (
    <Suspense fallback={<>Loading...</>}>
      <ContentContainer>
        <Breadcrumbs />
        <Box p={4}>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} justifyItems="center">
            {products.data.map((productData: IResponseData<IProduct>) => (
              <ProductPreview key={productData.id} product={productData} />
            ))}
          </SimpleGrid>
        </Box>
      </ContentContainer>
    </Suspense>
  );
}
