import React, { useEffect } from 'react'
import MenuCard from '../../components/RestaurantDetail/MenuCard/MenuCard'
import Header from '../../components/Header/Header'
import UseProtectedPage from '../../hooks/useProtectedPage'
import InfosRestaurantCard from '../../components/RestaurantDetail/InfosRestaurantCard/InfosRestaurantCard'


const DetailPage = () => {

  UseProtectedPage()

  useEffect(() => {
    document.title = "Menu do restaurante"
  })


  return (
    <div>
      <Header />
      <InfosRestaurantCard />
      <MenuCard />
    </div>
  );
}

export default DetailPage;