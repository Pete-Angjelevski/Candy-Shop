import * as React from 'react'
import {useState, useEffect} from 'react'
import { useSelector, connect } from 'react-redux'
import { CartType } from '../types/appSpecificTypes'
import { deleteItem, editItem } from '../actions/cartActions'
import { dispatch } from '../store'
import { Link } from 'react-router-dom'
import { addToCheckout } from '../actions/checkoutActions'

// STYLES
import '../scss/Cart.scss'


interface CartProps {

}



const Cart: React.FC<CartProps> = () => {
  const cart = useSelector((state: any) => state.cart)

  let [ total, setTotal ] = useState<number>(0)
  const [items, setItems ] = useState<CartType[]>(cart)

  useEffect((): void => {
    let totalPrice: number = 0
    
    cart.forEach((item: CartType) => {
      totalPrice += item.price
    })
    
    setTotal(totalPrice)
    setItems(cart)


  },[cart] )

 

  function handleDelete(id: number): void {
    dispatch(deleteItem(id))
    
  }

  function handleEditChange (id: number, e: React.ChangeEvent<HTMLInputElement>): void {
      const arr: CartType[] = cart.map((item: CartType) => item.id === id
      ? { id: item.id, 
          name: item.name, 
          price: (item.price/ item.quantity) * Number(e.target.value), 
          quantity: Number(e.target.value),
          img: item.img
        }
      : item) 

      setItems(arr)
  }

  function setEdit (): void {
    dispatch(editItem(items))
  }

  function handleCheckoutClick(): void {
    dispatch(addToCheckout(items, total))
  }


  return (
    <div className="cartWrapper">
      <div className="cartContainer">
      <table>
        <thead>
          <tr>
            <td>Candy</td>
            <td>Quantity</td>
            <td>Update QTY</td>
            <td>Cost</td>
            <td>Remove</td>
          </tr>
        </thead>
        <tbody>
          {items.map(({ id, name, quantity, price }) => {
            return (
              <tr key={id}>
                <td>{name}</td>
                <td><input  value={quantity} onChange={(e) => handleEditChange(id, e)} /></td>
                <td><button className="update" onClick={setEdit}>Update</button></td>
                <td>${price}</td>
                <td><button className="update" onClick={() => handleDelete(id)}>Remove</button></td>
                
              </tr>
            )
          })}
        </tbody>
      </table>
      <div>
        <p>Total: ${total}</p>
        <Link to="/checkout">
          <button className="checkout" onClick={handleCheckoutClick}>Proceed to Checkout</button>
        </Link>
      </div>
      </div>
    </div>
  )
}


export default connect()(Cart)