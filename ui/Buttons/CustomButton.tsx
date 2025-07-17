'use client';
import { CustomButtonProps } from '@apptypes';
import { Button, useRecipe } from "@chakra-ui/react"
import { buttonRecipe } from '@theme/recipes/buttonRecipe';
import React from 'react';

function CustomButton({
  width = 200,
  height = 55,
  label='',
  action = () => console.log('no handler to button ' + label),
  visual,
  className,
  children,
  loading,
  endIcon,
  ...other
}: CustomButtonProps) {
  const recipe = useRecipe({ recipe: buttonRecipe })
  const styles = recipe({ visual })
  
  return (
    <Button cursor={'pointer'} className={className} width={width} height={height} onClick={action} css={styles} {...other}
    >
    {children || label}
    </Button>
  );
}

export default CustomButton;
