import React, { useContext, useState } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";
import { Text, AddressTitle, Address, Container } from "./styled";
import { ProductContainer, ItensMenu, ProductName, ProdDescription, QnttProductInCart, ProdPrice, RemoveButton } from "./styled";

const Cart = () => {
    const { address, order } = useContext(GlobalStateContext)
    
    const addressInfo = address.address ? <Text>{address.address.street}, {address.address.number}</Text> 
    : <Text>Carregando...</Text>

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
    (<div>
        Carrinho vazio
    </div>)
    return (
        <Container>
            <Address>
            <AddressTitle>
                Endereço de entrega
            </AddressTitle>
            {addressInfo}
            </Address>
            {renderOrder}
            <div>
                Frete R$
                <br/>
                SUBTOTAL R$
            </div>

            <div>
                Forma de pagamento
                <form>
                    <input type="radio" name="dinheiro" value="dinheiro"/>
                    <label for="dinheiro">Dinheiro</label>

                    <br/>
                    
                    <input type="radio" name="cartao" value="cartao"/>
                    <label for="cartao">Cartão de crédito</label>
                </form>
            </div>
        </Container>
    )
}

export default Cart