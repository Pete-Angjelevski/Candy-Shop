 import * as React from 'react'
 import { CandyType} from '../types/appSpecificTypes'

// STYLES 
import '../scss/CandyList.scss'


// COMPONENTS
import Candy from './Candy'
import candyData from '../../data/candy'




 export default function CandyList () {
    return (
        <div className="CandyListWrapper">
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