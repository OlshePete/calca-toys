import Breadcrumbs from '@/components/BreadCrumb/BreadCrumb'
import ContentContainer from '@/components/ContentContainer/ContentContainer'
import BasketContent from '@/components/PageContents/BasketContent'

export default function Home() {
  return (
    <div>
      <div className='section  fullH'  style={{background:"#FEF7E6",padding:'44px 0' }}>
        <ContentContainer>
          <Breadcrumbs/>
          <BasketContent/>
        </ContentContainer>
      </div>
    </div>
  )
}
