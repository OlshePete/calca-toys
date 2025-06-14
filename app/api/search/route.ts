import { NextResponse } from 'next/server'
import { SearchResult } from '@/components/SearchBar/types'
import { getAllProducts } from '@/services/products/getProducts'
// TODO: Добавить поиск по категориям
// import { getAllCategoryName } from '@/services/categories/getCategories'

export async function GET(request: Request) {
  try {
    // Получаем поисковый запрос из URL
    const { searchParams } = new URL(request.url)
    const query = searchParams.get('q')?.toLowerCase() || ''

    // Если запрос пустой, возвращаем пустой массив
    if (!query) {
      return NextResponse.json([])
    }

    // Получаем все продукты
    const productsData = await getAllProducts()

    // Фильтруем результаты продуктов
    const results: SearchResult[] = productsData.data
      .filter((product) => {
        const { attributes } = product
        return attributes.name.toLowerCase().includes(query) || 
               (attributes.previewComment?.toLowerCase() || '').includes(query) ||
               attributes.productDescription.toLowerCase().includes(query)
      })
      .map((product) => ({
        id: product.id,
        title: product.attributes.name,
        description: product.attributes.previewComment || product.attributes.productDescription,
        url: `/product/${product.id}`,
        type: 'product'
      }))

    /* TODO: Реализовать поиск по категориям
    const [productsData, categoriesData] = await Promise.all([
      getAllProducts(),
      getAllCategoryName()
    ])

    // Фильтруем результаты категорий
    const categoryResults: SearchResult[] = categoriesData.data
      .filter((category) => {
        const { attributes } = category
        return attributes.title.toLowerCase().includes(query) || 
               attributes.btnName.toLowerCase().includes(query)
      })
      .map((category) => ({
        id: category.id,
        title: category.attributes.title,
        description: category.attributes.btnName,
        url: `/category/${category.id}`,
        type: 'category'
      }))

    // Объединяем результаты
    const results = [...productResults, ...categoryResults]
    */

    return NextResponse.json(results)
  } catch (error) {
    console.error('Ошибка поиска:', error)
    return NextResponse.json({ error: 'Ошибка при выполнении поиска' }, { status: 500 })
  }
}
