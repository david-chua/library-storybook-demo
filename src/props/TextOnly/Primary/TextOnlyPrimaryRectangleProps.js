import React from 'react'; 
import { PrimaryPalette } from "../../../constants/PrimaryPalette"
import styled from 'styled-components'; 



export const DefaultPrimaryRectangleProps = {
    width: '64px',
    height: '34px',
    top: '68px',
    left: '26px',
    text: 'Action',
    background: PrimaryPalette.Green['Green 400'], 
    borderRadius: '0px',
    textColor: PrimaryPalette.Monochrome['White']
}

export const HoverPrimaryRectangleProps = {
    width: '64px',
    height: '34px',
    top: '68px',
    left: '26px',
    text: 'Action',
    background: PrimaryPalette.Green['Green 500'], 
    borderRadius: '0px',
    textColor: PrimaryPalette.Monochrome['White']
}

export const SelectedPrimaryRectangleProps = {
    width: '64px',
    height: '34px',
    top: '68px',
    left: '26px',
    text: 'Action',
    background: PrimaryPalette.Monochrome['Black'], 
    borderRadius: '0px',
    textColor: PrimaryPalette.Monochrome['White']
}

export const DisabledPrimaryRectangleProps = {
    width: '64px',
    height: '34px',
    top: '68px',
    left: '26px',
    text: 'Action',
    background: PrimaryPalette.Monochrome['Gray 200'], 
    borderRadius: '0px',
    textColor: PrimaryPalette.Monochrome['Gray 500']
}

export const ButtonSquarePrimaryComponent = styled.button`
    width: 64px;
    height: 34px;
    top: 68px;
    left: 26px; 
    background-color: ${PrimaryPalette.Green['Green 400']};
    color: ${PrimaryPalette.Monochrome['White']};
    border: none;   
`;

export const PrimaryRectangleButton = (props) =>{
    return (<ButtonSquarePrimaryComponent
        >
            {props.text}
        </ButtonSquarePrimaryComponent>)
}
