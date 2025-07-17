// import { Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}
//   return (
//     <Container maxW="container.xl" py={20}>
//       <VStack spacing={8} align="center" justify="center" minH="60vh">
//         <Box textAlign="center" py={10} px={6}>
//           <Heading
//             display="inline-block"
//             as="h1"
//             size="4xl"
//             bgGradient="linear(to-r, pink.400, pink.600)"
//             backgroundClip="text"
//             mb={4}
//           >
//             404
//           </Heading>

//           <Text fontSize="xl" mb={4}>
//             Страница не найдена
//           </Text>

//           <Text color="gray.500" mb={6}>
//             Возможно, страница была удалена или её адрес был изменён
//           </Text>

//           <Link href="/" passHref>
//             <Button
//               colorScheme="pink"
//               size="lg"
//               _hover={{
//                 bg: 'pink.600',
//               }}
//             >
//               Вернуться на главную
//             </Button>
//           </Link>
//         </Box>
//       </VStack>
//     </Container>
//   );
// }
