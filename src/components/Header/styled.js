import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 360px;
  height: 64px;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
  background-color: #ffffff;
`

export const HeadNavContainer = styled.div`
  width: 360px;
  height: 44px;
  display: flex;
`

export const EmptyIconBox = styled.div`
  width: 23px;
  height: 24px;
  margin: 10px 0px 10px 16px;
  object-fit: contain;
`

export const IconBox = styled.img`
  width: 23px;
  height: 24px;
  margin: 10px 0px 10px 16px;
  object-fit: contain;
`

export const PageNameBox = styled.div`
  width: 175px;
  height: 44px;
  margin: 0 92px 0 48px;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    width: 91px;
    height: 19px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
    color: var(--black);
  }
`