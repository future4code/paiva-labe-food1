import React from 'react';
import { HeaderContainer, HeadNavContainer, EmptyIconBox, IconBox, PageNameBox } from './styled';
import PhoneInfo from '../PhoneInfo/PhoneInfo';
import backIcon from '../../assets/HeaderIcons/backIcon.svg';
import { useHistory, useParams } from 'react-router-dom';
import { goToLogin, previousPage } from '../../routes/coordinator';

const Header = () => {
    const history = useHistory();
    const pathname = history.location.pathname;
    const params = useParams();

    const renderBackIcon = () => {
        if ((pathname === "/menu") || (pathname === "/carrinho") || (pathname === "/perfil")){
            return (
                <EmptyIconBox></EmptyIconBox>
            )
        } else if (pathname === "/cadastro/endereco") {
            return (
                <IconBox onClick={() => {goToLogin(history)}} src={backIcon} alt={"ícone de voltar"} />
            )
        } else {
            return(
                <IconBox onClick={() => {previousPage(history)}} src={backIcon} alt={"ícone de voltar"} />
            )
        }
    }

    const renderPageName = () => {
        switch (pathname) {
            case "/menu":
                return <p>Rappi4</p>;
            case "/feed/buscar":
                return <p>Busca</p>;
            case `/detalhes/${params.id}`:
                return <p>Restaurante</p>;
            case "/carrinho":
                return <p>Meu carrinho</p>;
            case "/perfil":
                return <p>Meu perfil</p>;
            case "/perfil/editar/usuário":
                return <p>Editar</p>;
            case "/perfil/editar/endereco":
                return <p>Endereço</p>;
            default:
                return;
        }
    }

    return (
        <HeaderContainer>
            <PhoneInfo />
            <HeadNavContainer>
                {renderBackIcon()}
                <PageNameBox>
                    {renderPageName()}
                </PageNameBox>
            </HeadNavContainer>
        </HeaderContainer>
    )
}

export default Header;