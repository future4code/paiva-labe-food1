import React, { useEffect } from 'react';
import CardProfile from '../../components/CardProfile/CardProfile';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import useProtectedPage from '../../hooks/useProtectedPage';

const ProfilePage = () => {
  useProtectedPage();

  useEffect(() => {
    document.title = "Perfil";
  })

  return (
    <div>
      <Header />
      <CardProfile/>
      <Footer />
    </div>
  );
}

export default ProfilePage;