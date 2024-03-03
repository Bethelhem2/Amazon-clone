import React, { useState, useContext } from "react";
import classes from "./Auth.module.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../Utility/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import { Type } from "../../Utility/actiontype";
import  { GridLoader } from 'react-spinners'

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState({
    signIn: false,
    signUp: false,
  });

  
  const [{ user }, dispatch] = useContext(DataContext);
  const navigate = useNavigate()
  const authHandler = async (e) => {
    e.preventDefault();
    // console.log(e.target.name);
    if (e.target.name == "signin") {
      setLoading({...loading, signIn:true});

      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
        setLoading({ ...loading, signIn: false });
        navigate('/')
      })
      .catch((err) => {
        setError(err.message);
      setLoading({ ...loading, signIn: false });
      
      });
    } else {
      setLoading({...loading, signUp: true});
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
      setLoading({ ...loading, signup: false });
      navigate("/");
      })
      .catch((err) => {
        setError(err.message);
      setLoading({ ...loading, signup: false });
      });
    }
  };

  return (
    <section className={classes.login}>
      {/* {logo} */}
      <Link to={"/"}>
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG7.png"
          alt="amazon logo"
        />
      </Link>
      {/* {form} */}
      <div className={classes.login__container}>
        <h1>Sign In</h1>
        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
            />
          </div>
          <button
            type="submit"
            onClick={authHandler}
            name="signin"
            className={classes.login__signInButton}
          >
            {loading.signIn ? (
              <GridLoader color="#72BCB7" size={5}></GridLoader>
            ) : (
              "Sign In"
            )}
          </button>
        </form>
        {/* agreement */}
        <p>
          By signing in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        {/* create account btn */}
        <button
          type="submit"
          onClick={authHandler}
          name="signup"
          className={classes.login__registerButton}
        >
          {loading.signUp ? (
            <GridLoader color="#72BCB7" size={5}></GridLoader>
          ) : (
            "Create your Amazon Account"
          )}
        </button>
        {error && (
          <small style={{ paddingtop: "5px", color: "red" }}>{error}</small>
        )}
      </div>
    </section>
  );
}

export default Auth;
