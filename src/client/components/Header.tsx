import * as React from 'react'
import { Link } from 'react-router-dom'

// STYLES
import '../scss/Header.scss'

export default function Header () {


  return (
    <div className="headerwrapper">
      <div className="headercontainer">
        <h1>Pete's Candy Store</h1>
        <Link className="link" to='/'>Shop</Link>
        <Link className="link" to='/cart'>Cart</Link>
      </div>
    </div>
  )
}