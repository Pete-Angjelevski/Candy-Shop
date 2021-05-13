import * as React from 'react'
import {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import { CartType } from '../types/appSpecificTypes'
import { connect } from 'react-redux'


interface CheckoutProps {

}

const Checkout: React.FC<CheckoutProps> = () => {

  const {fullCart, total} = useSelector((state: any) => state.checkout)
  const [items, setItems] = useState<CartType[]>(fullCart)

  useEffect(() => {
    setItems(fullCart)
  }, [fullCart] )


  return (
    <div>
      <h2>*Also add payment service portal with PayPal*</h2>
      <h3>Order Summary:</h3>
      <ul>
      { 
        items.map((item: CartType) => {
            return (<li key={item.id}>
              <p>{item.name}</p>
              <p>${item.price}</p>
              <p>QTY: {item.quantity}</p>
            </li>)
          })   
        }
      </ul>
      <p>Total: {total}</p>
    </div>
  )
}

export default connect()(Checkout)