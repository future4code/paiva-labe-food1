import styled from "styled-components";
import { primaryColor } from '../../constants/colors';

export const CardFeedContainer = styled.div`
  width: 328px;
  height: 188px;
  padding: 0 0 16px;
  margin-left: 16px;
  margin-bottom: 8px;
  border-radius: 8px;
  border: solid 1px #b8b8b8;
  display: flex;
  flex-direction: column;
`

export const FeedImage = styled.img`
  width: 328px;
  height: 120px;
  margin: 0 0 12px;
  border-bottom: 0.25px solid darkgrey;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`

export const FeedInfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    justify-content: space-evenly;
  }

  div p {
    width: 148px;
    height: 18px;
    margin: 4px 8px 0 16px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #b8b8b8;
  }

  p:nth-child(2) {
    margin-right: 16px;
    text-align: end;
  }
`

export const NameRestaurant = styled.p`
  width: 296px;
  height: 18px;
  margin: 8px 16px 4px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: ${primaryColor};
`