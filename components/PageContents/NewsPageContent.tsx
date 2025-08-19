'use client';
import { Box, Tabs } from '@chakra-ui/react';
import { FC, useState, ReactElement, Children, useEffect, cloneElement, useCallback } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ChildrenComponentProps } from '@apptypes';
import { INewsResponse, TFilter, TSortVariants } from '@apptypes/api';
import SortSelect from '@components/SortSelect/SortSelect';

interface IProps extends ChildrenComponentProps {
  news: INewsResponse;
}

const newsTypes: Record<TFilter, string> = {
  frash: 'новинки',
  info: 'информация',
  time: 'график работы',
  job: 'вакансии',
};

const tabValues = [null, ...Object.keys(newsTypes)] as const;
type TabValue = (typeof tabValues)[number];

const NewsPageContent: FC<IProps> = ({ children, news }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [sort, setSort] = useState<TSortVariants>('date');
  const [sortedFilteredChildrenIds, setSortedFilteredChildrenIds] = useState<string[]>([]);
  const currentFilter = searchParams.get('type') as TFilter | null;

  // // Обновляем URL при смене таба
  // const handleTabChange= (event) => {
  //   console.log('Обновляем URL при смене таба', event.value);
  //   const newFilter = tabValues[index];
  //   const params = new URLSearchParams(searchParams);

  //   if (newFilter) {
  //     params.set('type', newFilter);
  //   } else {
  //     params.delete('type');
  //   }

  //   router.push(`${pathname}?${params.toString()}`);
  // };
  const getSortAndFilterChildrenIds = useCallback(() => {
    const childrenArray = Children.toArray(children) as ReactElement<any>[];

    return childrenArray
      .map((child) => {
        const newsItem = news.data.find((item) => item.id.toString() === child.props.id);
        return {
          id: child.props.id,
          publishedAt: newsItem?.attributes.publishedAt,
          title: newsItem?.attributes.title,
          type: newsItem?.attributes.type,
        };
      })
      .filter((item) => {
        if (currentFilter) {
          return item.type === currentFilter;
        }
        return true;
      })
      .sort((a, b) => {
        if (sort === 'date') {
          return (
            new Date(b.publishedAt as string).getTime() -
            new Date(a.publishedAt as string).getTime()
          );
        } else {
          return (a.title || '').localeCompare(b.title || '');
        }
      })
      .map((item) => item.id);
  },[children, news, sort, currentFilter]);

  const setSortedIds = useCallback(()=>{
    setSortedFilteredChildrenIds(getSortAndFilterChildrenIds());
  },[setSortedFilteredChildrenIds,getSortAndFilterChildrenIds])

  useEffect(() => {
    setSortedIds();
  }, [sort, currentFilter, searchParams]);

  const handleSortChange = (newValue: string) => {
    setSort(newValue as TSortVariants);
  };

  return (
    <Box as="section" position="relative" minH="560px" p={0} >
      <Box position="absolute" right={0} top="14px" zIndex={10}>
        <SortSelect
          value={sort}
          onChange={handleSortChange}
          options={{
            date: 'дате',
            name: 'заголовку',
          }}
          aria-label="Сортировка новостей"
        />
      </Box>
      <Tabs.Root
        lazyMount
        value={currentFilter ?? 'all'}
        onValueChange={(event) => {
          const newValue = (event.value === 'all'? null:event.value) as keyof TabValue | null
          const params = new URLSearchParams(searchParams);
          if (newValue) {
            params.set('type', newValue);
          } else {
            params.delete('type');
          }

          router.push(`${pathname}?${params.toString()}`);
        }}
        role="navigation"
        aria-label="Фильтры новостей"
      >

        <Tabs.List className='news-tab-container' maxW="834px" border="1px solid rgba(0,0,0,.15)" borderRadius="49px" p="6px"
       >
          <Tabs.Trigger
            value='all'
            _focus={{ boxShadow: 'none' }}
            fontSize="xs"
            w="50%"
            textTransform="uppercase"
            fontWeight={500}
            _selected={{ color: 'white', bg: '#F49AA5' }}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
            borderRadius={'40px'}
            cursor={'pointer'}
          >
            Все новости
          </Tabs.Trigger>
          {Object.entries(newsTypes).map(([key, label]) => (
            <Tabs.Trigger
              value={key}
              key={key}
              _focus={{ boxShadow: 'none' }}
              fontSize="xs"
              w="50%"
              textTransform="uppercase"
              fontWeight={500}
              _selected={{ color: 'white', bg: '#F49AA5' }}
              display={'flex'}
              alignItems={'center'}
              justifyContent={'center'}
              borderRadius={'40px'}
              cursor={'pointer'}
            >
              {label}
            </Tabs.Trigger>
          ))}
        </Tabs.List>

          <Tabs.Content p={0}  value='all' mt={'24px'}>
            <Box
              as="section"
              display="flex"
              m={0}
              flexWrap="wrap"
              minW="100%"
              gap="30px"
              aria-label="Список новостей"
            >
              {Children.map(children, (child) => {
                const childId = (child as ReactElement<any>).props.id;
                return cloneElement(child as ReactElement<any>, {
                  style: {
                    display: sortedFilteredChildrenIds.includes(childId) ? 'block' : 'none',
                  },
                });
              })}
            </Box>
          </Tabs.Content>
      </Tabs.Root>
    </Box>
  );
};

export default NewsPageContent;
