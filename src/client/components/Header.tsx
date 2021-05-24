import * as React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect, useSelector } from 'react-redux'
import { CartType } from '../types/appSpecificTypes'

// STYLES
import '../scss/Header.scss'


interface HeaderProps {

}

 const Header: React.FC<HeaderProps> = () => {

  
  const [ cartCount, setCartCount ] = useState<number>(0)

  const cart = useSelector((state: any) => state.cart)

  useEffect(() => {
    let count: number = 0

    cart.forEach((item: CartType) => {  
      count += item.quantity

    })

    setCartCount(count)

    

  }, [cart, cartCount])

  return (
    <div className="headerwrapper">
      <div className="headercontainer">
        <h1>Pete's Candy Store</h1>
        <Link className="link" to='/'>Shop</Link>
        <Link className="link" to='/cart'>Cart({cartCount})</Link>
      </div>
    </div>
  )
}

export default connect()(Header)