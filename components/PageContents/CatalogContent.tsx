'use client';
import { Accordion, Box } from '@chakra-ui/react';
import { FC, useState, useEffect, useMemo } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation'; // Для Next.js 13+
import AccordionItem from '../catalog/AccordionItem';
import CatalogContentHeader from '../catalog/CatalogContentHeader';
import ContentItems from '../catalog/ContentItems';
import PricePicker from '../catalog/PricePicker';
import { IAllProductsContent, IProduct, IResponseData, TypeLabel } from '@apptypes/api';
import { useAvailableSettings } from '../context/useAvailableSettings';
import CustomColorPicker from '../catalog/CustomColorPicker';
import { useProducts } from '../context/useProductsContext';
import CatalogContentFooter from '../catalog/CatalogContentFooter';
import CheckBoxGroup from '../catalog/CheckBoxGroup';
import CatalogDrawer from '@modules/drawers/CatalogDrawer';
import CustomHeading from '../../ui/Heading/CustomHeading';
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
const SPECIAL_LIST = {
  action: 'акция',
  musthave: 'хит продаж',
};
const CatalogContent: FC<ICatalogContentProps> = ({
  label,
  categoriesName,
  products,
  pagination,
  materials,
  priceLimits,
}) => {
  console.log('priceLimits', priceLimits);
  console.log('products %%%%', products);

  const [params, setParams] = useState<Record<string, string[]> | null>(null);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const avaliableParams = useAvailableSettings();
  const [specials, setSpecials] = useState<string[] | null>(null);
  const [price, setPrice] = useState<[number, number]>([0, priceLimits[1]]);
  const [filteredProducts, setFilteredProducts] = useState<IResponseData<IProduct>[]>(
    filterByPrice(products.data, price)
  );
  // console.log('filteredProducts', price, products.data.length, filteredProducts);
  // const filteredProducts = filterByPrice
  useEffect(() => {
    setFilteredProducts(filterByPrice(products.data, price));
  }, [products, price]);
  // Инициализация params из searchParams при первом рендере
  useEffect(() => {
    // console.log('%%1 effect 1 ', params);
    const initialParams: Record<string, string[]> = {};
    searchParams?.forEach((value, key) => {
      initialParams[key] = value.split(',');
    });
    // console.log('%%1 initialParams', initialParams);

    setParams(initialParams);
  }, [searchParams]);
  // console.log('%%1 products', products);

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
    // console.log('%%2 effect', params);
    if (!params) return;

    const newSearchParams = new URLSearchParams();
    Object.entries(params).forEach(([paramName, values]) => {
      if (values.length > 0) {
        newSearchParams.set(paramName, values.join(','));
      }
    });
    //когда урл обновляется парамс ещё не обновились
    // console.log('%%1 params', params);
    // console.log('%%1 searchParams', searchParams?.toString());
    const currentSearchParams = new URLSearchParams(searchParams?.toString());

    if (newSearchParams.toString() !== currentSearchParams.toString()) {
      // console.log('%%1 flirt', newSearchParams.toString(), currentSearchParams.toString());

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
      .filter((par) => params[par].length > 0 && !['price', 'color'].includes(par))
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

  return (
    <>
      <CustomHeading visual={'post_header'} pt={'60px'} pb={'40px'}>
        {label}
      </CustomHeading> 
      <Box display={'flex'} minH={'100dvh'}>
        <CatalogDrawer>
          <>
            <Accordion.Root >
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
                // handleChangeParams('price',[String(min),String(max)])
              }}
            />
            <CustomColorPicker
              onChange={(color) => {
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
            onDelete={(label, paramName) => {
              setParams((prev) => {
                if (!prev) return prev;
                const newParams = { ...prev };
                if (newParams[paramName]) {
                  newParams[paramName] = newParams[paramName].filter((item) => item !== label);
                }
                if (newParams[paramName] && newParams[paramName].length === 0) {
                  delete newParams[paramName];
                }
                return newParams;
              });
            }}
          />
          <ContentItems
            minH={400}
            products={filteredProducts}
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
