import React, { useEffect } from 'react';
import { ScreenContainer, LogoImage, H1} from './styled';
import PhoneInfo from '../../components/PhoneInfo/PhoneInfo'
import logo from '../../assets/logo.svg';
import LoginForm from '../../components/LoginForm/LoginForm';

const LoginPage = () => {
  useEffect(() => {
    document.title = "Login";
  })

  return (
    <ScreenContainer>
      <PhoneInfo />
      <LogoImage src={logo} />
      <H1>Entrar</H1>
      <LoginForm/>
    </ScreenContainer>
  );
}

export default LoginPage;