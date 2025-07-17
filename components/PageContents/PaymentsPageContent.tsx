'use client';
import { FC } from 'react';
import CustomHeading from '../../ui/Heading/CustomHeading';
import CustomText from '../../ui/Text/CustomText';
import { IContactsResponse, IPaymentResponse } from '@apptypes/api';
import {
  Box,
  Grid,
  GridItem,
  Icon,
  List,
} from '@chakra-ui/react';
import DinamicContactSummary from '../DinamicContactSummary/DinamicContactSummary';

interface IProps {
  contacts: IContactsResponse;
  content: IPaymentResponse;
  links: {
    phones: string[];
    emails: string[];
  };
}
const CustomListIcon = () => {
  return (
    <Icon>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
      >
        <path
          d="M7 0L8.52186 1.32036L10.5 0.937822L11.1578 2.84221L13.0622 3.5L12.6796 5.47814L14 7L12.6796 8.52186L13.0622 10.5L11.1578 11.1578L10.5 13.0622L8.52186 12.6796L7 14L5.47814 12.6796L3.5 13.0622L2.84221 11.1578L0.937822 10.5L1.32036 8.52186L0 7L1.32036 5.47814L0.937822 3.5L2.84221 2.84221L3.5 0.937822L5.47814 1.32036L7 0Z"
          fill="#90BCE4"
        />
      </svg>
    </Icon>
  );
};


// interface ContactLinksProps {
//   text: string;
//   phoneLinkPrefix?: string;
//   emailLinkPrefix?: string;
//   className?: string;
//   parsedContacts: {
//     phones: string[];
//     emails: string[];
//   };
// }

const PaymentsPageContent: FC<IProps> = ({ contacts, content: contentProps, links }) => {
  // const API_URL = process.env.NEXT_PUBLIC_API_URL
  const { title, subtitle, content, formats, variants } = contentProps.data.attributes;
  return (
    <>
      <CustomHeading label={title.toUpperCase()} visual={'post_header'} pt={'60px'} pb={'40px'}/>
      <Grid
        templateColumns={{ base: '1fr', lg: 'repeat(12, 1fr)' }}
        gap={{ base: 8, lg: 0 }}
        as="section"
      >
        <GridItem
          colSpan={{ base: 12, lg: 8 }}
          colStart={{ lg: 0 }}
          colEnd={{ lg: 8 }}
          minH={'530px'}
          display={'flex'}
          flexDirection={'column'}
          gap={'8px'}
        >
          <CustomHeading
            label={subtitle}
            visual={'privacy_header'}
            textTransform={'uppercase'}
            fontSize={'16px'}
            fontWeight={500}
          />
          <CustomText visual={'privacy_text'}>{content}</CustomText>
          <List.Root>
            {formats &&
              formats.map((format, index) => {
                return (
                  <List.Item key={format.content + index} display={'flex'} gap={'12px'} alignItems={'baseline'} justifyContent={'flex-start'}>
                    <List.Indicator asChild color="green.500">
                      <CustomListIcon />
                    </List.Indicator>
                    {format.content}
                  </List.Item>
                );
              })}
          </List.Root>
          {variants &&
            variants.map((variant, index) => {
              return (
                <Box key={index + variant.title}>
                  <CustomHeading
                    visual={'privacy_header'}
                    textTransform={'uppercase'}
                    fontSize={'16px'}
                    fontWeight={500}
                    label={variant.title}
                  >
                    {variant.title}
                  </CustomHeading>
                  <CustomText visual={'privacy_text'}>{variant.content}</CustomText>
                </Box>
              );
            })}
        </GridItem>
        <GridItem
          colSpan={{ base: 12, lg: 4 }}
          minH={{ base: 'auto', lg: '530px' }}
          p={{ base: '0 30px', lg: '0' }}
          colStart={{ lg: 9 }}
          colEnd={{ lg: 12 }}
        >
          <DinamicContactSummary contacts={contacts} />
        </GridItem>
      </Grid>
    </>
  );
};
export default PaymentsPageContent;
