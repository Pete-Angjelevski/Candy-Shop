 import * as React from 'react'


// COMPONENTS

import Candy from './Candy'

type candyListProps = any[]

interface item {
  id: number,
	name: string,
	price: number,
	vegan: boolean,
	gf: boolean,
	description: string
}


 export default function CandyList (props: {candy: candyListProps}) {
    return (
        <div>
          <ul>
            {props.candy.map((item: item) => {
              return (
                <li key={item.id}>
                  {<Candy details={item} />}
                </li>
              )
            })}
          </ul>
        </div>
          )
 }