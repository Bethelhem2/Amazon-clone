import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { SlLocationPin } from "react-icons/sl";
import { FaSearch } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import classes from './Header.module.css'
import LowerHeader from './LowerHeader'
import { DataContext } from '../DataProvider/DataProvider';

const Header = () => {
    const [{basket},dispatch]=useContext(DataContext)
    console.log(basket.length)
  return (
    <section className={classes.fixed}>
      <section className={classes.header__container}>
        <div className={classes.logo__container}>
          {/* logo */}
          <Link to="/">
            <img
              src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png"
              alt="amazon logo"
            />
          </Link>
          {/* delivery*/}
          <Link to="/payments">
            <div className={classes.delivery}>
              <span>
                <SlLocationPin />
              </span>
              <div>
                <p>Delivered to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </Link>
        </div>

        {/* search */}
        <div className={classes.search}>
          <select name="" id="">
            <option value="">All</option>
          </select>
          <input type="text" name="" id="" placeholder="Search Amazon" />
          <FaSearch size={25} />
        </div>

        <Link to="">
          <div className={classes.language}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp_aCxUas3NJb3nFW5OGvCtd1FjsIgIu3Uvk51NjzVmA&s" />
            <select name="" id="">
              <option value="">EN</option>
            </select>
          </div>
        </Link>

        {/* three components */}
        <Link to="/auth">
          <div>
            <p>Hello, sign in</p>
            <span>Account & Lists</span>
          </div>
        </Link>
        {/* orders */}
        <Link to="/orders">
          <p>returns</p>
          <span>& Orders</span>
        </Link>
        {/* cart */}
        <Link to="/cart" className={classes.cart}>
          <LuShoppingCart size={35} />
          <span>{basket.length}</span>
        </Link>
      </section>
      <LowerHeader />
    </section>
  );
}

export default Header
