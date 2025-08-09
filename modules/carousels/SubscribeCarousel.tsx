'use client';
import React from 'react';
import Link from 'next/link';
import { SubscribeCarouselProps } from '@apptypes';
import CustomHeading from '../../ui/Heading/CustomHeading';
import { getImagesNodes } from '../../helpers/utils';
import BaseCarousel from './BaseCarousel';

function SubscribeCarousel({ content }: SubscribeCarouselProps) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const { title, link, linkTitle, images } = content.data.attributes

  return (
    <BaseCarousel
      label=""
      products={[]}
      withButton={false}
      components={{
        label: <CustomHeading
          visual={'post_header'}
        >
          {title}{' '}
          <Link
            href={link}
            target="_blank"
            style={{ color: '#90BCE4', fontSize: '1em', fontFamily: 'inherit' }}
          >
            {linkTitle}
          </Link>
        </CustomHeading>,
        items: getImagesNodes(images, API_URL)
      }}
    />
  )
}
export default SubscribeCarousel;
