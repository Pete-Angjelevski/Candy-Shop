import * as React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect, useSelector } from 'react-redux'


// STYLES
import '../scss/Header.scss'


interface HeaderProps {

}

 const Header: React.FC<HeaderProps> = () => {

  let [ qty, setQty ] = useState<number>(0)

  const cart = useSelector((state: any) => state.cart)

  useEffect(() => {

    for (let i = 0; i< cart.length; i+= 1) {
      setQty(+ cart[i].quantity)
    }
   
    

  }, [cart])

  return (
    <div className="headerwrapper">
      <div className="headercontainer">
        <h1>Pete's Candy Store</h1>
        <Link className="link" to='/'>Shop</Link>
        <Link className="link" to='/cart'>Cart({qty})</Link>
      </div>
    </div>
  )
}

export default connect()(Header)