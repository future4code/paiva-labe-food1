import React from 'react'
import { useParams } from 'react-router-dom'
import GlobalStateContext from '../../../global/GlobalStateContext'
import useRequestData from '../../../hooks/useRequestData'
import {ProfileRetaurant} from './styled'

const InfosRestaurantCard = () => {

    const params = useParams();
    const { data: infosRestaurant } = useRequestData({}, `/restaurants/${params.id}`, { auth: localStorage.getItem("token") })
    const infos = infosRestaurant && infosRestaurant.restaurant

    return (
        <div>
            {infosRestaurant && infosRestaurant.restaurant &&
                <div>
                    <ProfileRetaurant src={infos.logoUrl} alt={"capa restaurante"} />
                    <h1>{infos.name}</h1>
                    <p>{infos.category}</p>
                    <p>{`${infos.deliveryTime} min`}</p>
                    <p>{`Frete ${infos.shipping.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`}</p>
                    <p>{infos.address}</p>
                </div>
            }
        </div>
    );
}

export default InfosRestaurantCard