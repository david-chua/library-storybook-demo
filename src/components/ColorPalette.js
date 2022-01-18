import React from 'react';
import styled from 'styled-components'; 

const BoxContainer = styled.div`
    display: inline-block;
`;

const Box = styled.div`
    vertical-align: top;
    display: inline-block;
    height: 100px;
    width: 100px;
    margin: 5px;
    border: 1px solid black;
    background: ${props => props.color};
    color: #FFFFFF;
    text-align: center;
    opacity: ${props => props.opacity};
`;

const BoldedParagraph = styled.p`
    font-weight: bold;
`;


const renderBox = (props) => {
    if (props.colorName.includes("400") && props.colorName !== "Gray 400"){
        return <BoxContainer>
            <Box color={props.color}>Primary</Box>
            <BoldedParagraph>{props.colorName} </BoldedParagraph>
            <BoldedParagraph>{props.color}</BoldedParagraph>
        </BoxContainer>
    } else {
        return <BoxContainer>
            <Box opacity={props.opacity} color={props.color}/>
            <p>{props.colorName}</p>
            <p>{props.color}</p>
        </BoxContainer>
    }
}


export default function ColorPalette(props){
    return (
        renderBox(props)
    )
}