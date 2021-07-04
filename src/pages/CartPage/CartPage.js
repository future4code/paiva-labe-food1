import React, { useEffect } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import useProtectedPage from '../../hooks/useProtectedPage';


const CartPage = () => {
  useProtectedPage();

  useEffect(() => {
    document.title = "Carrinho";
  })


  return (
    <div>
      <Header />
      <h1>Tela de Cadastro de Endereço</h1>
      <Footer />
    </div>
  );
}

export default CartPage;