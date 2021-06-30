import React from 'react';
import { ScreenContainer, LogoImage, H1} from './styled';
import logo from '../../assets/logo.svg';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

const SignUpPage = () => {

  return (
    <ScreenContainer>
      <LogoImage src={logo} />
      <H1>Cadastrar</H1>
      <SignUpForm/>
    </ScreenContainer>
  );
}

export default SignUpPage;