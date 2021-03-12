import styled from "styled-components"



export const AppContainer = styled.div`
  position: absolute;
  left: 50%;
  margin-top: 60px;
  margin-left: -480px;
  font-family: Verdana;
  width: 960px;
  font-size: 13px;
`;

export const CointainerStyle = styled.div`
  margin-right: 25px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding-left: 25px;
  width: 100%;
`;


export const FixedWidthLabel = styled.label`
  display: inline-block;
  width: 30%;
  text-align: ${props => props.textAlign || "right"};
  padding-right: 25px;
  vertical-align: center;
`;


export const FixedWidthInput = styled.input`
  cursor: pointer;
  width: 35%;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #dedede;
  margin-bottom: 20px
`;


export const Button = styled.button`
  cursor: pointer;
  padding: 7px 15px 7px 15px;
  margin-left: 60%;
`
