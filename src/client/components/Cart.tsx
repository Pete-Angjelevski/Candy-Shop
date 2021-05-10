import * as React from 'react'
import {useState} from 'react'
import { useSelector } from 'react-redux'



function Cart () {
  const cart = useSelector<>((state) => state.cart)

  const [items, setItems ] = useState(cart)


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
                <td><button><span/></button></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}


export default Cart