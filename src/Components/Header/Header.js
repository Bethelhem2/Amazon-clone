import React from 'react'
import { SlLocationPin } from "react-icons/sl";
import { FaSearch } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import classes from './Header.module.css'
import LowerHeader from './LowerHeader'

function Header() {
  return (
    <>
      <section className={classes.header__container}>
        <div className={classes.logo__container}>
          {/* logo */}
          <a href="/">
            <img
              src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png"
              alt="amazon logo"
            />
          </a>
          {/* delivery*/}
          <a href=''> 
            <div className={classes.delivery}>
              <span>
                <SlLocationPin />
              </span>
              <div>
                <p>Delivered to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </a>
        </div>

        {/* search */}
        <div className={classes.search}>
          <select name="" id="">
            <option value="">All</option>
          </select>
          <input type="text" name="" id="" placeholder="Search Amazon" />
          <FaSearch size={25} />
        </div>

        <a href="" className={classes.language}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp_aCxUas3NJb3nFW5OGvCtd1FjsIgIu3Uvk51NjzVmA&s" />
          <select name="" id="">
            <option value="">EN</option>
          </select>
        </a>

        {/* three components */}
        <a href="">
          <div>
            <p>Hello, sign in</p>
            <span>Account & Lists</span>
          </div>
        </a>
        {/* orders */}
        <a href="">
          <p>returns</p>
          <span>& Orders</span>
        </a>
        {/* cart */}
        <a href="" className={classes.cart}>
          <LuShoppingCart size={35} />
          <span>0</span>
        </a>
      </section>
      <LowerHeader />
    </>
  );
}

export default Header
