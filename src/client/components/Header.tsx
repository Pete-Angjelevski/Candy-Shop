import * as React from 'react'
import { Link } from 'react-router-dom'

export default function Header () {


  return (
    <div>
      <h1>Pete's Candy Store</h1>
      <Link to='/'>Shop</Link>
      <Link to='/cart'>Cart</Link>
      <Link to='/checkout'>Checkout</Link>
    </div>
  )
}