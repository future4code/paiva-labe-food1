import React, { useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import GlobalStateContext from '../../../global/GlobalStateContext'
import useRequestData from '../../../hooks/useRequestData'
import DialogBox from '../DialogBox/DialogBox'
import { removeProductToOrder } from '../../../services/placeOrder'
import { ItensMenu } from './styled'

const MenuCard = () => {

    const { order, setOrder } = useContext(GlobalStateContext)
    const params = useParams();
    const { data: restaurantDetail } = useRequestData({}, `/restaurants/${params.id}`, {auth: localStorage.getItem("token") })
    const restaurantProducts = restaurantDetail.restaurant && restaurantDetail.restaurant.products
    const [showDialog, setShowDialog] = useState(false)
    const [idProdSelect, setIdProdSelect] = useState("")
    const [textButton, settextButton] = useState("adicionar")

    const groupByCategory = restaurantProducts && restaurantProducts.reduce((acc, obj) => {
        let key = obj["category"];
        if (!acc[key]) {
            acc[key] = []
        }
        acc[key].push(obj);
        return acc
    }, {})

    const categories = []
    for (const property in groupByCategory) {
        categories.push(property)
    }

    const quantitySelection = (id) => {
        order.length > 0 && order.map((prod) => {
            if (prod.id === id) {
                return setShowDialog(false)
            } else {
                return setShowDialog(true)
            }
        })
        order.length === 0 && setShowDialog(true)
        setIdProdSelect(id)
        order.length > 0 && removeProductToOrder(id, order, setOrder)
    }

    const renderButtonCart = (prod) => {
        return (
            <button onClick={() => quantitySelection(prod.id)}>
                {
                    order.length > 0 
                    ? 
                        (order.findIndex((productInOrder) => {
                            if (productInOrder.id === prod.id) {
                                return true
                            } else {
                                return false
                            }
                        }) === -1 
                        ? 
                            "adicionar" 
                        : 
                            "remover")
                    :
                        "adicionar"
                }
            </button>
        )
    }    

    const renderQuantityCart = (prod) => {
        const index = order.findIndex((productInOrder) => {
            if(productInOrder.id === prod.id) {
              return true
            } else {
              return false
            }
        })
        return (
            <p>
                {order.length > 0 && index !== -1 && `${(order[index]).quantity}`}
            </p>
                    
        )
    }

    const renderByCategory = groupByCategory && categories && categories.map((category) => {

        const renderCardMenu = groupByCategory[`${category}`] && groupByCategory[`${category}`].map((prod) => {
            return (
                <div>
                    <ItensMenu src={prod.photoUrl} alt={"foto do prato"} />
                    <h4>{prod.name}</h4>
                    <p>{prod.description}</p>
                    <p>{prod.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                    {renderButtonCart(prod)}
                    {renderQuantityCart(prod)}
                    {prod.id == idProdSelect && showDialog && <DialogBox idRest={params.id} product={prod} setShowDialog={setShowDialog} />}
                </div>
            )
        })
        return (
            <div>
                <h2>{category}</h2>
                {renderCardMenu}
            </div>
        )
    })

    return (
        <div>
            {renderByCategory}
        </div>
    );
}

export default MenuCard;