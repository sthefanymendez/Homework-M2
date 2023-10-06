import React from 'react';
import styled from "styled-components"


const DivButtons = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
`;
const Buttons = styled.button`
border-radius: 5px;
margin: 10px;
padding: 5px;
cursor: pointer;
`;

export default class Botones extends React.Component {
  render () {
    const { alerts } = this.props
    return (
      <divButtons>
        <Buttons onClick={() => window.alert(alerts.m1)}>Módulo 1</Buttons>
        <Buttons onClick={() => window.alert(alerts.m2)}>Módulo 2</Buttons>
      </divButtons>
    )
  }
}

// Esto lo exportamos para los tests
export { DivButtons, Buttons }
