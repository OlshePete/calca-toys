'use client'
import { Box, Button, HTMLChakraProps } from "@chakra-ui/react";
import { FC } from "react";

interface ICheckBoxProps extends HTMLChakraProps<"div"> {
  current: number;
  total: number;
  setPage: (value: number) => void;
  onButtonClick: () => void;
}

const CatalogContentFooter: FC<ICheckBoxProps> = ({ current, total, setPage, onButtonClick, ...props }) => {
  const getVisiblePages = (current: number, total: number) => {
    if (total <= 4) {
      return Array.from({ length: total }, (_, i) => i + 1);
    }
    if (current <= 3) {
      return [1, 2, 3, 4, total];
    }
    if (current >= total - 2) {
      return [1, total - 3, total - 2, total - 1, total];
    }
    return [1, current - 1, current, current + 1, total];
  };

  const handlePageClick = (page: number) => {
    setPage(page);
  };

  const handleEllipsisClick = (deg:boolean=false) => {
    const newPage = deg ? current - 2 :  current + 2;
    setPage(newPage);
  };

  const renderPageButtons = () => {
    const pages = getVisiblePages(current, total);
    return pages.map((page, index) => {
        if (page === 1 && pages[index + 1] !== page + 1) {
          return (
            <Box key={index} display="flex" alignItems="center">
              <Button
                size="sm"
                w="40px"
                h="40px"
                borderRadius="50%"
                bg={current === page ? "#F49AA5" : "transparent"}
                color={current === page ? "#FFFFFF" :"#313131"}
                onClick={() => handlePageClick(page)}
                mx={1}
              >
                {page}
              </Button>
             {page !== total && <Button
                size="sm"
                variant="ghost"
                onClick={()=>handleEllipsisClick(true)}
                mx={1}
                color={current === page ? "#FFFFFF" :"#313131"}
              >
                ...
              </Button>}
            </Box>
          );
        }
      if (page === total && pages[index - 1] !== page - 1) {
        return (
          <Box key={index} display="flex" alignItems="center">
            <Button
              size="sm"
              variant="ghost"
              color={'#313131'}
              onClick={()=>handleEllipsisClick()}
              mx={1}
            >
              ...
            </Button>
            <Button
              size="sm"
              w="40px"
              h="40px"
              borderRadius="50%"
              bg={current === page ? "#F49AA5" : "transparent"}
              color={current === page ? "#FFFFFF" :"#313131"}
              onClick={() => handlePageClick(page)}
              mx={1}
            >
              {page}
            </Button>
          </Box>
        );
      }
      return (
        <Button
          key={index}
          size="sm"
          w="40px"
          h="40px"
          color={current === page ? "#FFFFFF" :"#313131"}
          borderRadius="50%"
          bg={current === page ? "#F49AA5" : "transparent"}
          onClick={() => handlePageClick(page)}
          mx={1}
        >
          {page}
        </Button>
      );
    });
  };

  return (
    <Box w={'100%'} minH={'160px'}  display="flex" flexDirection={'column'}  {...props}>
      <Box w={'100%'} display="flex" justifyContent="flex-end" alignItems="center">
        {renderPageButtons()}
      </Box>
      {total!==current && <Button
        mt={'4px'}
        onClick={onButtonClick}
        width={'fit-content'}
        alignSelf={'center'}
>
        Смотреть ещё
      </Button>}
    </Box>
  );
};

export default CatalogContentFooter;