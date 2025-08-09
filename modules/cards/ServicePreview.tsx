import { ServicesCarouselItem } from '@apptypes';
import { Box, Button, Heading, VStack } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/navigation';
import CustomHeading from '../../ui/Heading/CustomHeading';
import CustomButton from '../../ui/Buttons/CustomButton';

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
          <CustomHeading visual="post_header" fontSize={28} lineHeight={'120%'} style={{}}>
            {name}
          </CustomHeading>
          <CustomHeading visual="post_header" fontSize={36} lineHeight={'120%'} style={{}}>
            {title}
          </CustomHeading>
        </VStack>
        <CustomButton visual="solid" width={150}>
          Перейти
        </CustomButton>
      </VStack>
    </Box>
  );
}

export default ServicePreview;
