import * as React from 'react'
import {useState} from 'react'
import { useSelector } from 'react-redux'
import { CandyType } from '../types/appSpecificTypes'


interface CartProps {

}



const Cart: React.FC<CartProps> = () => {
  const cart = useSelector((state: any) => state.cart)

  const [items, setItems ] = useState<CandyType[]>(cart)


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
                <td><button>Remove</button></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}


export default Cart