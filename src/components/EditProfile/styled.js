import styled from 'styled-components';
import {primaryColor, secondaryColor} from '../../constants/colors'

export const Container = styled.div `
  width: 360px;
  height: 640px;
  margin: auto;
`
export const Header = styled.div `
  width: 100%;
  height: 64px;
  margin: 0 0 16px;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
`
export const EditUserContainer = styled.div `
  height: 282px;
  margin: 0px 16px 0px 16px;
`
export const StyledInput = styled.input `
  width: 322px;
  height: 56px;
  margin-top: 16px;
  border-radius: 4px;
  border: solid 1px ${secondaryColor};
`

export const StyledButton = styled.button `
  background-color: ${primaryColor};
  width: 100%;
  margin-top: 16px;
  height: 42px;
  border: none;
  border-radius: 2px;
  font-size: 16px;
  font-family: Roboto;
`

export const EditAddressContainer = styled.div `
  height: 498px;
  margin: 0px 16px 0px 16px;
`

export const Input = styled.input`
  width: 258px;
  height: 16px;
  margin: 16px 0 0;
  padding: 19px 48px 19px 16px;
  border-radius: 2px;
  border: solid 1px #b8b8b8;

`

export const LabelEstado = styled.p`
  position: absolute;
  background-color: white;
  padding-left: 4px;
  top: 463px;
  width: 78px;
  height: 18px;
  margin: 3px 234px 43px 20px;
  font-family: Roboto;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.29px;
  color: #b8b8b8;
`

export const LabelBairro = styled.p`
  position: absolute;
  background-color: white;
  padding-left: 4px;
  top: 312px;
  width: 78px;
  height: 18px;
  margin: 3px 234px 43px 20px;
  font-family: Roboto;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.29px;
  color: #b8b8b8;
`
export const LabelCidade = styled.p`
  position: absolute;
  background-color: white;
  padding-left: 4px;
  top: 388px;
  width: 78px;
  height: 18px;
  margin: 3px 234px 43px 20px;
  font-family: Roboto;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.29px;
  color: #b8b8b8;
`
export const LabelLogradouro = styled.p`
  position: absolute;
  background-color: white;
  padding-left: 4px;
  top: 88px;
  width: 78px;
  height: 18px;
  margin: 3px 234px 43px 20px;
  font-family: Roboto;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.29px;
  color: #b8b8b8;
`
export const LabelComplemento = styled.p`
  position: absolute;
  background-color: white;
  padding-left: 4px;
  top: 235px;
  width: 78px;
  height: 18px;
  margin: 3px 234px 43px 20px;
  font-family: Roboto;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.29px;
  color: #b8b8b8;
`
export const LabelNumero = styled.p`
  position: absolute;
  background-color: white;
  padding-left: 4px;
  top: 160px;
  width: 78px;
  height: 18px;
  margin: 3px 234px 43px 20px;
  font-family: Roboto;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.29px;
  color: #b8b8b8;
`

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  align-items: center;
`