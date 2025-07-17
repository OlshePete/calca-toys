'use client';
import { Icon, Input, InputGroup, useBreakpointValue } from '@chakra-ui/react';
import React, { useState, useCallback } from 'react';
import SearchResults from './SearchResults';
import { SearchResult } from './types';

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  // Состояние для управления видимостью результатов
  const [isResultsVisible, setIsResultsVisible] = useState(false);

  const handleSearch = useCallback(async (query: string) => {
    try {
      setIsLoading(true);

      // Запрос к API
      const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
      const results: SearchResult[] = await response.json();

      setSearchResults(results);
      setIsResultsVisible(true);
    } catch (error) {
      console.error('Ошибка поиска:', error);
      setSearchResults([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);

    // Добавляем задержку перед отправкой запроса, чтобы избежать частых запросов
    const timeoutId = setTimeout(() => {
      if (value.trim()) {
        handleSearch(value);
      } else {
        setSearchResults([]);
        setIsResultsVisible(false);
      }
    }, 500);

    return () => clearTimeout(timeoutId);
  };

  // Обработчик потери фокуса
  const handleBlur = () => {
    // Добавляем небольшую задержку, чтобы успеть кликнуть по результатам
    setTimeout(() => {
      setIsResultsVisible(false);
    }, 200);
  };

  // Обработчик фокуса
  const handleFocus = () => {
    if (searchResults.length > 0) {
      setIsResultsVisible(true);
    }
  };

  return (
    <>
      <InputGroup
        startElement={
          <Icon
            pointerEvents="none"
            color="brand.800"
            width={18}
            height={18}
            marginLeft={11}
          >
            <svg viewBox="0 0 18 18">
              <path
                d="M11.7803 10.7197C11.4874 10.4268 11.0126 10.4268 10.7197 10.7197C10.4268 11.0126 10.4268 11.4874 10.7197 11.7803L11.7803 10.7197ZM15.2197 16.2803C15.5126 16.5732 15.9874 16.5732 16.2803 16.2803C16.5732 15.9874 16.5732 15.5126 16.2803 15.2197L15.2197 16.2803ZM7.5 12C5.01472 12 3 9.98528 3 7.5H1.5C1.5 10.8137 4.18629 13.5 7.5 13.5V12ZM12 7.5C12 9.98528 9.98528 12 7.5 12V13.5C10.8137 13.5 13.5 10.8137 13.5 7.5H12ZM7.5 3C9.98528 3 12 5.01472 12 7.5H13.5C13.5 4.18629 10.8137 1.5 7.5 1.5V3ZM7.5 1.5C4.18629 1.5 1.5 4.18629 1.5 7.5H3C3 5.01472 5.01472 3 7.5 3V1.5ZM10.7197 11.7803L15.2197 16.2803L16.2803 15.2197L11.7803 10.7197L10.7197 11.7803Z"
                fill="#F49AA5"
              />
            </svg>
          </Icon>
        }
        display={useBreakpointValue({ base: 'none', xl: 'inherit' })}
        className="search-bar"
        style={{
          maxWidth: 129,
          height:"40px",
        }}
        position="relative"
      >
        <Input
          type="text"
          variant={'outline'}
          value={searchQuery}
          onChange={handleInputChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          style={{
            maxWidth: 129,
            height:'100%',
            paddingLeft:'32px',
            borderRadius: '28px',
            border: '1px solid #FFEDC2',
            backgroundColor: '#FEF7E6',
          }}
        />
      </InputGroup>
      <SearchResults results={searchResults} isVisible={isResultsVisible} />
    </>
  );
}

export default SearchBar;
