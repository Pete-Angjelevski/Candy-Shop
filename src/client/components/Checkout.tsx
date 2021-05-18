import * as React from 'react'
import {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import { CartType } from '../types/appSpecificTypes'
import { connect } from 'react-redux'


// COMPONENTS
import Order from './Order'
import Form from './Form'

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

  /* Split order summary and stripe portal
  into two seperate components within checkout
  when ready*/

  return (
    <div className="checkout"> 
      <div className="portal">
        <Form />
      </div>
      <div className="summary">
      <h3>Order Summary:</h3>
      <ul>
      { 
        items.map((item: CartType) => {
            return <Order key={item.id} item={item} />
          })   
        }
      </ul>
      <p>Total: {total}</p>
      </div>
    </div>
  )
}

export default connect()(Checkout)