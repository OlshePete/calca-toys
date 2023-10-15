"use client";
import { RootState } from "@/app/GlobalRedux/store";
import { Product } from "@/types";
import { setCookie, getCookie } from "cookies-next";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addViewedItems } from "@/app/GlobalRedux/Feature/viewed/viewedSlice";

function CookieStateIntersept() {
  const dispatch = useDispatch();
  const viewedItems: Product[] = useSelector(
    (state: RootState) => state.viewed.items
  );
  const data = getCookie("viewed") || "";
  const parsedData = data ? JSON.parse(data) : [];

  useEffect(() => {
    setCookie("viewed", JSON.stringify([...viewedItems, ...parsedData]));
  }, [viewedItems]);

  useEffect(() => {
    if (parsedData && viewedItems.length === 0 && Array.isArray(parsedData))
      dispatch(addViewedItems(parsedData));
  });

  return <></>;
}

export default CookieStateIntersept;
