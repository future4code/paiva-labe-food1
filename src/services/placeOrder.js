    
export const addProductToOrder = (productToAdd, quantity, order, setOrder, idRest) => {

    const index = order.findIndex((productInOrder) => {
        if(productInOrder.id === productToAdd.id) {
          return true
        } else {
          return false
        }
    })

    if(index === -1) {
        const productWithQuantity = {
          ...productToAdd,
          quantity: quantity
        }
  
        const orderCopy = [...order, productWithQuantity]
    
       setOrder(orderCopy)
        
    } else {

        const orderCopy = order.map((productInOrder) => {
          if(productInOrder.id === productToAdd.id) {
            return {
              ...productInOrder,
              quantity: quantity
            }
          } else {
            return productInOrder
          }
        }).filter((productInOrder) => {
            if(productInOrder.quantity === 0) {
              return false
            }
            return true
        })
  
        setOrder(orderCopy)
    }
}

export const removeProductToOrder = (id, order, setOrder) => {
    const orderCopy = order.map((productInOrder) => {
        if (productInOrder.id === id) {
            return {
                ...productInOrder,
                quantity: productInOrder.quantity - 1
            }
        } else {
            return productInOrder
        }
    }).filter((productInOrder) => {
        if (productInOrder.quantity === 0) {
            return false
        }
        return true
    })

    setOrder(orderCopy)
}