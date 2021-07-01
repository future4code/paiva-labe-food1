import React, { useContext } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";
import { AddressText, Container, Header, Profile, Adress, OrderHistory, OrderCard, Text, TitleCard, TextContainer, ProfileButton, AddressButton } from "./styled";
import edit from '../../assets/inputIcons/edit.png'
import { goToEditAddress, goToEditUser } from "../../routes/coordinator";
import { useHistory } from "react-router";


const CardProfile = () => {
    const history = useHistory()
    const {profile, address, orderHistory} = useContext(GlobalStateContext)
    const addressInfo = address.address ? <Text>{address.address.street}, {address.address.number} - {address.address && address.address.city}</Text> 
    : <Text>Carregando...</Text>
    const profileName = profile.user ? <Text>{profile.user.name}</Text> : <Text>Carregando...</Text>
    const profileEmail =  profile.user ? <Text>{profile.user.email}</Text> : <Text>Carregando...</Text>
    const profileCPF = profile.user ? <Text>{profile.user.cpf}</Text> : <Text>Carregando...</Text>
    
    const orders = orderHistory ? (orderHistory.orders && orderHistory.orders.map((order) => {
        const day = order.createdAt
        var orderDay = new Date(day)
        return (
            <OrderCard key={order.createdAt}>
                <TextContainer>
                    <TitleCard>{order.restaurantName}</TitleCard>
                    <p>{orderDay.toLocaleDateString('pt-BR')}</p>
                    <p><strong>SUBTOTAL R$:{order.totalPrice}</strong></p>
                </TextContainer>
            </OrderCard>
        )
    }) ) : <Text>Você não realizou nenhum pedido</Text>
    
    const onClickEditUser = () => {
        goToEditUser(history)
    }
    const onClickEditAddress = () => {
        goToEditAddress(history)
    }
    return (
        <Container>
            <Header>
                MEU PERFIL
            </Header>
            <Profile>
                {profileName}
                {profileEmail}
                {profileCPF}
                <ProfileButton onClick={() => onClickEditUser()}>
                    <img src={edit} />
                </ProfileButton>
            </Profile>
            <Adress>
                <AddressText>
                    Endereço cadastrado
                </AddressText>
                <AddressButton onClick={() => onClickEditAddress()}>
                    <img src={edit} />
                </AddressButton>
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