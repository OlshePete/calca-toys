
export interface IMeta {
    pagination?: {
        page?: number,
        pageSize?: number,
        pageCount?: number,
        total?: number
    }
}
export type TSortVariants = 'date' | 'name'
export type TFilter = "time" | "frash" | "info" | "job"
export type TypeLabel = 'toy' | "balloon" | "supplies"
export interface ITypeLabels extends Record<TypeLabel, string> { }
export interface IWebMeta {
    data: {
        id: number,
        attributes: {
            name: string,
            title: string,
            description: string,
            internal:string,
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
}export interface IImageFormat {
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
    formats: Record<'thumbnail' | 'small' | 'medium' | 'large', IImageFormat>
}
export interface IImageContent extends IImageAttributes { }
export interface IImage extends IData<IImageContent> { }
export interface IImageArray extends IDataArray<IImageContent> { }
export interface IImageUrl extends IResponseItemWithDataMeta<IResponseData<{
    url: string
}>> { }

export interface ICarouselItem extends IAttributeMeta {
    title: string,
    subtitle: string,
    body: string,
    image: IImage
}
export interface IMainCarouselContent extends IMainCorouselData<Array<IResponseData<ICarouselItem>>> { }

export interface IMainCorouselData<K> extends Record<'data', K> { }
export interface IData<K> extends Record<'data', IResponseData<K>> { }
export interface IDataArray<K> extends Record<'data', Array<IResponseData<K>>> { }
export interface IResponse<K> extends IData<K> {
    meta?: IMeta
}
export interface IResponseArrayWithDataMeta<K> extends Record<'data', K[]> {
    meta?: IMeta
}
export interface IResponseItemInArrayWithDataMeta<K> extends Record<'data', [K]> {
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
export interface IProductType extends IAttributeMeta {
    internal:TProductType,
    title:string,
    image?:IImage
}
export interface IProductVariant {
    id: number,
    name: string;
    color: string | null;
    stock: number;
    image: IImage;
}
export interface ITag extends IAttributeMeta {
    title: string
}

export interface IMaterial extends IAttributeMeta {
    title: string;
    type: TProductType
}
export interface IProduct extends IAttributeMeta {
    type:IResponseItemWithDataMeta<IResponseData<IProductType>>
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
    connected?: IResponseItemWithDataMeta<IResponseData<IProduct>[]>,
    article: string,
    tags: IResponseItemWithDataMeta<IResponseData<ITag>[]>,
    materials: IResponseItemWithDataMeta<IResponseData<IMaterial>[]>
}
export interface ICategoryVariant {
    id: number,
    title: string,
    products: IResponseArrayWithDataMeta<IResponseData<IProduct>>
}
export interface ITag extends IAttributeMeta {
    title: string,
    category: ICategoryName
}
export interface ICategory extends IAttributeMeta {
    type?: TProductType,
    btnName: string,
    title: string,
    paramName: string,
    icon: IResponseItemWithDataMeta<IResponseData<{ url: string }>>
    tags: IResponseArrayWithDataMeta<IResponseData<ITag>>
}
export interface IAllProductsContent extends IResponseArrayWithDataMeta<IResponseData<IProduct>> { }
export interface IProductsTypesContent extends IResponseArrayWithDataMeta<IResponseData<IProductType>> { }
export interface IProductByIdContent extends IResponseItemWithDataMeta<IResponseData<IProduct>> { }
export interface ICategoryName extends IResponseItemWithDataMeta<IResponseData<ICategory>> { }
export interface IAllCategoryNames extends IResponseArrayWithDataMeta<IResponseData<ICategory>> { }
export interface IAllClients extends IResponseArrayWithDataMeta<IResponseData<IClient>> { }
export interface IClientResponse extends IResponseItemWithDataMeta<IResponseData<IClient>> { }
export interface IClientBase {
    name: string,
    phone: string,
    email: string,
    privacy: boolean,
    orders?: any,
    comment?: string,
    status?: 'feedback' | 'process' | 'complete'
}
export interface IClient extends IClientBase, IAttributeMeta { }
export interface INewClient extends IClientBase { }
export interface IContactsResponse extends IResponseItemWithDataMeta<IResponseData<IContacts>> {
}
export interface IContacts extends IAttributeMeta {
    address: string,
    time: string,
    phone: string,
    email: string
    socials: IContactsSocial[],
    essential: Array<{
        id: number,
        title: string,
        content: string
    }>,
    payment: any
}
export interface IContactsSocial {
    id: number,
    title: string,
    link: string,
    icon: IImageUrl
}

export interface INewsResponse extends IResponseArrayWithDataMeta<IResponseData<INewsItem>> { }
export interface INewsItem extends IAttributeMeta {
    title: string,
    description: string,
    cover: IImageUrl,
    type: TFilter
}
export interface IPrivacyParagraph {
    id: number,
    subtitle: string,
    paragraph: {
        id: number,
        text: string
    }[]
}
export interface IPrivacyItem extends IAttributeMeta {
    title: string,
    paragraphs: IPrivacyParagraph[]
}
export interface IWarrantyVariant {
    id:number,
    content:string,
    image: IImage,
}
export interface IWarrantyItem extends IAttributeMeta {
    title: string,
    subtitle: string,
    attention: string,
    variant: IWarrantyVariant[]
}
export interface IPaymentVariant {
    id:number,
    title:string,
    content:string
}
export interface IPaymentItem extends IAttributeMeta {
    title: string,
    subtitle: string,
    content: string,
    variants: IPaymentVariant[],
    formats: Omit<IPaymentVariant,'title'>[]
}
export interface IPrivacyResponse extends IResponseItemWithDataMeta<IResponseData<IPrivacyItem>> { }
export interface IWarrantyResponse extends IResponseItemWithDataMeta<IResponseData<IWarrantyItem>> { }
export interface IPaymentResponse extends IResponseItemWithDataMeta<IResponseData<IPaymentItem>> { }

export interface ISearchParams {
    type?: string;
    tag?: {
        title?: string;
    };
    material?: string;
    price?: string;
    to?: string;
    [key: string]: string | { title?: string } | undefined; // Динамические параметры
}export interface IOrderProduct {
    id: number;
    quantity: number;
    variantId?: number;
}

export interface IOrderCustomer {
    name: string;
    phone: string;
    email?: string;
    address?: string;
    comment?: string;
}

export interface IOrderAttributes extends IAttributeMeta {
    products: IOrderProduct[];
    customer: IOrderCustomer;
    total: number;
    paymentMethod: string;
    deliveryMethod?: string;
    status: string;
}

export interface IOrder extends IResponseData<IOrderAttributes> { }
export interface IOrderResponse extends IResponseItemWithDataMeta<IOrder> { }
export interface IServiceVariant {
    id: number,
    title: string,
    description: string | null,
    internal: string,
    image:IImageArray
}
export interface IServiceAttributes extends IAttributeMeta {
    title: string,
    subtitle: string | null,
    description: string | null,
    internal: string,
    image: IImage,
    variants:IServiceVariant[]
}
export interface IService extends IServiceAttributes { }

export interface IAllServicesContent extends IResponseArrayWithDataMeta<IResponseData<IService>> { }
export interface ISearchedServicesContent extends IResponseItemInArrayWithDataMeta<IResponseData<IService>> { }
export interface IServiceByIdContent extends IResponseItemWithDataMeta<IResponseData<IService>> { }