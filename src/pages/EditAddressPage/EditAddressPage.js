import React, { useEffect } from 'react';
import EditAddress from '../../components/EditProfile/EditAddress';
import Header from '../../components/Header/Header';
import UseProtectedPage from '../../hooks/useProtectedPage';

const EditAddressPage = () => {
  UseProtectedPage();

  useEffect(() => {
    document.title = "Edição de endereço";
  })

  
  return (
    <div>
      <Header />
      <EditAddress/>
    </div>
  );
}

export default EditAddressPage;