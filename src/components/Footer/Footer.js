import React, { useEffect, useState } from 'react';
import homepageOn from '../../assets/FooterIcons/homepageOn.svg';
import homepageOff from '../../assets/FooterIcons/homepageOff.svg';
import shoppingCartOn from '../../assets/FooterIcons/shoppingCartOn.svg';
import shoppingCartOff from '../../assets/FooterIcons/shoppingCartOff.svg';
import avatarOn from '../../assets/FooterIcons/avatarOn.svg';
import avatarOff from '../../assets/FooterIcons/avatarOff.svg';
import { FooterContainer, IconContainer } from './styled';
import { useHistory } from 'react-router-dom';
import { goToCart, goToFeed, goToProfile } from '../../routes/coordinator';

const Footer = () => {
    const history = useHistory();
    const pathname = history.location.pathname;
    const [actualPage, setActualPage] = useState(pathname);

    const changePage = (pageToGo) => {
        switch (pageToGo) {
            case "/menu":
                goToFeed(history)
                return;
            case "/carrinho":
                goToCart(history)
                return;
            case "/perfil":
                goToProfile(history)
                return;
            default:
                return
        }
    }

    useEffect(() => {
        setActualPage(pathname)
    }, [pathname])

    return (
        <FooterContainer>
            <IconContainer>
                <img
                    onClick={() => { changePage("/menu") }}
                    src={(actualPage === "/menu") ? homepageOn : homepageOff} alt={"ícone homepage"}
                />
            </IconContainer>
            <IconContainer>
                <img
                    onClick={() => { changePage("/carrinho") }}
                    src={(actualPage === "/carrinho") ? shoppingCartOn : shoppingCartOff} alt={"ícone shopping cart"}
                />
            </IconContainer>
            <IconContainer>
                <img
                    onClick={() => { changePage("/perfil") }}
                    src={(actualPage === "/perfil") ? avatarOn : avatarOff} alt={"ícone avatar"}
                />
            </IconContainer>
        </FooterContainer>
    )
}

export default Footer;