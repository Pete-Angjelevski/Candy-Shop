import * as React from 'react'
import { CartType } from '../types/appSpecificTypes'


// STYLES
import '../scss/Order.scss'

interface OrderProps {
  item: CartType
}


const Order: React.FC<OrderProps> = (props) => {
  const { name, price, quantity, img} = props.item

  return (
    <li className="itemContainer" >
      <p>{name}</p>
      <p>${price}</p>
      <p>QTY: {quantity}</p>
      <img src={img}/>
    </li>
    )

}

export default Order