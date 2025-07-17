'use client';

import { Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Можно добавить логирование ошибок в сервис аналитики
    console.error('Произошла ошибка:', error);
  }, [error]);

  return (
    <Container maxW="container.xl" py={20}>
      <VStack spacing={8} align="center" justify="center" minH="60vh">
        <Box textAlign="center" py={10} px={6}>
          <Heading display="inline-block" as="h1" size="4xl" color="red.500" mb={4}>
            Упс!
          </Heading>

          <Text fontSize="xl" mb={4}>
            Произошла ошибка при загрузке страницы
          </Text>

          <Text color="gray.500" mb={6}>
            Мы уже работаем над её устранением. Пожалуйста, попробуйте перезагрузить страницу.
          </Text>

          <Button
            onClick={reset}
            colorScheme="pink"
            size="lg"
            _hover={{
              bg: 'pink.600',
            }}
          >
            Попробовать снова
          </Button>
        </Box>
      </VStack>
    </Container>
  );
}
