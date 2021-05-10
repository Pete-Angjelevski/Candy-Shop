
import * as React from 'react'

interface candyProps {
  id: number,
	name: string,
	price: number,
	vegan: boolean,
	gf: boolean,
	description: string
}


export default function Candy (props: { details: candyProps}) {

    const {name, price, vegan, gf, description} = props.details

    return (
      <div>
        <p>{name}</p>
        <p>Price: {price}</p>
        <p>{description}</p>
        <p>Vegan: {vegan}</p>
        <p>Gluten Free: {gf}</p>
      </div>
    )
 }