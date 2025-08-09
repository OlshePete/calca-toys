import { _getSizes } from '@modules/cards/ProductPreview';
import { IBasketItem, IProductBasketVariant } from '@apptypes/basket';
import {
  Box,
  HStack,
  IconButton,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react';
import Image from 'next/image';
import { FC } from 'react';
import { CountPicker } from '../../ui/inputs/CountPicker';
import Button from '../../ui/Buttons/CustomButton';
import Text from '../../ui/Text/CustomText';
import { useBasketStore } from '@store/basketStore';
import { LuPlus } from 'react-icons/lu';
interface IProps {
  item: IBasketItem;
  variant: IProductBasketVariant;
  isConfirm?: boolean;
}

const BasketItem: FC<IProps> = ({ item, variant, isConfirm = false }) => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const isMobile = useBreakpointValue({ base: true, md: false });
  const { updateCountById, removeById } = useBasketStore();
  const { id, product } = item;
  const { name, article, width, height, previewComment, discount_price, price } =
    product.attributes;
  const { id: variantId, value } = variant;
  const variantData = Object.values(item.product.attributes.variant).find(
    (el) => el.id === variantId
  );

  // Получаем текущее количество этого варианта в корзине
  const currentCount = value;
  const stock = variantData?.stock ?? 0;

  const handleCountChange = (newValue: number) => {
    updateCountById(id, {
      ...variant,
      value: newValue - currentCount, // передаем разницу
    });
  };

  const handleRemove = () => {
    // Если это последний вариант товара, удаляем товар полностью
    if (Object.keys(item.variant).length === 1) {
      removeById(id);
    } else {
      // Иначе удаляем только этот вариант
      updateCountById(id, {
        ...variant,
        value: -currentCount, // уменьшаем количество до 0
      });
    }
  };

  return (
    <HStack
      key={variant.id}
      width={isMobile ? 'calc(100% - 32px)' : undefined}
      paddingBottom={isConfirm ? '26px' : '40px'}
      borderBottom={'1px solid rgba(0,0,0,.15)'}
      base={{
        '& > img': {
          borderRadius: '9px',
          minWidth: isConfirm || isMobile ? '100px' : '170px',
          width: isConfirm || isMobile ? '100px' : '170px',
          height: isConfirm || isMobile ? '120px' : '200px',
          objectFit: 'cover',
        },
      }}
    >
      {variantData && variantData.image?.data?.attributes?.url && isMobile && (
        <Image
          alt="product small pict"
          height={120}
          width={90}
          src={`${API_URL}/cms${variantData.image.data.attributes.url}`}
        />
      )}
      {variantData && variantData.image?.data?.attributes?.url && !isMobile && (
        <Image
          alt="product small pict"
          height={204}
          width={170}
          src={`${API_URL}/cms${variantData.image.data.attributes.url}`}
        />
      )}

      <VStack w={'100%'} h={isConfirm ? '120px' : '200px'} pl={isConfirm ? '0px' : '30px'}>
        <Box
          w={'100%'}
          flexGrow={1}
          display={'flex'}
          flexDirection={isConfirm ? 'column' : 'row'}
          justifyContent={'space-between'}
        >
          <Box>
            <Text flexGrow={1} fontSize={isConfirm ? '12px' : '14px'}>
              Артикул: {article}
            </Text>
            <Text flexGrow={1} fontSize={isConfirm ? '14px' : '16px'}>
              {name}
            </Text>
          </Box>
          <Box pt={isConfirm ? '0px' : '24px'} w={'fit-content'}>
            {!previewComment && (height || width) && (
              <Text visual={'product_text_sub'} fontSize={isConfirm ? '12px' : '14px'}>
                {_getSizes(height, width)}
              </Text>
            )}
            {!discount_price ? (
              <Text visual={'product_text'}>{price} ₽</Text>
            ) : (
              <Box display={'flex'} gap={'4px'} flexDirection={'column'}>
                <Text visual={'product_text'} fontSize={isConfirm ? '16px' : '18px'}>
                  {discount_price} ₽
                </Text>
                <Text
                  visual={'price_text'}
                  className="crossed"
                  fontSize={isConfirm ? '16px' : '18px'}
                >
                  {price} ₽
                </Text>
              </Box>
            )}
          </Box>
        </Box>

        {!isConfirm && (
          <Box
            position={'relative'}
            w={'100%'}
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <CountPicker max={stock} current={currentCount} handler={handleCountChange} />
            <Button
              onClick={() => {
                alert();
              }}
              position={isMobile ? 'absolute' : 'inherit'}
              top={isMobile ? -8 : 0}
              visual={'ghost'}
              fontSize={'14px'}
              p={0}
              h={'fit-content'}
              fontWeight={300}
              color={'#F49AA5'}
              textDecoration={'underline'}
              textUnderlineOffset={'4px'}
              _hover={{ background: 'transparent' }}
            >
              Добавить грузик<LuPlus/>
            </Button>
            <IconButton
              onClick={handleRemove}
              aria-label="remove basket item"
              bg={'#90BCE4'}
            >
              <Image src="/trash.svg" alt="Basket icon" width={16} height={16} priority />
              </IconButton>
          </Box>
        )}
      </VStack>
      {isConfirm && (
        <Text fontSize={20} pr={isMobile ? 12 : 0}>
          {value}
        </Text>
      )}
    </HStack>
  );
};

export default BasketItem;
