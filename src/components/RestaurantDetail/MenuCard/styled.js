import styled from "styled-components";

export const ProductContainer = styled.div`
    display: grid;
    grid-template-columns: 112.6px 90.2px 90.1px 35px;
    grid-template-rows: 35px 46px 31px;
    max-width: 328px;
    max-height: 112px;
    margin: 16px 16px 8px;
    border-radius: 8px;
    border: solid 1px #b8b8b8;
`
export const ItensMenu = styled.img`
    grid-row: 1 / span end;
    grid-column: 1;
    width: 97px;
    height: 112px;
    margin: 0;
    object-fit: fill;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
`
export const NameCategoy = styled.p`
    width: 328px;
    height: 18px;
    margin: 16px 16px 8px;
    font-family: Roboto;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #000000;
    padding-bottom: 8px;
    border-bottom: solid 2px #000000;
`
export const ProductName = styled.p`
    grid-row: 1;
    grid-column: 2 / span 4;
    align-self: center;
    margin: 0;
    //width: 166px;
    //height: 18px;
    font-family: Roboto;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #e86e5a;
`
export const ProdDescription = styled.p`
    grid-row: 2;
    grid-column: 2 / span 5;
    align-self: center;
    //width: 198px;
    //height: 30px;
    //margin: 6px 17px 6px 0;
    margin: 0;
    font-family: Roboto;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.34px;
    color: #b8b8b8;
`
export const ProdPrice = styled.p`
    grid-row: 3;
    grid-column: 2;
    width: 108px;
    height: 19px;
    align-self: center;
    //margin: 6px 17px 15px 0;
    margin: 0;
    font-family: Roboto;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #000000;
`
export const AddRemButton = styled.button`
    grid-row: 3;
    grid-column: 3 / span 5;
    justify-self: end;
    width: 90px;
    height: 31px;
    //margin: 9px 0 0 0px;
    margin: 0;
    padding: 8px 20.5px 9px 21.5px;
    border-top-left-radius: 8px;
    border-bottom-right-radius: 8px;
    background-color: #FFFFFF;
    color: ${props => props.order.length > 0 ? props.index === -1 ? '#000000' : '#e86e5a' : '#000000'};
    border: ${props => props.order.length > 0 ? props.index === -1 ? 'solid 1px #000000' : 'solid 1px #e86e5a' : 'solid 1px #000000'};
`
export const QnttProductInCart = styled.p`
    grid-row: 1;
    grid-column: 4;
    justify-self: end;
    width: 9px;
    height: 19px;
    margin: 0;
    padding: 0;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
    color: #e86e5a;
    border-top-right-radius: ${props => props.order.length > 0 && props.index !== -1 && '8px'};
    border-bottom-left-radius: ${props => props.order.length > 0 && props.index !== -1 && '8px'};
    //margin: ${props => props.order.length > 0 && props.index !== -1 && '0 0 9px 16px'};
    padding: ${props => props.order.length > 0 && props.index !== -1 && '7px 12px'};
    border: ${props => props.order.length > 0 && props.index !== -1 && 'solid 1px #e86e5a'};
`
export const ViewBoxDialog = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0.5;
`
