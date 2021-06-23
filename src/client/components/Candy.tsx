
import * as React from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../actions/cartActions'
import { dispatch } from '../store'
import { CandyType } from '../types/appSpecificTypes'

// STYLES 
import '../scss/Candy.scss'

interface CandyProps {
  details: CandyType
}


const Candy: React.FC<CandyProps> = (props) => {
  


    const {img, id, name, price, vegan, gf, description} = props.details


    function handleAdd ():void {
      dispatch(addToCart(id, name, price, img))
    }

    return (
      <div className="candyWrapper">
        <img className="img" src={img}/>
        <div className="text">
          <h5 className="name">{name}</h5>
          <p>Price: ${parseFloat(price.toString()).toFixed(2)}</p>
          <p>{description}</p>
          { vegan ? <p className="diet">Vegan: ✔</p> : <p className="diet">Vegan: ✖  </p> }
          { gf ? <p className="diet">Gluten Free: ✔</p> : <p className="diet">Gluten Free: ✖  </p> }
        </div>
        <button onClick={handleAdd}>Add to Cart</button>
      </div>
    )
 }

 export default connect()(Candy)