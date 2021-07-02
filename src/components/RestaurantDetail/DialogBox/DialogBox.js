import React, {useContext} from 'react'
import GlobalStateContext from '../../../global/GlobalStateContext'
import {addProductToOrder} from '../../../services/placeOrder'

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
        <div>
            <h3>Selecione a quantidade desejada</h3>
            <select name={"quantity"} onChange={onChangeQnttOrder}>
                {renderQuantity}
            </select>
            <button onClick={closeToDialogBox}>ADICIONAR AO CARRINHO</button>
        </div>
    )
}
export default DialogBox