import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import StartScreen from '../pages/StartScreen/StartScreen';
import LoginPage from '../pages/LoginPage/LoginPage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';
import AddressScreenPage from '../pages/AddressScreenPage/AddressScreenPage';
import FeedPage from '../pages/FeedPage/FeedPage';
import DetailPage from '../pages/DetailPage/DetailPage';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import CartPage from '../pages/CartPage/CartPage';
import ErrorPage from '../page/ErrorPage/ErrorPage';
import EditUserPage from '../pages/EditUserPage/EditUserPage';
import EditAddressPage from '../pages/EditAddressPage/EditAddressPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
          <Route exact path="/">
              <StartScreen />
          </Route>

          <Route exact path="/login">
              <LoginPage />
          </Route>

          <Route exact path="/cadastro">
              <SignUpPage />
          </Route>

          <Route exact path="/cadastro/endereco">
              <AddressScreenPage />
          </Route>

          <Route exact path="/menu">
              <FeedPage />
          </Route>

          <Route exact path="/detalhes/:id">
              <DetailPage />
          </Route>

          <Route exact path="/perfil">
              <ProfilePage />
          </Route>

          <Route exact path="/carrinho">
              <CartPage />
          </Route>

          <Route exact path="/perfil/editar/usuário">
              <EditUserPage />
          </Route>

          <Route exact path="/perfil/editar/endereco">
              <EditAddressPage />
          </Route>

          <Route>
              <ErrorPage />
          </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;