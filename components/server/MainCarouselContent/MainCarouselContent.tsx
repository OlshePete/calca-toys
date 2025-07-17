import React from 'react';
import MainCarousel from '@modules/carousels/MainCarousel';
import { getMainCarouselContent } from '@services/getMainCarousel';

const MainCarouselContent = async () => {
  const contentData = await getMainCarouselContent();
  return (
    <div>
      <MainCarousel data={contentData} />
    </div>
  );
};

export default MainCarouselContent;
