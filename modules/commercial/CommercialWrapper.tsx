import ContentContainer from '@components/ContentContainer/ContentContainer';
import React from 'react';
import AloneBlock from './alone/AloneBlock';
import ListBlock from './list/ListBlock';
type CommercialWrapperProps = {
  variant: 'alone' | 'list';
  internal?: string | null;
};

const CommercialWrapper: React.FC<CommercialWrapperProps> = ({
  variant = 'alone',
  internal = null,
}) => {
  return (
    <ContentContainer>
      {variant === 'alone' ? <AloneBlock internal={internal} /> : <ListBlock internal={internal} />}
    </ContentContainer>
  );
};

export default CommercialWrapper;
