import * as React from 'react';
import Head from 'next/head';
import styled from "styled-components";
import tw from "twin.macro";
import Link from 'next/link';
import { ToastContainer } from 'react-toastify';
import { createGlobalStyle } from "styled-components";
import Footer from '../components/fragments/Footer.jsx'
import Header, { NavLink, NavLinks, PrimaryLink, LogoLink, NavToggle, DesktopNavLinks } from "../components/header/LightHeader.jsx";
import { Container, ContentWithPaddingXl } from "../components/misc/Layouts.jsx"
import { AuthStateProvider } from '../context/AuthContext';
import useAuth from '../hooks/useAuth';
import '../styles/tailwind.css';
import 'react-toastify/dist/ReactToastify.css';


const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none w-9/12`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;


const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'GT Sectra Bold';
    font-style: normal;
    font-weight: normal;
    src: local('GT Sectra Bold'), url('/static/fonts/GT-Sectra-Bold.woff2') format('woff2');
  }
  @font-face {
    font-family: 'GT Sectra Regular';
    font-style: normal;
    font-weight: normal;
    src: local('GT Sectra Regular'), url('/static/fonts/GT-Sectra-Regular.woff2') format('woff2');
  }

  @font-face {
    font-family: 'GT Sectra Medium';
    font-style: normal;
    font-weight: normal;
    src: local('GT Sectra Medium'), url('/static/fonts/GT-Sectra-Display-Regular.woff2') format('woff2');
  }
`;


const App = (props) => {
  const { Component, pageProps } = props;
  const buttonRounded = false;
  const buttonRoundedCss = buttonRounded && tw`rounded-full`;
  function NavItemLink({ href, name}) {
    return (
      <Link href={href}>
        <NavLink style={{ cursor: 'pointer' }}>{name}</NavLink>
      </Link>
    )
  }

  function NavItemLinkSolo({ href, name }) {
    return (
      <Link href={href}>
        <NavLink tw="lg:ml-12!" style={{ cursor: 'pointer' }}>{name}</NavLink>
      </Link>
    )
  }

  function PrimaryLinkItem({ href, name }) {
    return (
      <Link href={href}>
        <PrimaryLink css={buttonRoundedCss} style={{ cursor: 'pointer' }}>{name}</PrimaryLink>
      </Link>
    );
  }

  let RouterAlias = {
    route: '/',
  };
  
  const navLinks = [
    <NavLinks key={1}>
      <NavItemLink passHref name="About" href="/about"/>
      <NavItemLink passHref name="Our Work" href="/our-work"/>
      <NavItemLink passHref name="Blog" href="/blog"/>
      <NavItemLink passHref name="Grants" href="/grants"/>
    </NavLinks>,
    <NavLinks key={2}>
      <NavItemLinkSolo passHref name="Login" href="/login"/>
      
      <PrimaryLinkItem passHref name={"Sign Up"} href="/sign-up" />
    </NavLinks>
  ];

  useAuth();

  const [faivconURL, setFaviconURL] = React.useState('favicon.png');
  React.useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      // dark mode
      setFaviconURL('favicon.png');
    } else {
      // light mode
      setFaviconURL('Kathekon-fav-dark-15.png');
    }

  }, []);

  const pagesWithoutHeader = ['/', '/sign-up', '/login'];

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="shortcut icon" type="image/x-icon" href={`/${faivconURL}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,200;0,300;0,400;0,600;0,800;0,900;1,200;1,300&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,800&display=swap" rel="stylesheet" />
        <meta name="author" content="Tolulope Odueke" />

        <meta name="title" content="Kathekon - Transforming society through evidence-driven investments in education, social welfare, and civil society" />
        <meta property="og:image" content={`/${faivconURL}`} />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="twitter:card" content="photo" />
        <meta name="twitter:title" content="Kathekon: A Social Transoformation Catalyst" />
        <meta name="twitter:description" content="Kathekon is a non-governmental organization that seeks to transform society through investments in education, social welfare, and civil society"></meta>
        <meta name="twitter:image:src" content="/logo192.png" />
        <link rel="icon" sizes="32x32" href="/logo192.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/logo192.png" />
        <link rel="apple-touch-icon" sizes="167x167" href="/logo192.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo192.png" />
        <link rel="icon" sizes="192x192" href="/logo192.png" />
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Kathekon seeks to transform society through investments in education, social welfare, and civil society" />
        <meta name="author" content="Kathekon by Tolulope Odueke" />
        <meta name="keywords" content="scholarships nigeria kathekon education, civil society, social welfare, investment, africa" />
        <meta name="og:title" property="og:title" content="Kathekon - Transforming society through evidence-driven investments in education, social welfare, and civil society"/>
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Kathekon" />
        <meta name="twitter:site" content="@Kathekon2" />
        <meta name="twitter:creator" content="@Kathekon2" />
        <link rel="apple-touch-icon" href="/Kathekon-fav-blue-15.png" />
        
        <title>Kathekon - Transforming society through evidence-driven investments</title>
      </Head>
        <GlobalStyle />
        <div
          style={{
            display: pagesWithoutHeader.includes(props.requestedPathName) ? 'none': ''
          }}
        >
          <Container>
            <Header transparent={false} logoUrl={'https://res.cloudinary.com/tolulope-od/image/upload/v1597492350/Kathekon-redesign-13-13_bsnael.png'} />
          </Container>
        </div>
        <Component {...pageProps} {...props} />
        {/* <AuthContext.Consumer>
          {(auth) => (
            <Component {...pageProps} {...auth} {...props} />
          )}
        </AuthContext.Consumer> */}
        <Footer />
        <ToastContainer style={{ fontFamily: 'GT Sectra Regular' }} />
    </>
  );
}

function Wrapper(props) { return (<AuthStateProvider><App {...props}/></AuthStateProvider>) };

Wrapper.getInitialProps = (ctx) => {
  const context = ctx?.ctx || ctx;
  const requestedPathName = context?.req?.url;
  return { requestedPathName };
}

export default Wrapper;