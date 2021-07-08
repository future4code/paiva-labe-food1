import React from 'react'
import { useParams } from 'react-router-dom'
import GlobalStateContext from '../../../global/GlobalStateContext'
import useRequestData from '../../../hooks/useRequestData'
import {ProfileRetaurant, Restaurant, Category, DeliveryContainer, DeliveryTime, Shipping, Address} from './styled'

const InfosRestaurantCard = () => {

    const params = useParams();
    const { data: infosRestaurant } = useRequestData({}, `/restaurants/${params.id}`, { auth: localStorage.getItem("token") })
    const infos = infosRestaurant && infosRestaurant.restaurant

    return (
        <div>
            {infosRestaurant && infosRestaurant.restaurant &&
                <div>
                    <ProfileRetaurant src={infos.logoUrl} alt={"capa restaurante"} />
                    <Restaurant>{infos.name}</Restaurant>
                    <Category>{infos.category}</Category>
                    <DeliveryContainer>
                        <DeliveryTime>{`${infos.deliveryTime} min`}</DeliveryTime>
                        <Shipping>{`Frete ${infos.shipping.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`}</Shipping>
                    </DeliveryContainer>
                    <Address>{infos.address}</Address>
                </div>
            }
        </div>
    );
}

export default InfosRestaurantCard