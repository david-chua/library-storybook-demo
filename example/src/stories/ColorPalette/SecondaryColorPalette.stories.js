import React from 'react';
import ColorPalette from '../../../../src/components/ColorPalette';
import { SecondaryPalette } from '../../../../src/constants/SecondaryPalette';

export default {
  title: 'Color Palette/Secondary',
  component: ColorPalette,
};

export const red = () => {
  return Object.entries(SecondaryPalette.Red).map(([key,value], i) => {
    return (   
        <ColorPalette key={key} colorName={key} color={value}/>
    )
  })
}

export const blue= () => {
  return Object.entries(SecondaryPalette.Blue).map(([key,value], i) => {
    return (   
        <ColorPalette key={key} colorName={key} color={value}/>
    )
  })
}

export const gold = () => {
    return Object.entries(SecondaryPalette.Gold).map(([key,value], i) => {
      return (   
          <ColorPalette key={key} colorName={key} color={value}/>
      )
    })
  }
  
export const yellow= () => {
    return Object.entries(SecondaryPalette.Yellow).map(([key,value], i) => {
      return (   
          <ColorPalette key={key} colorName={key} color={value}/>
      )
    })
}

export const misc= () => {
    return Object.entries(SecondaryPalette.Misc).map(([key,value], i) => {
      return (   
          <ColorPalette opacity={"50%"} key={key} colorName={key} color={value}/>
      )
    })
}

