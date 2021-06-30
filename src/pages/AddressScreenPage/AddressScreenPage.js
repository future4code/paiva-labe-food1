import React from 'react';
import { ScreenContainer, LogoImage, H1} from './styled';
import logo from '../../assets/logo.svg';
import NewAddressForm from '../../components/NewAddressForm/NewAddressForm';

const AddressScreenPage = () => {

  return (
    <ScreenContainer>
      <H1>Meu endereço</H1>
      <NewAddressForm/>
    </ScreenContainer>
  );
}

export default AddressScreenPage;