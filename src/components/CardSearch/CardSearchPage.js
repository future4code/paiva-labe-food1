import React from 'react';
import { useHistory } from 'react-router-dom';
import { goToDetail } from '../../routes/coordinator';
import { CardSearchContainer, SearchImage, SearchInfoContainer, NameRestaurant } from './styled';

const CardSearchPage = (props) => {
  const history = useHistory();
  const { info } = props;

  return (
    <CardSearchContainer key={info.id} onClick={() => { goToDetail(history, info.id) }}>
      <SearchImage src={info.logoUrl} alt={`foto do restaurante ${info.name}`} />
      <SearchInfoContainer>
        <NameRestaurant>{info.name}</NameRestaurant>
        <div>
          <p>{info.deliveryTime} min</p>
          <p>Frete R${info.shipping},00</p>
        </div>
      </SearchInfoContainer>
    </CardSearchContainer>
  )
}

export default CardSearchPage;