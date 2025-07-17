'use client';
import { CustomTitleProps } from '@apptypes';
import { Heading, useRecipe } from "@chakra-ui/react"
import { headingRecipe } from '@theme/recipes/headingRecipe';
import React from 'react';

function CustomHeading({
    visual,
    label,
    children,
    ...other
}: CustomTitleProps) {
    const recipe = useRecipe({ recipe: headingRecipe })
    const styles = recipe({ visual })
    return (
        <Heading
            css={styles}
            {...other}
        >
            {label ?? children}
        </Heading>
    );
}

export default CustomHeading;
