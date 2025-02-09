
export interface IMeta {
    pagination?: {
        page?: number,
        pageSize?: number,
        pageCount?: number,
        total?: number
    }
}

export interface IWebMeta {
    data: {
        id: number,
        attributes: {
            name: string,
            title: string,
            description: string,
            createdAt: string,
            updatedAt: string,
            publishedAt: string
        }
    },
    meta: IMeta
}
export interface IStartPageContent {
    data: {
        id: number,
        attributes: {
            start_blocks: {
                data: {
                    title: string,
                    subtitle: string,
                    body: string,
                    link: string,
                    updatedAt: string,
                    publishedAt: string,
                    image: any
                }[],
            },
            createdAt: string,
            updatedAt: string,
            publishedAt: string
        }
    },
    meta: IMeta
}
export interface IImageFormat {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    path: null | string;
    width: number;
    height: number;
    size: number;
    sizeInBytes: number;
    url: string;
}
export interface IImageAttributes {
    name: string;
    alternativeText: null | string;
    caption: null | string;
    width: number;
    height: number;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: null | string;
    provider: string;
    provider_metadata: null;
    createdAt: string;
    updatedAt: string;
    formats: Record<'thumbnail' & 'small' & 'medium' & 'large', IImageFormat>
}
export interface IImageContent extends IImageAttributes { }
export interface IImage extends IData<IImageContent> { }
export interface ICarouselItem extends IAttributeMeta {
    title: string,
    subtitle: string,
    body: string,
    image: IImage
}
// export interface IMainCarouselContent extends IData<IResponse<ICarouselItem>[]>{}
export interface IMainCarouselContent extends IMainCorouselData<Array<IResponseData<ICarouselItem>>> { }

export interface IMainCorouselData<K> extends Record<'data', K> { }
export interface IData<K> extends Record<'data', IResponseData<K>> { }
export interface IResponse<K> extends IData<K> {
    meta?: IMeta
}
export interface IResponseArrayWithDataMeta<K> extends Record<'data', K[]> {
    meta?: IMeta
}
export interface IResponseItemWithDataMeta<K> extends Record<'data', K> {
    meta?: IMeta
}
export interface IResponseData<K> {
    id: number,
    attributes: K,
}
export interface IAttributeMeta {
    createdAt: string,
    updatedAt: string,
    publishedAt: string
}
export type TProductType = "toy" | "balloon" | "supplies"
export interface IProductVariant {
    id:number,
    name:string;
    color:string | null;
    stock:number;
    image:IImage;
}
export interface IProduct extends IAttributeMeta {
  type?: TProductType,
  name: string,
  price: number,
  discount_price?: number,
  height?: number,
  width?: number,
  previewComment?: string,
  mustHave?: boolean,
  variant: IProductVariant[],
  comment: string,
  productDescription: string,
  productCharacteristic: string,
  connected?: IProduct[],
  article: string
}
export interface IAllProductsContent extends IResponseArrayWithDataMeta<IResponseData<IProduct>> {}
export interface IProductByIdContent extends IResponseItemWithDataMeta<IResponseData<IProduct>> {}