import { Product, ServicesCarouselItem, SubscribeCarouselItem } from "@/types";

export const products: Product[] = [
  {
    id: 1,
    comment:
      "Фольгированный шар в виде фигуры для украшения праздника, приспособлен под гелий",
    article: "12184834392",
    productDescription: "максимально полное описание для товара",
    productCharacteristic: "Все характеристики товара",
    stock: [
      {
        label: "белый",
        inStock: 3,
      },
    ],
    name: "Шар «Космонавт»",
    price: 900,
    height: 94,
    mustHave: true,
    type: "balloon",
    connected: [
      {
        id: 2,
        comment:
          "Фольгированный шар в виде фигуры для украшения праздника, приспособлен под гелий",
        article: "12184834392",
        productDescription: "максимально полное описание для товара",
        productCharacteristic: "Все характеристики товара",
        stock: [
          {
            inStock: 3,
            label: "розовый",
            color: "B47D8B",
          },
          {
            inStock: 4,
            label: "лаванда",
            color: "756AAE",
          },
        ],
        name: "Шар «Звезда»",
        variants: [
          {
            label: "розовый",
            color: "B47D8B",
            image: "https://storage.yandexcloud.net/calca-web/product2.png",
          },
          {
            label: "лаванда",
            color: "756AAE",
            image: "https://storage.yandexcloud.net/calca-web/product1-2.png",
          },
        ],
        price: 320,
        type: "balloon",
        height: 45,
        mustHave: true,
      },
      {
        id: 3,
        comment:
          "Фольгированный шар в виде фигуры для украшения праздника, приспособлен под гелий",
        article: "12184834392",
        productDescription: "максимально полное описание для товара",
        productCharacteristic: "Все характеристики товара",
        stock: [
          {
            inStock: 3,
            label: "белый",
          },
        ],
        variants: [
          {
            label: "белый",
            image: "https://storage.yandexcloud.net/calca-web/product3.png",
          },
        ],
        name: "Шар «Малыш динозаврик»",
        price: 688,
        height: 76,
        type: "balloon",
        width: 78,
        mustHave: true,
      },
    ],
    variants: [
      {
        label: "белый",
        image: "https://storage.yandexcloud.net/calca-web/product1.png",
      },
    ],
  },
  {
    id: 2,
    comment:
      "Фольгированный шар в виде фигуры для украшения праздника, приспособлен под гелий",
    article: "12184834392",
    productDescription: "максимально полное описание для товара",
    productCharacteristic: "Все характеристики товара",
    stock: [
      {
        inStock: 3,
        label: "розовый",
        color: "B47D8B",
      },
      {
        inStock: 4,
        label: "лаванда",
        color: "756AAE",
      },
    ],
    name: "Шар «Звезда»",
    variants: [
      {
        label: "розовый",
        color: "B47D8B",
        image: "https://storage.yandexcloud.net/calca-web/product2.png",
      },
      {
        label: "лаванда",
        color: "756AAE",
        image: "https://storage.yandexcloud.net/calca-web/product1-2.png",
      },
    ],
    price: 320,
    type: "balloon",
    height: 45,
    mustHave: true,
  },
  {
    id: 3,
    comment:
      "Фольгированный шар в виде фигуры для украшения праздника, приспособлен под гелий",
    article: "12184834392",
    productDescription: "максимально полное описание для товара",
    productCharacteristic: "Все характеристики товара",
    stock: [
      {
        inStock: 3,
        label: "белый",
      },
    ],
    variants: [
      {
        label: "белый",
        image: "https://storage.yandexcloud.net/calca-web/product3.png",
      },
    ],
    name: "Шар «Малыш динозаврик»",
    price: 688,
    height: 76,
    type: "balloon",
    width: 78,
    mustHave: true,
  },
  {
    id: 4,
    comment:
      "Фольгированный шар в виде фигуры для украшения праздника, приспособлен под гелий",
    article: "12184834392",
    productDescription: "максимально полное описание для товара",
    productCharacteristic: "Все характеристики товара",
    stock: [
      {
        inStock: 3,
        label: "белый",
      },
    ],
    name: "Композиция «Поздравляем с девочкой»",
    price: 2963,
    height: 94,
    type: "balloon",
    mustHave: true,
    variants: [
      {
        label: "белый",
        image: "https://storage.yandexcloud.net/calca-web/product4.png",
      },
    ],
    previewComment: "Количество шаров: 10 шт ",
  },
  {
    id: 5,
    comment:
      "Фольгированный шар в виде фигуры для украшения праздника, приспособлен под гелий",
    article: "12184834392",
    productDescription: "максимально полное описание для товара",
    productCharacteristic: "Все характеристики товара",
    stock: [
      {
        inStock: 3,
        label: "белый",
      },
    ],
    name: "Шар Звезда «Синий мрамор»",
    price: 498,
    height: 45,
    type: "balloon",
    mustHave: true,
    variants: [
      {
        label: "белый",
        image: "https://storage.yandexcloud.net/calca-web/product5.png",
      },
    ],
  },
  {
    id: 6,
    comment:
      "Фольгированный шар в виде фигуры для украшения праздника, приспособлен под гелий",
    article: "12184834392",
    productDescription: "максимально полное описание для товара",
    productCharacteristic: "Все характеристики товара",
    stock: [
      {
        inStock: 3,
        label: "белый",
      },
    ],
    name: "Мягкая игрушка подушка, Корги",
    price: 2300,
    height: 27,
    type: "toy",
    mustHave: true,
    variants: [
      {
        label: "белый",
        image: "https://storage.yandexcloud.net/calca-web/product6.png",
      },
    ],
  },
  {
    id: 7,
    comment:
      "Фольгированный шар в виде фигуры для украшения праздника, приспособлен под гелий",
    article: "12184834392",
    productDescription: "максимально полное описание для товара",
    productCharacteristic: "Все характеристики товара",
    stock: [
      {
        inStock: 3,
        label: "белый",
      },
    ],
    name: "Скорпион гигант пласт черный",
    price: 766,
    height: 20,
    type: "toy",
    variants: [
      {
        label: "белый",
        image: "https://storage.yandexcloud.net/calca-web/product7.png",
      },
    ],
  },
  {
    id: 8,
    comment:
      "Фольгированный шар в виде фигуры для украшения праздника, приспособлен под гелий",
    article: "12184834392",
    productDescription: "максимально полное описание для товара",
    productCharacteristic: "Все характеристики товара",
    stock: [
      {
        inStock: 3,
        label: "белый",
      },
    ],
    name: "Игра лапта с мячиком Смешарики, 3 шт",
    price: 196,
    type: "toy",
    variants: [
      {
        label: "белый",
        image: "https://storage.yandexcloud.net/calca-web/product8.png",
      },
    ],
  },
  {
    id: 9,
    comment:
      "Фольгированный шар в виде фигуры для украшения праздника, приспособлен под гелий",
    article: "12184834392",
    productDescription: "максимально полное описание для товара",
    productCharacteristic: "Все характеристики товара",
    stock: [
      {
        inStock: 3,
        label: "белый",
      },
    ],
    name: "Слайм (лизун) «Slime Ninja», светится в темноте",
    price: 194,
    type: "toy",
    mustHave: true,
    variants: [
      {
        label: "белый",
        image: "https://storage.yandexcloud.net/calca-web/product9.png",
      },
    ],
  },
  {
    id: 10,
    comment:
      "Фольгированный шар в виде фигуры для украшения праздника, приспособлен под гелий",
    article: "12184834392",
    productDescription: "максимально полное описание для товара",
    productCharacteristic: "Все характеристики товара",
    stock: [
      {
        inStock: 3,
        label: "белый",
      },
    ],
    name: "Машинка металлическая Ferrari LaFerrari",
    price: 788,
    type: "toy",
    height: 15,
    variants: [
      {
        label: "белый",
        image: "https://storage.yandexcloud.net/calca-web/product10.png",
      },
    ],
  },
  {
    id: 11,
    comment:
      "Фольгированный шар в виде фигуры для украшения праздника, приспособлен под гелий",
    article: "12184834392",
    productDescription: "максимально полное описание для товара",
    productCharacteristic: "Все характеристики товара",
    stock: [
      {
        inStock: 3,
        label: "белый",
      },
    ],
    name: "Композиция «Севара»",
    price: 3550,
    type: "balloon",
    discount_price: 2698,
    previewComment: "Количество шаров: 10 шт",
    variants: [
      {
        label: "белый",
        image: "https://storage.yandexcloud.net/calca-web/product11.png",
      },
    ],
  },
  {
    id: 12,
    comment:
      "Фольгированный шар в виде фигуры для украшения праздника, приспособлен под гелий",
    article: "12184834392",
    productDescription: "максимально полное описание для товара",
    productCharacteristic: "Все характеристики товара",
    stock: [
      {
        inStock: 3,
        label: "белый",
      },
    ],
    name: "Композиция «GREY»",
    price: 5963,
    type: "balloon",
    discount_price: 4592,
    previewComment: "Количество шаров: 14 шт",
    variants: [
      {
        label: "белый",
        image: "https://storage.yandexcloud.net/calca-web/product12.png",
      },
    ],
  },
  {
    id: 13,
    comment:
      "Фольгированный шар в виде фигуры для украшения праздника, приспособлен под гелий",
    article: "12184834392",
    productDescription: "максимально полное описание для товара",
    productCharacteristic: "Все характеристики товара",
    stock: [
      {
        inStock: 3,
        label: "белый",
      },
    ],
    name: "Композиция «Розовые сердца»",
    price: 4833,
    type: "balloon",
    discount_price: 3480,
    previewComment: "Количество шаров: 10 шт",
    variants: [
      {
        label: "белый",
        image: "https://storage.yandexcloud.net/calca-web/product13.png",
      },
    ],
  },
  {
    id: 14,
    comment:
      "Фольгированный шар в виде фигуры для украшения праздника, приспособлен под гелий",
    article: "12184834392",
    productDescription: "максимально полное описание для товара",
    productCharacteristic: "Все характеристики товара",
    stock: [
      {
        inStock: 3,
        label: "белый",
      },
    ],
    name: "Композиция «Яркое впечатление»",
    price: 3181,
    type: "balloon",
    discount_price: 2450,
    previewComment: "Количество шаров: 10 шт",
    variants: [
      {
        label: "белый",
        image: "https://storage.yandexcloud.net/calca-web/product14.png",
      },
    ],
  },
  {
    id: 15,
    comment:
      "Фольгированный шар в виде фигуры для украшения праздника, приспособлен под гелий",
    article: "12184834392",
    productDescription: "максимально полное описание для товара",
    productCharacteristic: "Все характеристики товара",
    stock: [
      {
        inStock: 3,
        label: "белый",
      },
    ],
    mustHave: true,
    name: "Композиция «С днем рождения, мамочка»",
    price: 4240,
    type: "balloon",
    discount_price: 3265,
    previewComment: "Количество шаров: 13 шт",
    variants: [
      {
        label: "белый",
        image: "https://storage.yandexcloud.net/calca-web/product15.png",
      },
    ],
  },
];
export const services: ServicesCarouselItem[] = [
  {
    id: "1",
    name: "шары",
    title: "на свадьбу",
    image: "https://storage.yandexcloud.net/calca-web/serv-1.png",
    link: "#"
  },
  {
    id: "2",
    name: "шары",
    title: "на мальчишник",
    image: "https://storage.yandexcloud.net/calca-web/serv-2.png",
    link: "#"
  },
  {
    id: "3",
    name: "шары",
    title: "на девишник",
    image: "https://storage.yandexcloud.net/calca-web/serv-3.png",
    link: "#"
  },
  {
    id: "4",
    name: "шары",
    title: "на выписку",
    image: "https://storage.yandexcloud.net/calca-web/serv-4.png",
    link: "#"
  },
]
export const subscride_images: SubscribeCarouselItem[] = [
  {
    id: "1",
    image: "https://storage.yandexcloud.net/calca-web/subscribe-1.png",
  },
  {
    id: "2",
    image: "https://storage.yandexcloud.net/calca-web/subscribe-2.png",
  },
  {
    id: "3",
    image: "https://storage.yandexcloud.net/calca-web/subscribe-3.png",
  },
  {
    id: "4",
    image: "https://storage.yandexcloud.net/calca-web/subscribe-4.png",
  },
  {
    id: "5",
    image: "https://storage.yandexcloud.net/calca-web/subscribe-5.png",
  },
]
