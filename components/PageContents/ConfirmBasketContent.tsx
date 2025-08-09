'use client';
import { Grid, GridItem, useBreakpointValue } from '@chakra-ui/react';
import React, { FC, useRef } from 'react';
import CustomerForm from '@modules/forms/CustomerForm';
import BasketSummary from '../basket/BasketSummary';
import Button from '../../ui/Buttons/CustomButton';
import Heading from '../../ui/Heading/CustomHeading';
interface IConfirmBasketContentProps {}

const ConfirmBasketContent: FC<IConfirmBasketContentProps> = ({}) => {
  const submitRef = useRef<HTMLButtonElement | null>(null);
  const setSubmitRef = (element: HTMLButtonElement) => {
    submitRef.current = element;
  };
  return (
    <>
      <Heading visual={'post_header'} mb={'40px'} pt={'60px'}>
        Данные покупателя
      </Heading>

      <Grid templateColumns="repeat(12, 1fr)" gap={'0px'}>
        <GridItem minH={'530px'} colSpan={useBreakpointValue({ base: 12, md: 7 })}>
          <CustomerForm setSubmitRef={setSubmitRef} />
        </GridItem>

        <GridItem
          w={useBreakpointValue({ base: '100%', md: '400px' })}
          h={'fit-content'}
          overflow={'hidden'}
          colStart={useBreakpointValue({ base: 1, md: 9 })}
          colEnd={13}
        >
          <BasketSummary>
            <Button
              type="submit"
              visual={'outline_secondary'}
              borderRadius="full"
              onClick={(event) => {
                event.preventDefault();
                submitRef && submitRef.current && submitRef.current.click();
              }}
            >
              ОТПРАВИТЬ
            </Button>
          </BasketSummary>
        </GridItem>
      </Grid>
    </>
  );
};

export default ConfirmBasketContent;
