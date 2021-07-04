import React, { useContext, useEffect, useState } from 'react';
import GlobalStateContext from '../../global/GlobalStateContext';
import CardSearchPage from '../../components/CardSearch/CardSearchPage';
import Header from '../../components/Header/Header';
import { Search, SearchMainContainer, InputSearch, InitialSearchBox } from './styled';
import { Scrollbars } from 'react-custom-scrollbars';
import useProtectedPage from '../../hooks/useProtectedPage';

const SearchPage = () => {
  useProtectedPage();
  const { restaurantsInfo } = useContext(GlobalStateContext);
  const allRestaurants = restaurantsInfo.restaurants;
  const [nameFilter, setNameFilter] = useState("");

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