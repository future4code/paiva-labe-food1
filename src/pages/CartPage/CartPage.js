import React, { useEffect } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import useProtectedPage from '../../hooks/useProtectedPage';
import Cart from '../../components/Cart/Carts';

const CartPage = () => {
  useProtectedPage();

  useEffect(() => {
    document.title = "Carrinho";
  })


  return (
    <div>
      <Header />
      <Cart/>
      <Footer />
    </div>
  );
}

export default CartPage;