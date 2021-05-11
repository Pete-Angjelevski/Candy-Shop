import * as React from 'react'
import {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import { CandyType } from '../types/appSpecificTypes'
import { deleteItem } from '../actions/cartActions'
import { dispatch } from '../store'
import { connect } from 'react-redux'

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
                <td><input className='update-input' value={quantity} /></td>
                <td>{price}</td>
                <td><button onClick={() => handleDelete(id)}>Remove</button></td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <div>
        <p>Total: {total}</p>
      </div>
    </div>
  )
}


export default connect()(Cart)