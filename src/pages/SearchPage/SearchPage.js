import React, { useEffect, useState } from 'react';
import CardSearchPage from '../../components/CardSearch/CardSearchPage';
import Header from '../../components/Header/Header';
import { Search, SearchMainContainer, InputSearch, InitialSearchBox } from './styled';
import { Scrollbars } from 'react-custom-scrollbars';
import useProtectedPage from '../../hooks/useProtectedPage';
import useRequestData from '../../hooks/useRequestData';

const SearchPage = () => {
  useProtectedPage();
  const { data: restaurantsInfo, getData: getRestaurantsInfo } = useRequestData({}, `/restaurants`, {auth: localStorage.getItem("token")});
  const allRestaurants = restaurantsInfo.restaurants;
  const [nameFilter, setNameFilter] = useState("");

  useEffect(() => {
    document.title = "Busca";
    getRestaurantsInfo();
  })

  const handleNameFilter = (event) => {
    setNameFilter(event.target.value)
  }

  const renderSearch = (nameFilter !== "") ? allRestaurants && allRestaurants
    .filter((info) => nameFilter ? info.name.includes(nameFilter) : true)
    .map((info) => {
      return (
        <CardSearchPage
          key={info.id}
          info={info}
        />
      )
    }) : <InitialSearchBox><p>Busca por nome de restaurante</p></InitialSearchBox>

  return (
    <Search>
      <Header />
      <SearchMainContainer>
        <InputSearch
          type={"text"}
          value={nameFilter}
          onChange={handleNameFilter}
          autoFocus />
        <Scrollbars style={{ width: 360, height: 504 }}>
          {renderSearch}
        </Scrollbars>
      </SearchMainContainer>
    </Search>
  )
};

export default SearchPage;