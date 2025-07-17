'use client';
import { setCookie, getCookie } from 'cookies-next';
import React, { useEffect } from 'react';
import { useViewedStore } from '@/store/viewedStore';

function CookieStateIntersept() {
  const {viewed:viewedItems,addViewedItem} = useViewedStore()
  const data = getCookie('viewed') || '';
  const parsedData = data ? JSON.parse(data) : [];

  useEffect(() => {
    setCookie('viewed', JSON.stringify([...viewedItems, ...parsedData]));
  }, [viewedItems]);

  useEffect(() => {
    if (parsedData && viewedItems.length === 0 && Array.isArray(parsedData))
      parsedData.forEach(data=>addViewedItem(data))
  });

  return <></>;
}

export default CookieStateIntersept;
