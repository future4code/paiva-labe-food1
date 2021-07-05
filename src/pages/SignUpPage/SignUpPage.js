import React, { useEffect } from 'react';
import { ScreenContainer, LogoImage, H1} from './styled';
import logo from '../../assets/logo.svg';
import Header from '../../components/Header/Header';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

const SignUpPage = () => {
  useEffect(() => {
    document.title = "Cadastro de usuário";
  })

  return (
    <ScreenContainer>
      <Header />
      <LogoImage src={logo} />
      <H1>Cadastrar</H1>
      <SignUpForm/>
    </ScreenContainer>
  );
}

export default SignUpPage;