
import React from 'react';
import { getMainCarouselContent } from '@/services/getMainCarousel'
import MainCarousel from '@/modules/carousels/MainCarousel';

const MainCarouselContent = async () => {
  const contentData = await getMainCarouselContent();
  return (
    <div>
      <MainCarousel
        data={contentData}
      />
    </div>
  );
};

export default MainCarouselContent;