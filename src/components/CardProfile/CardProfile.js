import React, { useContext } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";
import { AddressText, Container, Header, Profile, Adress, OrderHistory, OrderCard, Text, TitleCard, TextContainer } from "./styled";

const CardProfile = () => {

    const {profile, address, orderHistory} = useContext(GlobalStateContext)
    const addressInfo = address.address ? <Text>{address.address.street}, {address.address.number} - {address.address && address.address.city}</Text> 
    : <Text>Carregando...</Text>
    const profileName = profile.user ? <Text>{profile.user.name}</Text> : <Text>Carregando...</Text>
    const profileEmail =  profile.user ? <Text>{profile.user.email}</Text> : <Text>Carregando...</Text>
    const profileCPF = profile.user ? <Text>{profile.user.cpf}</Text> : <Text>Carregando...</Text>
    const orders = orderHistory ? (orderHistory.orders && orderHistory.orders.map((order) => {
        return (
            <OrderCard key={order.createdAt}>
                <TextContainer>
                    <TitleCard>{order.restaurantName}</TitleCard>
                    <p>{order.createdAt}</p>
                    <p><strong>SUBTOTAL R$:{order.totalPrice}</strong></p>
                </TextContainer>
            </OrderCard>
        )
    }) ) : <Text>Você não realizou nenhum pedido</Text>

    return (
        <Container>
            <Header>
                MEU PERFIL
            </Header>
            <Profile>
                {profileName}
                {profileEmail}
                {profileCPF}
            </Profile>
            <Adress>
                <AddressText>
                    Endereço cadastrado
                </AddressText>
                {addressInfo}
            </Adress>
            <OrderHistory>
                Histórico de pedidos
            </OrderHistory>
            {orders}
        </Container>
    )
}

export default CardProfile