import React, { useEffect, useState } from 'react';
import { goToSearch } from '../../routes/coordinator';
import { useHistory } from 'react-router-dom';
import CardFeedPage from '../../components/CardFeed/CardFeedPage';
import { Feed, FeedMainContainer, TransitionButton, CategoriesContainer, CategorieParagraph } from './styled';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Scrollbars } from 'react-custom-scrollbars';
import searchIcon from '../../assets/FeedPageIcons/search.svg';
import useProtectedPage from '../../hooks/useProtectedPage';
import useRequestData from '../../hooks/useRequestData';

const FeedPage = () => {
  useProtectedPage();
  const history = useHistory();
  const { data: restaurantsInfo, getData: getRestaurantsInfo } = useRequestData({}, `/restaurants`, {auth: localStorage.getItem("token")});
  const allRestaurants = restaurantsInfo.restaurants;
  const [categoryFilter, setCategoryFilter] = useState("");

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("hasAddress"))) {
      getRestaurantsInfo();
      document.title = "Restaurantes";
    } else {
      alert ("Usuário sem endereço! Favor, cadastrar endereço")
    }    
  }, []);

  const filterByCategory = (category) => {
    if (categoryFilter !== category) {
      setCategoryFilter(category);
    } else {
      setCategoryFilter("");
    }
  }

  const categoriesArray = allRestaurants && allRestaurants.map((info) => {
    return info.category
  })

  const renderCategories = categoriesArray && categoriesArray.filter((element, id) => {
    return categoriesArray.indexOf(element) === id;
  }).sort(function (a, b) {
    return a.localeCompare(b);
  }).map((category) => {
    return (
      <CategorieParagraph
        key={category}
        onClick={() => { filterByCategory(category) }}
        categoryFiltered={categoryFilter}
        category={category}
      >{category}
      </CategorieParagraph>
    )
  });

  const renderFeed = allRestaurants && allRestaurants
    .filter((info) => categoryFilter ? info.category.includes(categoryFilter) : true)
    .map((info) => {
      return (
        <CardFeedPage
          key={info.id}
          info={info}
        />
      )
    });

  return (
    <Feed>
      <Header />
      <FeedMainContainer>
        <TransitionButton onClick={() => { goToSearch(history) }} >
          <img src={searchIcon} alt={"ícone de busca"} />
          <p>Restaurante</p>
        </TransitionButton>
        <CategoriesContainer>{renderCategories}</CategoriesContainer>
        <Scrollbars style={{ width: 360, height: 420 }}>
          {renderFeed}
        </Scrollbars>
      </FeedMainContainer>
      <Footer />
    </Feed>
  );
}

export default FeedPage;