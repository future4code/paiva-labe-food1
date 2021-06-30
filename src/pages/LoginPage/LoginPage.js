import React from 'react';
import { ScreenContainer, LogoImage, H1} from './styled';
import logo from '../../assets/logo.svg';
import LoginForm from '../../components/LoginForm/LoginForm';

const LoginPage = () => {

  return (
    <ScreenContainer>
      <LogoImage src={logo} />
      <H1>Entrar</H1>
      <LoginForm/>
    </ScreenContainer>
  );
}

export default LoginPage;