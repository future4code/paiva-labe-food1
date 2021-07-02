import React from 'react';
import { ScreenContainer, LogoImage, H1} from './styled';
import logo from '../../assets/logo.svg';
import NewAddressForm from '../../components/NewAddressForm/NewAddressForm';
import Header from '../../components/Header/Header'

const AddressScreenPage = () => {

  return (
    <ScreenContainer>
      <Header />
      <H1>Meu endereço</H1>
      <NewAddressForm/>
    </ScreenContainer>
  );
}

export default AddressScreenPage;