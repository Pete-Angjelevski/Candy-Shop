import * as React from 'react'
import {useState} from 'react'

import { CandyType } from '../types/appSpecificTypes'


interface CartProps {

}

interface CartState {

}


const Cart: React.FC<CartProps> = () => {


  const [items, setItems ] = useState<CandyType[]>([])


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
                <td><button></button></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}


export default Cart