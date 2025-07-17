import Breadcrumbs from '@components/BreadCrumb/BreadCrumb';
import ContentContainer from '@components/ContentContainer/ContentContainer';
import ListItemWrapper from '@components/ListItemWrapper/ListItemWrapper';
import { getServiceByIternal } from '@services/services/getService';
import CustomText from '../../../../ui/Text/CustomText'; 
import CustomHeading from '../../../../ui/Heading/CustomHeading'; 
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  params: {
    internal: string;
  };
};

export default async function Home({ params: { internal } }: Props) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const data = await getServiceByIternal(internal);
  const service = data.data[0];
  const { title, subtitle, description, image, variants } = service.attributes;

  return (
    <div>
      <div className="section fullH" style={{ background: '#FEF7E6', padding: '44px 0' }}>
        <ContentContainer>
          <Breadcrumbs />
          <CustomHeading visual={'post_header'} pt={'60px'} pb={'40px'} className="seo-title">
            {title}
          </CustomHeading>

          <div
            style={{
              display: 'flex',
              width: '100%',
              justifyContent: 'space-between',
              gap: '60px',
              marginBottom: '60px',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <CustomText visual={'post_text'}>{subtitle}</CustomText>
              <CustomText style={{ lineHeight: '24px', fontSize: '16px' }} visual={'post_text'}>
                {description}
              </CustomText>
            </div>
            <div style={{ flex: '0 0 420px' }}>
              {image && image.data && (
                <Image
                  alt={image.data.attributes.alternativeText ?? title}
                  src={
                    image.data
                      ? `${API_URL}/cms${image.data.attributes.formats?.medium?.url ?? image.data.attributes.url}`
                      : '/'
                  }
                  width={420}
                  height={420}
                  style={{
                    objectFit: 'cover',
                    borderRadius: '14px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                  }}
                />
              )}
            </div>
          </div>

          <div
            style={{
              padding: '32px 0',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '30px',
              justifyContent: 'flex-start',
            }}
          >
            {variants &&
              [...variants].map((variant, Skey) => {
                const id = variant.id;
                const { title, description, image } = variant;
                const variantInternal = variant.internal;
                const baseImage = image.data[0] ?? null;

                return (
                  <ListItemWrapper key={id}>
                    {baseImage && (
                      <Image
                        alt={baseImage.attributes.alternativeText ?? title}
                        src={
                          baseImage
                            ? `${API_URL}/cms${baseImage.attributes.formats?.medium?.url ?? baseImage.attributes.url}`
                            : '/'
                        }
                        fill={true}
                        style={{
                          objectFit: 'cover',
                        }}
                      />
                    )}
                    <div
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        zIndex: 10,
                        background:
                          'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 100%)',
                        padding: '2rem',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        gap: '1.5rem',
                        minHeight: '50%',
                      }}
                    >
                      <CustomHeading visual={'post_header'} color={'white'}>
                        {title}
                      </CustomHeading>
                      <Link href={`${internal}/${variantInternal}`}>
                        <button className="seo-button">К услуге</button>
                      </Link>
                    </div>
                  </ListItemWrapper>
                );
              })}
          </div>
        </ContentContainer>
      </div>
    </div>
  );
}
