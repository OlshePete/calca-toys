"use client";
import { ChildrenComponentProps } from "@/types";
import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { FC, useState, ReactElement, Children, useEffect, cloneElement } from "react";
import SortSelect from "../SortSelect/SortSelect";
import { INewsResponse, TFilter, TSortVariants } from "@/types/api";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface IProps extends ChildrenComponentProps {
  news: INewsResponse;
}

const newsTypes: Record<TFilter, string> = {
  frash: "новинки",
  info: "информация",
  time: "график работы",
  job: "вакансии",
};

const tabValues = [null, ...Object.keys(newsTypes)] as const;
type TabValue = (typeof tabValues)[number];

const NewsPageContent: FC<IProps> = ({ children, news }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  const [sort, setSort] = useState<TSortVariants>("date");
  const [sortedFilteredChildrenIds, setSortedFilteredChildrenIds] = useState<string[]>([]);

  // Получаем текущий фильтр из URL или null
  const currentFilter = searchParams.get("type") as TFilter | null;
  const currentTabIndex = tabValues.indexOf(currentFilter);
  
  // Обновляем URL при смене таба
  const handleTabChange = (index: number) => {
    console.log('Обновляем URL при смене таба')
    const newFilter = tabValues[index];
    const params = new URLSearchParams(searchParams);
    
    if (newFilter) {
      params.set("type", newFilter);
    } else {
      params.delete("type");
    }
    
    router.push(`${pathname}?${params.toString()}`);
  };

  const getSortAndFilterChildrenIds = () => {
    const childrenArray = Children.toArray(children) as ReactElement[];

    return childrenArray
      .map((child) => {
        const newsItem = news.data.find(
          (item) => item.id.toString() === child.props.id
        );
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
        if (sort === "date") {
          return (
            new Date(b.publishedAt as string).getTime() - new Date(a.publishedAt as string).getTime()
          );
        } else {
          return (a.title || "").localeCompare(b.title || "");
        }
      })
      .map((item) => item.id);
  };

  useEffect(() => {
    setSortedFilteredChildrenIds(getSortAndFilterChildrenIds());
  }, [sort, currentFilter, searchParams]);

  const handleSortChange = (newValue: string) => {
    setSort(newValue as TSortVariants);
  };

  return (
    <Box as="section" position="relative" minH="560px" p={0}>
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

      <Tabs
        isLazy
        variant="soft-rounded"
        onChange={handleTabChange}
        index={currentTabIndex !== -1 ? currentTabIndex : 0}
        role="navigation"
        aria-label="Фильтры новостей"
      >
        <TabList
          maxW="834px"
          border="1px solid rgba(0,0,0,.15)"
          borderRadius="49px"
          p="6px"
        >
          <Tab
            _focus={{ boxShadow: "none" }}
            fontSize="xs"
            w="50%"
            textTransform="uppercase"
            fontWeight={500}
            _selected={{ color: "white", bg: "#F49AA5" }}
          >
            Все новости
          </Tab>
          {Object.entries(newsTypes).map(([key, label]) => (
            <Tab
              key={key}
              _focus={{ boxShadow: "none" }}
              fontSize="xs"
              w="50%"
              textTransform="uppercase"
              fontWeight={500}
              _selected={{ color: "white", bg: "#F49AA5" }}
            >
              {label}
            </Tab>
          ))}
        </TabList>

        <TabPanels minW="100%" pt="24px">
          <TabPanel p={0}>
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
                const childId = (child as ReactElement).props.id;
                return cloneElement(child as ReactElement, {
                  style: {
                    display: sortedFilteredChildrenIds.includes(childId) ? "block" : "none",
                  },
                });
              })}
            </Box>
          </TabPanel>

          {Object.keys(newsTypes).map((tab) => (
            <TabPanel key={`tab-${tab}`} p={0}>
              <Box
                as="section"
                display="flex"
                m={0}
                flexWrap="wrap"
                minW="100%"
                gap="30px"
                aria-label={`Список новостей: ${newsTypes[tab as TFilter]}`}
              >
                {Children.map(children, (child) => {
                  const childId = (child as ReactElement).props.id;
                  return cloneElement(child as ReactElement, {
                    style: {
                      display: sortedFilteredChildrenIds.includes(childId) ? "block" : "none",
                    },
                  });
                })}
              </Box>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default NewsPageContent;