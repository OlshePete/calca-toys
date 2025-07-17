import ProductPreview from '@modules/cards/ProductPreview';
import { IProduct, IResponseData } from '@/types/api';
import { Box, HTMLChakraProps } from '@chakra-ui/react';
import { FC } from 'react';
interface IProps extends HTMLChakraProps<'div'> {
  products: IResponseData<IProduct>[];
}
const ContentItems: FC<IProps> = ({ products, ...props }) => {
  return (
    <Box {...props}>
      {products &&
        products.map((product) => {
          return (
            <ProductPreview
              key={product.id + 'content item' + product.attributes.name}
              product={product}
            />
          );
        })}
    </Box>
  );
};
export default ContentItems;
