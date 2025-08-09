'use client';
import { CustomButtonProps } from '@apptypes';
import { Button, ProgressCircle, useRecipe } from "@chakra-ui/react"
import { buttonRecipe } from '@theme/recipes/buttonRecipe';
import React from 'react';

const CustomButton = React.forwardRef<HTMLButtonElement, CustomButtonProps>(function CustomButton({
  width = 200,
  height = 55,
  label = '',
  action = () => console.log('no handler to button ' + label),
  visual,
  className,
  children,
  loading,
  endIcon,
  ...other
}, ref) {
  const recipe = useRecipe({ recipe: buttonRecipe })
  const styles = recipe({ visual })
  
  return (
    <Button 
      ref={ref}
      cursor={'pointer'} 
      className={className} 
      width={width} 
      height={height} 
      onClick={action} 
      css={styles} 
      {...other}
    >
      {/* {loading && <ProgressCircle.Root value={null} size="sm" color={'red'}>
                        <ProgressCircle.Circle>
                          <ProgressCircle.Track />
                          <ProgressCircle.Range />
                        </ProgressCircle.Circle>
                      </ProgressCircle.Root>} */}
      {children || label}
    </Button>
  );
});

export default CustomButton;