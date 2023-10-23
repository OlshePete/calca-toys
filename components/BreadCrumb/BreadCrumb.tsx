"use client";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import React from 'react'

function BreadCrumb() {
  return (<Breadcrumb pt={"32px"}>
  <BreadcrumbItem>
    <BreadcrumbLink href='#'>Home</BreadcrumbLink>
  </BreadcrumbItem>
  <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink href='#'>Breadcrumb</BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>
  )
}

export default BreadCrumb