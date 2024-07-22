import React, { useContext } from 'react'
import './Navbar.css'
import { CoinContext } from '../../Context/CoinContext'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const {setCurrency} = useContext(CoinContext)

  const currencyHandler = (event)=>{
    switch (event.target.value){
      case "usd": {
        setCurrency({name: "usd", Symbol: "$"});
        break;
      }
      case "inr": {
        setCurrency({name: "inr", Symbol: "₹"});
        break;
      }
      default : {
        setCurrency({name: "usd", Symbol: "$"});
        break;
      }
    }

  }
  return (
    <div className='navbar'>
        <ul>
            <Link to={'/'}><li>Home</li></Link>
            <li>Features</li>
            <li>Price</li>
        </ul>
        <div className='nav-right'>
            <select onChange={currencyHandler}>
                <option value="usd">USD</option>
                <option value="inr">INR</option>
            </select>
            <button>Sign up</button>

        </div>
      
    </div>
  )
}

export default Navbar
