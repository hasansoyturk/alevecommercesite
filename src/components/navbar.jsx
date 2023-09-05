import React, { useEffect, useState,useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart, SignIn, MagnifyingGlass } from 'phosphor-react'
import './navbar.css';
import { PRODUCTS } from '../products';
import logo from "../assets/logo.png"
import Authdetails from '../pages/signIn/authdetails';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import { ShopContext } from '../context/shop-context';

export const Navbar = () => {

  const { addToCart, cartItems } = useContext(ShopContext);

  const [searchResults, setSearchResults] = useState([]);
  const [authUser, setAuthUser] = useState('')

  const [searchedText, setsearchedText] = useState('')
  const [isSearchingActive, setIsSearchingActive] = useState(false)

  const filteredData = PRODUCTS?.filter(f => f.productName.toLowerCase().includes(searchedText.toLowerCase()));


  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user)
      } else {
        setAuthUser(null)
      }
    })
    return () => {
      listen()
    }
  }, [])




  // const performSearch = (searchTerm) => {

  //   const filteredResults = PRODUCTS.filter((product) =>
  //     product.productName.toLowerCase().includes(searchTerm.toLowerCase())
  //   );
  //   setSearchResults(filteredResults);
  // };

  return (
    <>
      <div className='navbara'>
        <div className='links'>
          <a href='/'><img src={logo} alt='logo' /></a>
          <div className='right-side'>
            <div className='search-container'>
              <input
                type="text"
                placeholder="Search..."
                value={searchedText}
                onChange={(e) => {
                  setsearchedText(e.target.value)
                }}
              />
              <button onClick={() => setIsSearchingActive(true)}><MagnifyingGlass size={32} /></button>
            </div>
            <Link to="/" className='Shop'>Shop</Link>
            <Link to="/cart"><ShoppingCart size={32} /></Link>
            {auth.currentUser != null ? null : (<Link to="/signIn"><SignIn size={32} /></Link>)}
            <Authdetails />
          </div>

        </div>
      </div>
      {isSearchingActive &&
        <div className="search-results">
          <div className='overlay' onClick={()=>setIsSearchingActive(false)}></div>
          <div className='searched-products'>
            {filteredData.map((product) => (
              <div key={product.id} className="product-item">
                <img src={product.productImage} alt={product.productName} />
                <h6>{product.productName}</h6>
                <p>{product.price}</p>
                <button className='addToCartBttn' onClick={() => addToCart(product.id)}>
                  Add To Cart {cartItems[product.id] > 0 && <>({cartItems[product.id]})</>}
                </button>

              </div>
            ))}
            {/* <p>dgnadkdkşnga</p>
            <p>31315135133113</p> */}
          </div>
        </div>}
    </>
  )
}
