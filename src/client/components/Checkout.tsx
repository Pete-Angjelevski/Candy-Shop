import * as React from 'react'
import {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import { CartType } from '../types/appSpecificTypes'
import { connect } from 'react-redux'


interface CheckoutProps {

}

const Checkout: React.FC<CheckoutProps> = () => {

  const checkout = useSelector((state: any) => state.checkout)
  const [items, setItems] = useState<CartType[]>(checkout)

  useEffect(() => {
    setItems(checkout)
  }, [checkout] )


  return (
    <div>
      <h1>Order Summary:</h1>
      <ul>
        {
          checkout 
          ? items.map((item: CartType) => {
            return (<li key={item.id}>
              <p>{item.name}</p>
              <p>${item.price}</p>
              <p>QTY: {item.quantity}</p>
            </li>)
          })
          : <li>
              <p>Nothing to checkout yet, please select form our shop</p>
            </li>
        }
      </ul>
    </div>
  )
}

export default connect()(Checkout)