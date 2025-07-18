import { VStack, Box, Link, Text, HStack, Icon } from '@chakra-ui/react';
import { SearchResult } from './types';
import { MdShoppingBasket, MdCategory } from 'react-icons/md';
import { Tooltip } from "@components/ui/tooltip"
interface SearchResultsProps {
  results: SearchResult[];
  isVisible: boolean;
}

const SearchResults = ({ results, isVisible }: SearchResultsProps) => {
  if (!isVisible) return null;

  return (
    <Box
      position="absolute"
      top="100%"
      right="0"
      mt={2}
      bg="white"
      boxShadow="lg"
      borderRadius="md"
      zIndex={1000}
      maxH="300px"
      minW="300px"
      overflowY="auto"
      border="1px solid"
      borderColor="gray.200"
      transform="translateX(0)"
    >
      <VStack align="stretch" p={2}>
        {results.length === 0 ? (
          <Text color="gray.500" p={2} textAlign="center">
            Ничего не найдено
          </Text>
        ) : (
          results.map((result) => (
            <Tooltip key={result.id} content={result.description} positioning={{ placement: "right-end" }} showArrow>
              <Link
                href={result.url}
                p={2}
                borderRadius="md"
                _hover={{
                  textDecoration: 'none',
                  bg: 'gray.50',
                }}
                fontSize="sm"
              >
                <HStack >
                  <Icon
                    as={result.type === 'product' ? MdShoppingBasket : MdCategory}
                    color={result.type === 'product' ? 'pink.500' : 'blue.500'}
                  />
                  <Text>{result.title}</Text>
                </HStack>
              </Link>
            </Tooltip>
          ))
        )}
      </VStack>
    </Box>
  );
};

export default SearchResults;
