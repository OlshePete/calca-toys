// export interface IBlock<T> {
//     id: number;
//     attributes: T;
//   }

//   export interface IStartBlockData extends IAttributes {
//     title: string;
//     subtitle: string;
//     link: string;
//   }
//   export interface IStartBlocks {
//     data: IBlock<IStartBlockData>[];
//   }
  

//   export interface IAttributes {
//     createdAt: string;
//     updatedAt: string;
//     publishedAt: string;
//     start_blocks: IStartBlocks;
//   }
  
//   export interface IData {
//     id: number;
//     attributes: IAttributes;
//   }
  
  export interface IMeta {
    // Пустой объект
  }
  
//   export interface IResource {
//     data: IData;
//     meta: IMeta;
//   }
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
            start_blocks:{
                data:{
                    title: string,
                    subtitle: string,
                    body: string,
                    link: string,
                    updatedAt: string,
                    publishedAt: string,
                    image:any
                }[],
            },
            createdAt: string,
            updatedAt: string,
            publishedAt: string
        }
    },
    meta: IMeta
}