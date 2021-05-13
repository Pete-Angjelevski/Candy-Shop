import * as React from 'react'
import {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import { CandyType } from '../types/appSpecificTypes'
import { deleteItem, editItem } from '../actions/cartActions'
import { dispatch } from '../store'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


interface CartProps {

}



const Cart: React.FC<CartProps> = () => {
  const cart = useSelector((state: any) => state.cart)

  let [ total, setTotal ] = useState<number>(0)
  const [items, setItems ] = useState<CandyType[]>(cart)

  useEffect((): void => {
    setItems(cart)
      
  },[cart] )

  function handleDelete(id: number): void {
    dispatch(deleteItem(id))
  }

  function handleEditChange (id: number, e: React.ChangeEvent<HTMLInputElement>): void {
      const arr: CandyType[] = cart.map((item: CandyType) => item.id === id
      ? { id: item.id, 
          name: item.name, 
          price: (item.price/ item.quantity) * Number(e.target.value), 
          quantity: Number(e.target.value)}
      : item) 

      setItems(arr)
  }

  function setEdit (): void {
    console.log(items)
    dispatch(editItem(items))
  }


  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>Candy</td>
            <td>Quantity</td>
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
                <td>{price}</td>
                <td><button onClick={setEdit}>Update</button></td>
                <td><button onClick={() => handleDelete(id)}>Remove</button></td>
                
              </tr>
            )
          })}
        </tbody>
      </table>
      <div>
        <p>Total: {total}</p>
        <Link to="/checkout">
          <button>Proceed to Checkout</button>
        </Link>
      </div>
    </div>
  )
}


export default connect()(Cart)