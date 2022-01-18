import React from 'react';
import ColorPalette from '../../../../src/components/ColorPalette';
import { PrimaryPalette } from '../../../../src/constants/PrimaryPalette';

export default {
  title: 'Color Palette/Primary',
  component: ColorPalette,
};

export const monochrome = () => {
  return Object.entries(PrimaryPalette.Monochrome).map(([key,value], i) => {
    return (   
        <ColorPalette key={key} colorName={key} color={value}/>
    )
  })
}

export const green= () => {
  return Object.entries(PrimaryPalette.Green).map(([key,value], i) => {
    return (   
        <ColorPalette key={key} colorName={key} color={value}/>
    )
  })
}


