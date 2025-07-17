import { getNews } from '@services/getContent';
import { getStartPageMetaDate } from '@services/getMetaData';

export default async function NewsLayout({ children }: { children: React.ReactNode }) {
  const news = await getNews();
  const globalMeta = await getStartPageMetaDate();

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Новости ' + (globalMeta?.data.attributes.title || ''),
    description: 'Новости и обновления компании',
    publisher: {
      '@type': 'Organization',
      name: globalMeta?.data.attributes.title || '',
      url: process.env.NEXT_PUBLIC_BASE_URL || 'https://calca-toys.ru',
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: news?.data.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'NewsArticle',
          headline: item.attributes.title,
          datePublished: item.attributes.publishedAt,
          image: `${process.env.API_URL}/cms${item.attributes.cover.data.attributes.url}`,
          url: `${process.env.NEXT_PUBLIC_BASE_URL}/news/${item.id}`,
        },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />
      {children}
    </>
  );
}
