import styled from 'styled-components';
import {primaryColor, secondaryColor} from '../../constants/colors'

export const Container = styled.div `
  width: 360px;
  height: 640px;
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
  font-family: 'Roboto Regular';
`

export const EditAddressContainer = styled.div `
  height: 498px;
  margin: 0px 16px 0px 16px;
`