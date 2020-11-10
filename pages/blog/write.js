import * as React from 'react';
import dynamic from 'next/dynamic';
import Cookies from "universal-cookie";
import Router from 'next/router';
import jwtDecode from 'jwt-decode';

const NewBlogPost = dynamic(() => import('../../components/blog/NewBlogPost.jsx'), { ssr: false });

const NewBlogPostPage = () => (
  <NewBlogPost />
);

NewBlogPostPage.getInitialProps = async (ctx) => {
  // get context from the server
  const context = ctx?.ctx || ctx;
  // extract the cookie from the request header
  const cookie = new Cookies(context?.req?.headers?.cookie);
  const requestedPathName = context?.req?.url;
  const kathekonToken = cookie.get("kathekonToken");

  if (kathekonToken) {
    const currentTime = Date.now() / 1000;
    const userInfo = jwtDecode(kathekonToken);
    // if (userInfo && userInfo.exp < currentTime) {
    //   if (!context.res) {
    //     // if its client side and logged in
    //     Router.push('/');
    //     return { kathekonToken }
    //   }
    //   // if redered on the server and logged in, redirect user
    //   context.res.writeHead(302, { Location: '/' });
    //   return context.res.end();
    // }

    if (userInfo && userInfo.userType !== 'ADMIN' || userInfo && userInfo.userType !== 'SUPER_ADMIN') {
      if (!context.res) {
        // if its client side and logged in
        Router.push('/');
        return { kathekonToken }
      }

      context.res.writeHead(302, { Location: '/' });
      return context.res.end();
    }
  }

  if (!kathekonToken) {
    context.res.writeHead(302, { Location: '/' });
    return context.res.end();
  }
  // TODO: Figure out a way to determine the path the user tried to access before being redirected
  return { kathekonToken, requestedPathName };
};
export default NewBlogPostPage;
