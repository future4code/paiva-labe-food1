import React from 'react'
import MenuCard from '../../components/RestaurantDetail/MenuCard/MenuCard'
import InfosRestaurantCard from '../../components/RestaurantDetail/InfosRestaurantCard/InfosRestaurantCard';


const DetailPage = () => {

  return (
    <div>
      <h1>Tela de Detalhe do Restaurante</h1>
      <InfosRestaurantCard />
      <MenuCard />
    </div>
  );
}

export default DetailPage;