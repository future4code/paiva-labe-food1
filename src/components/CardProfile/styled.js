import styled from 'styled-components';
import { secondaryColor} from '../../constants/colors'

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
    background-color: #ffffff;
`
export const Profile = styled.div `
    height: 102px;
`
export const AddressText = styled.p `
    color: ${secondaryColor};
    font-size: 16px;
    font-family: Roboto;
    padding: 16px 16px 0px 16px;
    margin-top: 0;
`
export const Adress = styled.div `
    width: 100%;
    height: 76px;
    background-color: #eeeeee;
`
export const Text = styled.p `
    font-size: 16px;
    font-family: Roboto;
    margin: 8px 16px 0px 16px;
    padding-bottom: 8px;
`
export const OrderHistory = styled.div `
    margin: 0px 16px 0px 16px;
    padding-top: 16px;
    padding-bottom: 8px;
    font-size: 16px;
    font-family: Roboto;
    border-bottom: 1px solid black;
`

export const OrderCard = styled.div `
    width: 328px;
    height: 110px;
    margin: 7px 16px 0px 16px;
    border-radius: 8px;
    border: solid 1px ${secondaryColor};
`

export const TitleCard = styled.p `
    color: #e86e5a;
    font-size: 16px;
    font-family: Roboto;
`
export const TextContainer = styled.div `
    margin: 16px 16px 16px 16px;
`

export const ProfileButton = styled.button `
    width: 24px;
    height: 24px;
    position: absolute;
    top: 80px;
    margin-right: 16px;
    margin-left: 304px;
    border: none;
    background-color: white;
`

export const AddressButton = styled.button `
    width: 24px;
    height: 24px;
    position: absolute;
    top: 200px;
    margin-right: 16px;
    margin-left: 304px;
    border: none;
`