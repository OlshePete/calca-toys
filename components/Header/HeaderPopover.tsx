import {
  Box,
  Icon,
  Image,
  Popover,
  Portal,
  VStack,
} from '@chakra-ui/react';
import { FC, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { IAllCategoryNames } from '@apptypes/api';
import Button from '../../ui/Buttons/CustomButton';
import { useHeaderMenu } from '@components/context/HeaderMenuContext';

interface IProps {
  label: string;
  categoryNames: IAllCategoryNames | undefined;
  category: string;
  container: React.RefObject<HTMLDivElement | null>
}

const HeaderPopover: FC<IProps> = ({ label, categoryNames, category, container }) => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const closeBtn = useRef<HTMLButtonElement>(null);
  const router = useRouter();
  const {} = useHeaderMenu()
  const currentCategories =
    category && categoryNames?.data?.filter((c, i) => c.attributes.type === category);
  const [currentIndex, setIndex] = useState(0);
  const activeCategoryTile = categoryNames?.data.find((cat) => cat.id === currentIndex)?.attributes;
  const btnLabel = Array.isArray(currentCategories)?currentCategories?.map(cat=>cat.attributes.btnName)[currentIndex]:"123"
  function onClose() {
    closeBtn.current?.click();
  }
  return    <Popover.Root positioning={{ offset: { crossAxis: 10, mainAxis: -.8 } }} >
      <Popover.Trigger asChild >
        <Button
          visual={'header_link'}
          borderRadius={0}
          minHeight={'100%'}
          width={'fit-content'}
          label={label}
          boxSizing={'content-box'}
          _hover={{
            outline:"none!important",
            borderBottom:'4px solid #90BCE4!important',
          }}
          onClick={(event)=>{console.log('onClick',event.currentTarget)}}
        >
          {label}
        </Button>
      </Popover.Trigger>
      <Portal >
        <Popover.Positioner>
          <Popover.Content
            width="712px"
            maxWidth="712px"
            height={'450px'}
            bg={'#E1ECEE'}
          >
            <Popover.Body>
          <Popover.Header
            height="400px"
            width="690px"
            maxWidth="690px">
            <Box display={'flex'} h={'100%'} w={'100%'} maxW={'100%'} maxH={'100%'} overflow={'hidden'}>
              <VStack width={'240px'} minW={'240px'}>
                {currentCategories &&
                  currentCategories.map((category, i) => {
                    return (
                      <Button
                        visual={'header_popper_category'}
                        width={'100%'}
                        height={'34px'}
                        className={i === currentIndex ? 'active_category' : ''}
                        key={category.id}
                        onClick={() => setIndex(i)}
                      >
                        <Image
                          src={`${API_URL}/cms${category.attributes.icon.data.attributes.url}`}
                          alt="Product avaliable in stock"
                          bg={'transparent'}
                          p={'2px'}
                          position={'absolute'}
                          left={0}
                          width={'36px'}
                          height={'36px'}
                        />
                        {category.attributes.title}
                      <Icon
                        position={'absolute'}
                        left={'90%'}
                        className="expand_icon"
                        transition={'all .2s ease-in-out'}
                      >
                        <svg width="11" height="21" viewBox="0 0 11 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 1L9 10.7568L1 20" stroke="#313131" strokeLinecap="round"  strokeWidth="2"/>
                        </svg>
                      </Icon> 
                      </Button>
                    );
                  })}
                <Button
                  visual={'header_popper_category'}
                  className="to_catalog"
                  width={'100%'}
                  onClick={() => {
                    router.push(`/catalog/${category}`);
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
                          height={'24px'}
                          onClick={() => {
                            router.push(`/catalog/${category}?holiday=${variant.attributes.title}`);
                            onClose();
                          }}
                        >
                          {variant.attributes.title}
                        </Button>
                      );
                    }
                  )}
                {btnLabel && (
                  <Button
                    visual={'header_popper_category'}
                    className="only_text to_catalog"
                    onClick={() => {
                      router.push(`/catalog/${category}`);
                      onClose();
                    }}
                  >
                    {btnLabel}
                  </Button>
                )}
              </Box>
            </Box>
          </Popover.Header>
            </Popover.Body>
          </Popover.Content>
        </Popover.Positioner>
      </Portal>
    </Popover.Root>
};
export { HeaderPopover };
