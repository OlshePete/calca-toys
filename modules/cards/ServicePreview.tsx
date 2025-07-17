import { ServicesCarouselItem } from '@/types';
import { Box, Button, Heading, VStack } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/navigation';

interface ServicePreviewProps {
  service: ServicesCarouselItem;
}

function ServicePreview({ service }: ServicePreviewProps) {
  const router = useRouter();
  const { image, link, name, title, id } = service;
  return (
    <Box
      className="product-sm"
      onClick={() => {
        console.log('click', id);
        router.push('/service/' + id);
      }}
      style={{
        margin: 0,
        position: 'relative',
        width: '370px',
        height: '441px',
      }}
    >
      <Image
        alt={name}
        src={image}
        width={370}
        height={440}
        style={{
          borderRadius: '14px',
          objectFit: 'cover',
          minWidth: '370px',
          maxWidth: '370px',
          minHeight: '440px',
          maxHeight: '440px',
        }}
      />

      <VStack
        position={'absolute'}
        bottom={'50px'}
        left={'40px'}
        alignItems={'flex-start'}
        gap={'40px'}
      >
        <VStack alignItems={'flex-start'} gap={0}>
          <Heading variant="post_header" fontSize={28} lineHeight={'120%'} style={{}}>
            {name}
          </Heading>
          <Heading variant="post_header" fontSize={36} lineHeight={'120%'} style={{}}>
            {title}
          </Heading>
        </VStack>
        <Button variant="solid" width={150}>
          Перейти
        </Button>
      </VStack>
    </Box>
  );
}

export default ServicePreview;
