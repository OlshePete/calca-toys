import Breadcrumbs from "@/components/BreadCrumb/BreadCrumb";
import ContentContainer from "@/components/ContentContainer/ContentContainer";
import NewsPageContent from "@/components/PageContents/NewsPageContent";
import { getNews } from "@/services/getContent";
import { getStartPageMetaDate } from '@/services/getMetaData';
import { TFilter } from "@/types/api";
import CustomTitle from "@/ui/typographies/CustomTitle";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const globalMeta = await getStartPageMetaDate()
  const news = await getNews()
  const title = 'Новости, ' + (globalMeta?.data.attributes.title ?? '')
  const description = 'Актуальные новости, информация о новинках, график работы и вакансии компании ' + (globalMeta?.data.attributes.title ?? '')
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://calca-toys.ru'

  return {
    title,
    description,
    keywords: 'новости компании, новинки, информация, график работы, вакансии',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/news`,
      siteName: globalMeta?.data.attributes.title,
      locale: 'ru_RU',
      type: 'website',
    },
    alternates: {
      canonical: `${baseUrl}/news`,
    }
  }
}

function padTo2Digits(num: number) {
  return num.toString().padStart(2, '0');
}

function formatDate(date: Date) {
  return [
    padTo2Digits(date.getDate()),
    padTo2Digits(date.getMonth() + 1),
    date.getFullYear()
  ].join('.');
}

const newsTypes: Record<TFilter, string> = {
  frash: "новинки",
  info: "информация",
  time: "график работы",
  job: "вакансии",
};

export default async function NewsPage() {
  const API_URL = process.env.API_URL
  const news = await getNews()
  
  return (
    <div className='section fullH' style={{ background: "#FEF7E6" }}>
      <ContentContainer p={0}>
        <Breadcrumbs />
        <div>
          <header>
            <CustomTitle as="h1" variant="post_header" pt="60px" pb="40px">
              Новости
            </CustomTitle>
          </header>
          
          <NewsPageContent news={news}>
            {news && [...news.data].map((item, index) => {
              const date = formatDate(new Date(item.attributes.publishedAt))
              const newsType = newsTypes[item.attributes.type]
              
              return (
                <article
                  key={item.id}
                  className={`list_item ${index === 3 ? 'expanded' : ''}`}
                  id={String(item.id)}
                >
                  <Image
                    alt={`Изображение к новости: ${item.attributes.title}`}
                    width={index === 3 ? 770 : 370}
                    height={440}
                    src={`${API_URL}/cms${item.attributes.cover.data.attributes.url}`}
                  />
                  <h2>{item.attributes.title}</h2>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      margin: 0,
                    }}
                  >
                    <time dateTime={item.attributes.publishedAt}>{date}</time>
                    <Link
                      href={`/news/${item.id}`}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        textTransform: 'uppercase',
                        gap: '9px',
                        color: '#F49AA5',
                        fontWeight: 500
                      }}
                      title={`Читать новость: ${item.attributes.title}`}
                    >
                      перейти
                      <svg width="36" height="12" viewBox="0 0 36 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M1 5.25C0.585786 5.25 0.25 5.58579 0.25 6C0.25 6.41421 0.585787 6.75 1 6.75L1 5.25ZM35.5303 6.53033C35.8232 6.23743 35.8232 5.76256 35.5303 5.46967L30.7574 0.696697C30.4645 0.403803 29.9896 0.403803 29.6967 0.696697C29.4038 0.98959 29.4038 1.46446 29.6967 1.75736L33.9393 6L29.6967 10.2426C29.4038 10.5355 29.4038 11.0104 29.6967 11.3033C29.9896 11.5962 30.4645 11.5962 30.7574 11.3033L35.5303 6.53033ZM1 6.75L35 6.75L35 5.25L1 5.25L1 6.75Z" fill="#F49AA5"/>
                      </svg>
                    </Link>
                    <div className="type_name" role="tag">{newsType}</div>
                  </div>
                </article>
              )
            })}
          </NewsPageContent>
        </div>
      </ContentContainer>
    </div>
  )
}