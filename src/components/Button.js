import React from 'react'; 
import styled from 'styled-components';

export const ButtonComponent = styled.button`
    width: ${props => props.width};
    height: ${props => props.height};
    top: ${props => props.top};
    left: ${props => props.left}; 
    border-radius: ${props => props.borderRadius};
    background-color: ${props => props.background};
    color: ${props => props.textColor};
    border: ${props => props.border};
    borderColor: ${props => props.borderColor};   
`;

ButtonComponent.defaultProps = {
    border: "none",
}


export const Button = (props) =>{
    return (<ButtonComponent 
        {...props}
        >
            {props.text}
        </ButtonComponent>)
}

