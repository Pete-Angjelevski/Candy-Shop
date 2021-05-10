import * as React from 'react'
import {useState} from 'react'
import { connect } from 'react-redux'


interface propsCart {}[]

type USitems = [ ]



function Cart (props: {cart: propsCart}) {
  const [items, setItems ] = useState<USitems>(props.cart)


  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>Beer</td>
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
                <td><button onClick={() => handleDelete(id)}><span className='fa fa-trash fa-2x' /></button></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}


function mapStateToProps (state: any){

return {
  cart: state.cart
}
}

export default connect(mapStateToProps)(Cart)