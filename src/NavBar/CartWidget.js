import React from 'react'
import cart from '../assets/img/cart.png'
import './navbar.css'

function CartWidget(){

return (
 <div className='cart'>
 <a href='/'><img src={cart} alt=''/></a>
 </div>
)
}

export default CartWidget
