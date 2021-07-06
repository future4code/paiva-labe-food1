import React, { useContext, useState } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";
import { Text, AddressTitle, Address, Container, Subtotal, FormContainer } from "./styled";
import { ProductContainer, ItensMenu, ProductName, ProdDescription, QnttProductInCart, ProdPrice, RemoveButton, StyledButton, Payment, Delivery, CartText, Price } from "./styled";

const Cart = () => {
    const { address, order } = useContext(GlobalStateContext)
    
    const addressInfo = address.address ? <Text>{address.address.street}, {address.address.number}</Text> 
    : <Text>Carregando...</Text>
    
    console.log(order)
    let price = 0
    order ? (order.forEach((item) => {
        price += item.price * item.quantity
    })) : (price = 0)

    const renderOrder = order.length > 0 ? (order.map((item) => {
        return (
            <ProductContainer key={item.id}>
                <ItensMenu src={item.photoUrl}/>
                <ProductName>{item.name}</ProductName>
                <ProdDescription>{item.description}</ProdDescription>
                <QnttProductInCart>{item.quantity}</QnttProductInCart>
                <ProdPrice>{item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</ProdPrice>
                <RemoveButton>Remover</RemoveButton>
            </ProductContainer>
        )
    })) : 
    (<CartText>
        Carrinho vazio
    </CartText>)
    return (
        <Container>
            <Address>
            <AddressTitle>
                Endereço de entrega
            </AddressTitle>
            {addressInfo}
            </Address>
            {renderOrder}
            <Delivery>
                Frete R$ 0,00
            </Delivery>
            <Subtotal>
                SUBTOTAL R$ <Price>{price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Price>
            </Subtotal>

            <FormContainer>
                <Payment>
                    Forma de pagamento
                </Payment>
                <form>
                    <input type="radio" name="metodo" value="dinheiro"/>
                    <label for="dinheiro">Dinheiro</label>

                    <br/>
                    
                    <input type="radio" name="metodo" value="cartao"/>
                    <label for="cartao">Cartão de crédito</label>

                    <StyledButton>Confirmar</StyledButton>
                </form>
            </FormContainer>
        </Container>
    )
}

export default Cart