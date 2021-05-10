 import * as React from 'react'
 import { CandyType} from '../types/appSpecificTypes'

// COMPONENTS

import Candy from './Candy'
import {candyData} from '../../data/candy'




 export default function CandyList () {
    return (
        <div>
          <ul>
            {candyData.map((item: CandyType) => {
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