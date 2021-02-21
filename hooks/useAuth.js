  
import { useEffect, useContext } from "react";
import jwtDecode from "jwt-decode";
import { generalHelpers } from "../helpers/generalHelpers";
import Router from "next/router";
import Cookies from 'universal-cookie';
import AuthContext from '../context/AuthContext';

const useAuth = (redirect) => {
  const currentTime = Date.now() / 1000;
  const cookie = new Cookies();
  const userToken = cookie.get('kathekonToken');

  const { state, dispatch } = useContext(AuthContext);

  const userDetails = userToken && jwtDecode(userToken);
  const user = {};

  useEffect(() => {
    if (generalHelpers.isEmpty(userDetails)) {
      dispatch({ type: "logout" })
      // redirect to login
      redirect && Router.replace('/login');
    }

    if (!generalHelpers.isEmpty(userDetails)) {
      // probably set it in localstorage here
      dispatch({ type: "authenticate", payload: { ...userDetails } })

      if (userDetails && userDetails.exp < currentTime || !userDetails) {
        dispatch({ type: "logout" });
        // redirect to login
        redirect && Router.replace('/login');
      }
    }
  }, [user.exp]);

  const isLoggedOut = userDetails && userDetails.exp < currentTime || !userDetails
  user.isAuthenticated = !isLoggedOut;
  user.user = userDetails;
  return user;
};

export default useAuth;
