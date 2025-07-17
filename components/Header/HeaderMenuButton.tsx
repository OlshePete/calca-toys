'use client';

import { Button, ButtonProps } from '@chakra-ui/react';
import { useHeaderMenu } from '../context/HeaderMenuContext';
import { FC, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
export interface IHeaderMenuButtonProps extends Pick<ButtonProps, 'as'> {
  category: string;
  children: ReactNode;
}
const HeaderMenuButton: FC<IHeaderMenuButtonProps> = ({ category, children, as }) => {
  const { push } = useRouter();
  const { activeCategory, setActiveCategory } = useHeaderMenu();
  return (
    <Button
      as={as}
      variant={'header_link'}
      borderRadius={0}
      minHeight={'100%'}
      _hover={{
        textDecoration: 'underline',
      }}
      id={category}
      onClick={() => {
        if (activeCategory === category) {
          setActiveCategory(null);
          push(`/catalog/${category}`);
        } else {
          setActiveCategory(category);
        }
      }}
    >
      {children}
    </Button>
  );
};
export default HeaderMenuButton;
