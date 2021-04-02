import "tailwindcss/tailwind.css";
import React, {useState, useEffect, useContext, createContext} from "react";
import nookies from "nookies";
import firebaseClient from "../firebaseClient";
import firebase from "firebase/App";
import "firebase/auth";



  function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
  }

  export default MyApp