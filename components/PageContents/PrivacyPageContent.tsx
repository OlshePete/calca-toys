"use client";
import BreadCrumb from "@/components/BreadCrumb/BreadCrumb";
import ContentContainer from "@/components/ContentContainer/ContentContainer";
import DinamicContactSummary from "@/components/DinamicContactSummary/DinamicContactSummary";
import { ChildrenComponentProps } from "@/types";
import { IContactsResponse, IPrivacyResponse } from "@/types/api";
import { Box, Grid, GridItem, HStack, Heading, Text } from "@chakra-ui/react";
import { FC } from "react";

interface IProps extends ChildrenComponentProps {
    content:IPrivacyResponse,
    contacts:IContactsResponse
}

const PrivacyPageContent:FC<IProps> = ({children,contacts, content}) => {
  
  const paragraphs = content.data.attributes.paragraphs
  return (
      <ContentContainer position={'sticky'} top={0}>
        <BreadCrumb />
        {children}
        <Grid templateColumns="repeat(12, 1fr)" gap={"0px"}>
          <GridItem colSpan={7} display={'flex'} flexDirection={'column'}>
            {
                paragraphs.map(({subtitle,paragraph,id},index)=>{
                    return <Box display={'flex'} flexDirection={'column'} gap={'8px'} key={'paragraphbox'+id+index} >
                        {
                            subtitle &&  <Heading
                            variant={"privacy_header"}
                            textTransform={"uppercase"}
                            fontSize={"16px"}
                            fontWeight={500}
                          >
                            {subtitle}
                          </Heading>
                        }
                        {
                            paragraph && paragraph.map(({id, text},parIndex)=>{
                                return <Text key={'paragraphtext'+id+parIndex} variant={"privacy_text"}>
                                {text}
                               </Text>
                            })
                        }
                    </Box>
                })
            }
            </GridItem>
          <GridItem minH={"530px"} colStart={9} colEnd={13} position={'sticky'} top={0}>
            <DinamicContactSummary contacts={contacts}/>
          </GridItem>
        </Grid>
      </ContentContainer>
  );
}
export default PrivacyPageContent