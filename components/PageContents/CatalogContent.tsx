'use client';
import { Accordion, Box } from '@chakra-ui/react';
import { FC, useState, useEffect, useMemo, useCallback } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation'; // Для Next.js 13+
import AccordionItem from '../catalog/AccordionItem';
import CatalogContentHeader from '../catalog/CatalogContentHeader';
import ContentItems from '../catalog/ContentItems';
import PricePicker from '../catalog/PricePicker';
import { IAllProductsContent, IProduct, IResponseData, TSortProdcutVariant, TypeLabel } from '@apptypes/api';
import { useAvailableSettings } from '../context/useAvailableSettings';
import CustomColorPicker from '../catalog/CustomColorPicker';
import { useProducts } from '../context/useProductsContext';
import CatalogContentFooter from '../catalog/CatalogContentFooter';
import CheckBoxGroup from '../catalog/CheckBoxGroup';
import CatalogDrawer from '@modules/drawers/CatalogDrawer';
import CustomHeading from '../../ui/Heading/CustomHeading';
import SortSelect from '@components/SortSelect/SortSelect';
interface ICatalogContentProps {
  label: TypeLabel;
  products: IAllProductsContent;
  materials: string[];
  priceLimits: [number, number];
  pagination?: {
    page?: number;
    pageSize?: number;
    pageCount?: number;
    total?: number;
  };
  categoriesName: {
    title: string;
    paramName: string;
    variants: string[];
  }[];
}
type TSpecialVariant =  'action' | 'musthave'

export const SPECIAL_LIST:Record<TSpecialVariant, string> = {
  action: 'акция',
  musthave: 'хит продаж',
};
const filterByTypeParams = (
  params: Record<string, string[]> | null,
  type: string = 'page'
): Record<string, string[]> | null => {
  if (!params) return null;
  const result = Object.keys(params).reduce<Record<string, string[]>>((acc, param) => {
    if (param !== type) acc[param] = params[param];
    return acc;
  }, {});
  return result;
};
const filterByPrice = (products: IResponseData<IProduct>[], price: [number, number]) =>
  [...products].filter((product) => {
    const value = product.attributes?.discount_price ?? product.attributes.price;
    const [min, max] = price;
    return value >= min && value <= max;
  });
  
const filterBySpecial = (products: IResponseData<IProduct>[], special: string[] | null) => {
  if(!special || special.length === 0) return [...products];
  const checkAction = special.includes('action');  
  const checkMusthave = special.includes('musthave');  
  return [...products].filter((product) => {
    const isAction = Boolean(product.attributes.discount_price)
    const isMusthave = product.attributes?.mustHave
    
    return (checkAction && checkMusthave) 
      ? (isAction || isMusthave)
      : checkAction 
        ? isAction 
        : isMusthave
  })
};

const SORT_OPTIONS:Record<TSortProdcutVariant, string> = {
  price_inc: 'цена по возрастанию',
  price_dec: 'цена по убыванию',
};
const CatalogContent: FC<ICatalogContentProps> = ({
  label,
  categoriesName,
  products,
  pagination,
  materials,
  priceLimits,
}) => {
  const [params, setParams] = useState<Record<string, string[]> | null>(null);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const avaliableParams = useAvailableSettings();
  const [specials, setSpecials] = useState<string[] | null>(null);
  const [price, setPrice] = useState<[number, number]>([0, priceLimits[1]]);
  const [sortValue, setSortValue] = useState<TSortProdcutVariant>('price_dec');
  const filterSpecial = useCallback((products:IResponseData<IProduct>[])=>{
    return filterBySpecial(products, specials)
  },[specials])
  
  const [filteredProducts, setFilteredProducts] = useState<IResponseData<IProduct>[]>(
    filterSpecial(filterByPrice(products.data, price))
  );

  useEffect(() => {
    setFilteredProducts(filterSpecial(filterByPrice(products.data, price)));
  }, [products, price, specials]);

  // Инициализация params из searchParams при первом рендере
  useEffect(() => {
    const initialParams: Record<string, string[]> = {};
    searchParams?.forEach((value, key) => {
      initialParams[key] = value.split(',');
    });

    setParams(initialParams);
  }, [searchParams]);

  // Обработка изменения параметров
  const handleChangeParams = (type: string, newValue: string[] | null) => {
    setParams((prev) => {
      if (!newValue) return filterByTypeParams(prev, type);
      const newParams = {
        ...prev,
        [type]: newValue,
      };
      return newParams;
    });
  };
  const setPage = (value: number) => {
    if (value === pagination?.page) return;
    if (value <= 1) setParams(filterByTypeParams);
    else handleChangeParams('page', [String(value)]);
  };

  // Преобразуем params в строку для сравнения
  const paramsString = useMemo(() => JSON.stringify(params), [params]);

  // Обновление URL при изменении params
  useEffect(() => {
    if (!params) return;

    const newSearchParams = new URLSearchParams();
    Object.entries(params).forEach(([paramName, values]) => {
      if (values.length > 0) {
        newSearchParams.set(paramName, values.join(','));
      }
    });
    const currentSearchParams = new URLSearchParams(searchParams?.toString());

    if (newSearchParams.toString() !== currentSearchParams.toString()) {
      const newUrl = `${pathname}?${newSearchParams.toString()}`;
      router.replace(newUrl, { scroll: false });
    }
  }, [params]);

  const defaultCategory = {
    title: 'Материал',
    paramName: 'material',
    variants: materials,
  };

  const headerList = useMemo(() => {
    if (!params) return [];
    return Object.keys(params)
      .filter((par) => params[par].length > 0 )
      .map((par) => ({ label: params[par], paramName: par }));
  }, [params]);

  const handleSetSpecial: (value: string[]) => void = (value) => {
    setSpecials(() => {
      let newSpecials: string[] = [];
      value.forEach((label) => {
        const param = Object.entries(SPECIAL_LIST).find(
          ([key, special]) => special === label.toLowerCase()
        )?.[0];
        if (param) newSpecials.push(param);
      });
      return newSpecials.length != 0 ? newSpecials : null;
    });
  };
console.log('params', params)
  return (
    <>
      <CustomHeading visual={'post_header'} pt={'60px'} pb={'40px'}>
        {label}
      </CustomHeading> 
      <Box display={'flex'} minH={'100dvh'}>
        <CatalogDrawer>
          <>
            <Accordion.Root multiple >
              {[defaultCategory, ...categoriesName].map(({ title, paramName, variants }) => (
                <AccordionItem
                  value={paramName}
                  key={paramName}
                  propValue={
                    params
                      ? params?.[paramName]
                        ? params[paramName].map((n) => n.toLowerCase())
                        : []
                      : []
                  }
                  label={title}
                  paramName={paramName}
                  variants={variants.map((v) => v.toLowerCase())}
                  onValueChange={handleChangeParams}
                />
              ))}
            </Accordion.Root>
            <CheckBoxGroup
              withAll={false}
              labels={Object.values(SPECIAL_LIST)}
              setValue={handleSetSpecial}
              value={
                specials
                  ? specials.map((special) => SPECIAL_LIST[special as keyof typeof SPECIAL_LIST])
                  : []
              }
              paramName={'specials'}
            />
            <PricePicker
              limit={priceLimits}
              min={Number(price[0])}
              max={Number(price[1])}
              setValue={(min: number, max: number) => {
                setPrice([min < 0 ? 0 : min, max > priceLimits[1] ? priceLimits[1] : max]);
              }}
            />
            <CustomColorPicker
              onChange={(color) => {
                console.log('color',color, params?.color?.includes(color))
                const newColors = params?.color?.includes(color)
                  ? params?.color.filter((parCol) => parCol !== color)
                  : Array.from(new Set([...(params?.color ?? []), color]));
                handleChangeParams('color', newColors);
              }}
              activeColors={params?.color ?? []}
              colors={avaliableParams.colors}
            />
          </>
        </CatalogDrawer>
        <Box flexGrow={1}>
          <CatalogContentHeader
            mb={'22px'}
            list={headerList}
            price={price}
            priceLimits={priceLimits}
            specials={specials}
            onDeleteSpecial={(value, paramName)=>{
              setSpecials(prev=>prev?.filter(spec=>spec!==value) ?? null)
            }}
            onDelete={(label, paramName) => {
              setParams((prev) => {
                if (!prev) return prev;
                const newParams = { ...prev };
                if (newParams[paramName]) {
                  newParams[paramName] = newParams[paramName].filter((item) => item !== (paramName==='color'?label.slice(1):label));
                }
                if (newParams[paramName] && newParams[paramName].length === 0) {
                  delete newParams[paramName];
                }
                return newParams;
              });
            }}
            onDeletePrice={(priceVariant)=>{
              const isStart = priceVariant === 'start'
              const zeroBasedPriceLimit = [0, priceLimits[1]]
              setPrice(prev=>[
                isStart?zeroBasedPriceLimit[0]:prev[0],
                !isStart?zeroBasedPriceLimit[1]:prev[1],
              ])
            }}
          >
            <SortSelect
              options={SORT_OPTIONS}
              onChange={(v) => setSortValue(v as TSortProdcutVariant)}
              value={sortValue}
            />
          </CatalogContentHeader>
          <ContentItems
            minH={400}
            products={filteredProducts}
            sortValue={sortValue}
            params={params}
            // hasParams={Boolean(params) || Object.keys(params) }
            display={'flex'}
            columnGap={'30px'}
            rowGap={'20px'}
            flexWrap={'wrap'}
            mb={'60px'}
            justifyContent={'flex-start'}
          />
          <CatalogContentFooter
            current={pagination?.page ?? 1}
            onButtonClick={console.log}
            total={pagination?.pageCount ?? 1}
            setPage={setPage}
          />
        </Box>
      </Box>
    </>
  );
};

export default CatalogContent;
