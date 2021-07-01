import React from 'react';
import { useHistory } from 'react-router-dom';
import { goToDetail } from '../../routes/coordinator';
import { CardFeedContainer, FeedImage, FeedInfoContainer, NameRestaurant } from './styled';

const CardFeedPage = (props) => {
  const history = useHistory();
  const { info } = props;

  return (
    <CardFeedContainer key={info.id} onClick={() => { goToDetail(history, info.id) }}>
      <FeedImage src={info.logoUrl} alt={`foto do restaurante ${info.name}`} />
      <FeedInfoContainer>
        <NameRestaurant>{info.name}</NameRestaurant>
        <div>
          <p>{info.deliveryTime} min</p>
          <p>Frete R${info.shipping},00</p>
        </div>
      </FeedInfoContainer>
    </CardFeedContainer>
  )
}

export default CardFeedPage;