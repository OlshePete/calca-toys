'use client'

import { Box, Button, Container, Heading, Text, VStack, HStack } from '@chakra-ui/react'
import Link from 'next/link'
import { useEffect } from 'react'

export default function NewsError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Можно добавить логирование ошибок в сервис аналитики
    console.error('Ошибка в разделе новостей:', error)
  }, [error])

  return (
    <Container maxW="container.xl" py={20}>
      <VStack spacing={8} align="center" justify="center" minH="60vh">
        <Box textAlign="center" py={10} px={6}>
          <Heading
            display="inline-block"
            as="h1"
            size="4xl"
            color="red.500"
            mb={4}
          >
            Ошибка
          </Heading>
          
          <Text fontSize="xl" mb={4}>
            Не удалось загрузить новости
          </Text>
          
          <Text color="gray.500" mb={6}>
            Возможно, произошла ошибка при получении данных. Пожалуйста, попробуйте позже.
          </Text>

          <HStack spacing={4} justify="center">
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

            <Link href="/" passHref>
              <Button
                variant="outline"
                colorScheme="pink"
                size="lg"
              >
                На главную
              </Button>
            </Link>
          </HStack>
        </Box>
      </VStack>
    </Container>
  )
} 