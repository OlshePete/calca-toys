import BasketWrapper from "@/components/Basket/BasketWrapper";
import {Product} from "@/types";

const basketItem: Product[] = [
    {
        id: 1231231,
        type: 'balloon',
        name: 'Red baloon',
        price: 1000,
        discount_price: 800,
        height: 35,
        width: 25,
        previewComment: 'preview comment',
        mustHave: false,
        variants: [
            {
                image: 'http://images.clipartpanda.com/green-balloon-clipart-dT7eKXjrc.svg',
                value: 1,
                label: "red baloon",
                color: "red"
            }
        ],
        comment: 'comment on this product',
        productDescription: 'product description',
        productCharacteristic: 'product characteristic',
        stock: [
            {
                label: 'stock',
                color: 'red',
                inStock: 5
            }
        ],
        article: 'TP-213EW'
    },
    {
        id: 123123,
        type: 'balloon',
        name: 'Red baloon',
        price: 1000,
        discount_price: 800,
        height: 35,
        width: 25,
        previewComment: 'preview comment',
        mustHave: false,
        variants: [
            {
                image: 'https://www.pngarea.com/pngs/420/6874953_red-balloon-clipart-red-balloon-clip-art-at.png',
                value: 1,
                label: "red baloon",
                color: "red"
            }
        ],
        comment: 'comment on this product',
        productDescription: 'product description',
        productCharacteristic: 'product characteristic',
        stock: [
            {
                label: 'stock',
                color: 'red',
                inStock: 5
            }
        ],
        article: 'TP-213EG'
    },
]

export default function Home() {
    return (
        <BasketWrapper basketItem={basketItem}/>
    )
}
