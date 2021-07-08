import React, {useContext} from 'react'
import GlobalStateContext from '../../../global/GlobalStateContext'
import {addProductToOrder} from '../../../services/placeOrder'
import {BoxContainer, TitleBox, SelectQuantity, AddToCartButton} from './styled'

const DialogBox = (props) => {

    const {order, setOrder} = useContext(GlobalStateContext)

    const onChangeQnttOrder = (e) => {
        const quantityProdInOrder = Number(e.target.value)
        addProductToOrder(props.product, quantityProdInOrder, order, setOrder, props.idRest)
    }

    const closeToDialogBox = () => {
        props.setShowDialog(false)
    }

    const quantity = []
    for (let i = 0; i < 25; i++) {
        quantity.push(i)
    }
    
    const renderQuantity = quantity && quantity.map((qntt) => {
        return <option value={qntt}>{qntt}</option>
    })

    return (
        <BoxContainer>
            <TitleBox>Selecione a quantidade desejada</TitleBox>
            <SelectQuantity name={"quantity"} onChange={onChangeQnttOrder}>
                {renderQuantity}
            </SelectQuantity>
            <AddToCartButton onClick={closeToDialogBox}>ADICIONAR AO CARRINHO</AddToCartButton>
        </BoxContainer>
    )
}
export default DialogBox