'use client';
import React from 'react';
import { CustomTextProps } from '@apptypes';
import { Text, useRecipe } from "@chakra-ui/react"
import { textRecipe } from '@theme/recipes/textRecipe';

function CustomText({
    visual,
    children,
    ...other
}: CustomTextProps) {
    const recipe = useRecipe({ recipe: textRecipe })
    const styles = recipe({ visual })
    return (
        <Text
            css={styles}
            {...other}
        >
            {children}
        </Text>
    );
}

export default CustomText;
