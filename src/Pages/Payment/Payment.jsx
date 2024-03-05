import React, { useContext, useState } from "react";
import classes from "./Payment.module.css";
import Layout from "../../Components/Layout/Layout";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/Product/ProductCard";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from "../../Components/Currencyformat/Currencyformat";

function Payment() {
  const [{ user, basket }] = useContext(DataContext);

  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);

  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);

  const [cardError, setCardError] = useState(null);
  const stripe = useStripe();
  const elements = useElements();

  const handleChange = (e) => {
    console.log(e);
    e?.error?.message ? setCardError(e?.error?.message) : setCardError("");
  };
  return (
    <Layout>
      {/* {header} */}
      <div className={classes.Payment__header}>
        Checkout ({totalItem}) items{" "}
      </div>
      {/* {Payment method} */}
      <section className={classes.Payment}>
        {/* {address} */}
        <div className={classes.flex}>
          <h3>Delivery address</h3>
          <div>
            <div>{user?.email}</div>
            <div> 123 React Lane</div>
            <div>Addis Ababa, SARIS</div>
          </div>
        </div>
        <hr />
        {/* {product} */}
        <div className={classes.flex}>
          <h3>Review items and delivery</h3>
          <div>
            {basket?.map((item) => (
              <ProductCard product={item} flex={true} />
            ))}
          </div>
        </div>
        <hr />
        {/* {card form} */}
        <div className={classes.flex}>
          <h3>Payment methods</h3>
          <div className={classes.payment__card__container}>
            <div className={classes.payment__details}>
              <form onSubmit={handlePayment}>
                {/* { error } */}
                {cardError && (
                  <small style={{ color: "red" }}>{cardError}</small>
                )}
                {/* { card element } */}
                <CardElement onChange={handleChange} />
                {/* { price } */}
                <div className={classes.payment__price}>
                  <div>
                    <span style={{ display: "flex", gap:'10px' }}>
                      <p>Total Order | </p>
                      <CurrencyFormat amount={total} />{" "}
                    </span>
                  </div>
                  <button>Pay Now</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Payment;
