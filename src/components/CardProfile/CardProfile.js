import React from "react";
import useRequestData from "../../hooks/useRequestData";
import { Container, Header, Profile, Adress, OrderHistory, OrderCard } from "./styled";

const CardProfile = () => {
    
    const token = {
        auth: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IktzczdtVGpweHNVZUFFNTMza1F4IiwibmFtZSI6IkFzdHJvZGV2IEp1bmlvciIsImVtYWlsIjoiYXN0cm9kZXZAZnV0dXJlNC5jb20iLCJjcGYiOiIxMTEuMTExLjExMS0xMyIsImhhc0FkZHJlc3MiOnRydWUsImFkZHJlc3MiOiJSLiBBZm9uc28gQnJheiBEb2lzLCAxNywgNzEgLSBWaWxhIE4uIENvbmNlacOnw6NvIiwiaWF0IjoxNjI1MDE5MzYxfQ.-bLZvDbge7_QYA-J9C1SjWLV5tqCILzBuTnjP0b_JPQ"
    }

    const {data: profile} = useRequestData({}, `/profile`, token)
    const {data: address} = useRequestData({}, `/profile/address`, token)
    const {data: orderHistory} = useRequestData({}, `/orders/history`, token)
    const profileName = profile.user && profile.user.name
    const profileEmail =  profile.user && profile.user.email
    const profileCPF = profile.user && profile.user.cpf
    const street = address.address && address.address.street 
    const number = address.address && address.address.number
    const city = address.address && address.address.number
    const orders = orderHistory.orders && orderHistory.orders.map((order) => {
    
        return (
            <div key={order.createdAt}>
                <p>{order.restaurantName}</p>
                <p>{order.createdAt}</p>
                <p>SUBTOTAL R$:{order.totalPrice}</p>
                <hr/>
            </div>
        )
    })
    return (
        <Container>
            <Header>

            </Header>
            <Profile>
                <p>{profileName}</p>
                <p>{profileEmail}</p>
                <p>{profileCPF}</p>
            </Profile>
            <Adress>
                <p>{street}, {number} - {city}</p>
            </Adress>
            <OrderHistory>
                Histórico de pedidos
            </OrderHistory>
            <OrderCard>
                {orders}
            </OrderCard>
        </Container>
    )
}

export default CardProfile