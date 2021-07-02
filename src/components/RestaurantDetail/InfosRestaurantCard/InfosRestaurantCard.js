import React from 'react'
import { useParams } from 'react-router-dom'
import GlobalStateContext from '../../../global/GlobalStateContext'
import useRequestData from '../../../hooks/useRequestData'
import {ProfileRetaurant} from './styled'

const InfosRestaurantCard = () => {

    //const {teste}= useContext(GlobalStateContext)
    const params = useParams();
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InluRVFMZGVlU0xOVWF6YmZvc0RLIiwibmFtZSI6IlJhcHBpNCBUZXN0ZSBDb20gRW5kZXJlw6dvIiwiZW1haWwiOiJyYXBwaTR0ZXN0ZV9jb21fZW5kZXJlY29AZnV0dXJlNC5jb20iLCJjcGYiOiI5OTkuNjY2LjMzMy01NyIsImhhc0FkZHJlc3MiOnRydWUsImFkZHJlc3MiOiJSLiBCcmFzaWxlaXJvIENvcmRpbGhlaXJvLCA2NTYsIDE1NiAtIEpvc2VmaW5hIEFwYXJlY2lkYSIsImlhdCI6MTYyNDk5Mjg4MH0.FFw5Ii3wgloj8fFeygPuMsr5uCTnO3N6CSDupXbHRl4"
    //const [data] = useRequestData({}, `restaurants/${params.id}`, { auth: localStorage.getItem("token") })
    const { data: infosRestaurant } = useRequestData({}, `restaurants/${params.id}`, { auth: token })
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