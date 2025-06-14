import { getNews, getNewsById } from "@/services/getContent"
import { getStartPageMetaDate } from '@/services/getMetaData'
import { Metadata } from 'next'
import { notFound } from "next/navigation"
import Image from "next/image"
import ContentContainer from "@/components/ContentContainer/ContentContainer"
import Breadcrumbs from "@/components/BreadCrumb/BreadCrumb"
import CustomTitle from "@/ui/typographies/CustomTitle"

type Props = {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const globalMeta = await getStartPageMetaDate()
  const news = await getNewsById(params.id)
  
  if (!news?.data) {
    return {
      title: 'Новость не найдена'
    }
  }

  const title = `${news.data.attributes.title} - ${globalMeta?.data.attributes.title ?? ''}`
  const description = news.data.attributes.description || news.data.attributes.title
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://calca-toys.ru'
  const imageUrl = `${process.env.API_URL}/cms${news.data.attributes.cover.data.attributes.url}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${baseUrl}/news/${params.id}`,
      siteName: globalMeta?.data.attributes.title,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: news.data.attributes.title,
        },
      ],
      locale: 'ru_RU',
      type: 'article',
    },
    alternates: {
      canonical: `${baseUrl}/news/${params.id}`,
    }
  }
}

export async function generateStaticParams() {
  const news = await getNews()
  
  return news?.data.map((item) => ({
    id: item.id.toString(),
  }))
}

export default async function NewsPage({ params }: Props) {
  const news = await getNewsById(params.id)
  
  if (!news?.data) {
    notFound()
  }

  const API_URL = process.env.API_URL
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://calca-toys.ru'
  const imageUrl = `${API_URL}/cms${news.data.attributes.cover.data.attributes.url}`
  const publishDate = new Date(news.data.attributes.publishedAt).toISOString()

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": news.data.attributes.title,
    "description": news.data.attributes.description || news.data.attributes.title,
    "image": imageUrl,
    "datePublished": publishDate,
    "dateModified": publishDate,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${baseUrl}/news/${params.id}`
    }
  }

  return (
    <div className='section fullH' style={{ background: "#FEF7E6" }}>
      <ContentContainer p={0}>
        <Breadcrumbs />
          <article>
              <CustomTitle as="h1" variant="post_header" pt="60px" pb="40px">
                {news.data.attributes.title}
              </CustomTitle>

            <div className="news-content">
              <Image
                src={imageUrl}
                alt={news.data.attributes.title}
                width={770}
                height={440}
                priority
                className="news-image"
              />
              
              <time
                dateTime={news.data.attributes.publishedAt}
                className="news-date"
                style={{
                  display: "block",
                  margin: "20px 0",
                  color: "rgba(0, 0, 0, 0.5)"
                }}
              >
                {new Date(news.data.attributes.publishedAt).toLocaleDateString('ru-RU')}
              </time>

              <div 
                className="news-description"
                style={{ fontSize: "16px", lineHeight: "1.5" }}
                dangerouslySetInnerHTML={{ __html: news.data.attributes.description || '' }}
              />
            </div>
          </article>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData)
          }}
        />
      </ContentContainer>
    </div>
  )
} 