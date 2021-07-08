import React, { useEffect } from 'react';
import EditUser from '../../components/EditProfile/EditUser';
import Header from '../../components/Header/Header';
import UseProtectedPage from '../../hooks/useProtectedPage';

const EditUserPage = () => {
  UseProtectedPage();

  useEffect(() => {
    document.title = "Edição de usuário";
  })


  return (
    <div>
      <Header />
      <EditUser/>
    </div>
  );
}

export default EditUserPage;