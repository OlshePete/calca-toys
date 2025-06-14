import Breadcrumbs from '@/components/BreadCrumb/BreadCrumb'
import ContentContainer from '@/components/ContentContainer/ContentContainer'
import ConfirmBasketContent from '@/components/PageContents/ConfirmBasketContent'

export default function Home() {
  return (
    <div>
      <div className='section  fullH'  style={{background:"#FEF7E6",padding:'44px 0' }}>
        <ContentContainer>
          <Breadcrumbs/>
          <ConfirmBasketContent/>
        </ContentContainer>
      </div>
    </div>
  )
}
