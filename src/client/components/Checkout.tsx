import * as React from 'react'
import {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import { CartType } from '../types/appSpecificTypes'
import { connect } from 'react-redux'



// STYLES
import '../scss/Checkout.scss'

interface CheckoutProps {

}

const Checkout: React.FC<CheckoutProps> = () => {

  const {fullCart, total} = useSelector((state: any) => state.checkout)
  const [items, setItems] = useState<CartType[]>(fullCart)

  useEffect(() => {
    setItems(fullCart)
  }, [fullCart] )

  /* Split order summary and paypal portal
  into two seperate components within checkout
  when ready*/

  return (
    <div className="checkout"> 
      <div className="portal">
        <h2>*Also add payment service portal with PayPal*</h2>
      </div>
      <div className="summary">
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
    </div>
  )
}

export default connect()(Checkout)