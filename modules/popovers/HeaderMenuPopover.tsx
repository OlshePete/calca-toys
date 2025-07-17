'use client';
import React, { FC, useState } from 'react';
import {
  Box,
  Icon,
  Image,
  Popover,
  PopoverBody,
  PopoverContent,
  VStack,
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { useHeaderMenu } from '@components/context/HeaderMenuContext';
import { IAllCategoryNames } from '@apptypes/api';
import Button from '../../ui/Buttons/CustomButton';
interface IProps {
  categoryNames: IAllCategoryNames | undefined;
}
const HeaderMenuPopover: FC<IProps> = ({ categoryNames }) => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const { activeCategory, setActiveCategory } = useHeaderMenu();
  const router = useRouter();
  const currentCategories =
    activeCategory && categoryNames?.data?.filter((c, i) => c.attributes.type === activeCategory);
  const [currentIndex, setIndex] = useState(0);
  const activeCategoryTile = categoryNames?.data.find((cat) => cat.id === currentIndex)?.attributes
    .title;
  const onClose = () => setActiveCategory(null);
  return (
    <Popover.Root open={Boolean(activeCategory)} onOpenChange={(e) => !e.open && onClose()} autoFocus>
      <PopoverContent
        width="712px"
        maxWidth="712px"
        height={'450px'}
        bg={'#E1ECEE'}
        position={'absolute'}
        left={0}
      >
        <PopoverBody
          w={'100%'}
          maxW={'100%'}
          h={'100%'}
          maxH={'100%'}
          padding={'40px 40px 45px 40px'}
        >
          <Box display={'flex'} h={'100%'} w={'100%'} maxH={'100%'} overflow={'hidden'}>
            <VStack width={'240px'} minW={'240px'}>
              {currentCategories &&
                currentCategories.map((category, i) => {
                  return (
                    <Button
                      visual={'header_popper_category'}
                      className={i === currentIndex ? 'active_category' : ''}
                      key={category.id}
                      onClick={() => setIndex(i)}
                      flexGrow={1}
                      position={'relative'}
                    >
                      <Image
                        src={`${API_URL}/cms${category.attributes.icon.data.attributes.url}`}
                        alt="Product avaliable in stock"
                        bg={'transparent'}
                        p={'2px'}
                        position={'absolute'}
                        left={0}
                      />
                      {category.attributes.title}a
                      
                
                    </Button>
                  );
                })}
              <Button
                visual={'header_popper_category'}
                className="to_catalog"
                onClick={() => {
                  router.push(`/catalog/${activeCategory}`);
                  onClose();
                }}
              >
                ВЕСЬ КАТАЛОГ
              </Button>
            </VStack>
            <Box
              height={'100%'}
              minHeight={'100%'}
              display={'flex'}
              flexDirection={'column'}
              flexWrap={'wrap'}
              flexGrow={1}
              px={'40px'}
              gap={'14px'}
            >
              {currentCategories &&
                currentCategories[currentIndex] &&
                currentCategories[currentIndex]?.attributes.tags.data.map(
                  (variant, variantIndex) => {
                    if (variantIndex > 12) return null;
                    return (
                      <Button
                        key={variant.id}
                        visual={'header_popper_category'}
                        className="only_text"
                        onClick={() => {
                          router.push(
                            `/catalog/${activeCategory}?holiday=${variant.attributes.title}`
                          );
                          onClose();
                        }}
                      >
                        {variant.attributes.title}
                      </Button>
                    );
                  }
                )}
              {currentCategories && (
                <Button
                  visual={'header_popper_category'}
                  className="only_text to_catalog"
                  onClick={() => {
                    router.push(`/catalog/${activeCategory}`);
                    onClose();
                  }}
                >
                  {/* {currentCategories[currentIndex]?.attributes.btnName} */}
                  {activeCategoryTile}
                </Button>
              )}
            </Box>
          </Box>
        </PopoverBody>
      </PopoverContent>
    </Popover.Root>
  );
};

export default HeaderMenuPopover;
