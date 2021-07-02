import styled from 'styled-components';

export const PhoneInfoContainer = styled.div`
    width: 360px;
    height: 20px;
    padding: 0 5px 0 0;
    display: flex;
`

export const LeftInfoContainer = styled.div`
    width: 140px;
    height: 20px;
    padding-top: 3.5px; 
    display: flex;

    p {
        width: 40px;
        height: 14px;
        margin: 0 5.3px 0 3.5px;
        font-family: SFProText;
        font-size: 12px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #030303;
    }
`

export const MobileSignalImage = styled.img`
    width: 16.5px;
    height: 14px;
`

export const WifiImage = styled.img`
    width: 14.3px;
    height: 10px;
    margin: 1.5px 0 2.5px -5px;
    background-color: var(--black);
`


export const HourContainer = styled.div`
    width: 70px;
    height: 20px;
    margin: 0 5px;
    padding: 3.5px;

    p {
        width: 70px;
        height: 14px;
        margin-top: 2px;
        font-family: Roboto;
        font-size: 12px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: center;
        color: #030303;
    }
`

export const RightInfoContainer = styled.div`
    width: 140px;
    height: 20px;
    margin-bottom: 8px; 
    display: flex;
    justify-content: flex-end;
    align-items: center;

    p {
        width: 33px;
        height: 14px;
        margin: 0 3px 0 0;
        font-family: Roboto;
        font-size: 12px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: right;
        color: #030303;
    }
`

export const BluetoothImage = styled.img`
    width: 20px;
    height: 10px;
    margin: 2px -12px 3px 0;
    border: solid 1px var(--black);
`

export const ChargeImage = styled.img`
    width: 24px;
    height: 11.5px;
    margin: 0 1px 0 0;
    opacity: 0.8;
    border: solid 1px var(--black);
`