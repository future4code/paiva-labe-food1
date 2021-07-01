import styled from 'styled-components';

export const Feed = styled.div`
    width: 360px;
    height: 640px;
`
export const FeedMainContainer = styled.div`
    width: 360px;
    height: 518px;
`

export const TransitionButton = styled.div`
  width: 328px;
  height: 56px;
  margin: 8px 16px;
  border-radius: 2px;
  border: solid 1px #b8b8b8;
  background-color: #ffffff;
  display: flex;

  img {
    margin: 16px 0 16px 17px;
  }

  p {
    width: 263.6px;
    height: 18px;
    margin: 19px 8px 19px 15.3px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #d0d0d0;
  }
`

export const CategoriesContainer = styled.div`
  width: auto;
  height: 42px;
  padding: 16px 0 0 16px;
  overflow-x: scroll;
  overflow-y: hidden;
  display: flex;

  p {
    width: 87px;
    height: 18px;
    margin: 0 8px 0 16px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
    color: var(--dark-peach);
  }
`