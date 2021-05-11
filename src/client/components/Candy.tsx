
import * as React from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../actions/cartActions'
import { dispatch } from '../store'



interface candyProps {
  id: number,
	name: string,
	price: number,
	vegan: boolean,
	gf: boolean,
	description: string,
}


function Candy (props: { details: candyProps}) {
  


    const {id, name, price, vegan, gf, description} = props.details


    function handleAdd () {
      dispatch(addToCart(id, name, price))
    }

    return (
      <div>
        <p>{name}</p>
        <p>Price: {price}</p>
        <p>{description}</p>
        { vegan ? <p>Vegan: ✔</p> : <p>Vegan: ✖  </p> }
        { gf ? <p>Gluten Free: ✔</p> : <p>Gluten Free: ✖  </p> }
        <button onClick={handleAdd}>Add to Cart</button>
      </div>
    )
 }

 export default connect()(Candy)