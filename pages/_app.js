import * as React from 'react';
import Head from 'next/head';
import tw from "twin.macro";
import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
import Footer from '../components/fragments/Footer.jsx'
import Header from "../components/header/LightHeader.jsx";
import { Container } from "../components/misc/Layouts.jsx"
import { AuthStateProvider } from '../context/AuthContext';
import useAuth from '../hooks/useAuth';
import 'react-toastify/dist/ReactToastify.css';

import '../styles/tailwind.css';

const AppHeader = styled(Header)`
  font-family: Raleway, sans-serif;
  ${tw`pt-2 max-w-none w-9/12`}
`;

const App = (props) => {
  const { Component, pageProps } = props;
  useAuth();

  const [faivconURL, setFaviconURL] = React.useState('favicon.png');
  const [displayHeader, setDisplayHeader] = React.useState(true);
  React.useEffect(() => {
    setDisplayHeader(pagesWithoutHeader.includes(props.requestedPathName))
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      // dark mode
      setFaviconURL('favicon.png');
    } else {
      // light mode
      setFaviconURL('Kathekon-fav-dark-15.png');
    }

  }, []);

  const pagesWithoutHeader = ['Home', '/sign-up', '/login'];

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
        <meta name="twitter:title" content="Kathēkon: Transforming society through investments in education, social welfare, and civil society" />
        <meta name="twitter:description" content="Kathekon is a non-governmental organization that seeks to transform society through investments in education, social welfare, and civil society" />
        <meta name="twitter:image:src" content="https://res.cloudinary.com/tolulope-od/image/upload/v1605094663/Kathekon-redesign-13-13_e9qpnx.png" />
        <link rel="icon" sizes="32x32" href="https://res.cloudinary.com/tolulope-od/image/upload/v1605094663/Kathekon-redesign-13-13_e9qpnx.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="https://res.cloudinary.com/tolulope-od/image/upload/v1605094663/Kathekon-redesign-13-13_e9qpnx.png" />
        <link rel="apple-touch-icon" sizes="167x167" href="https://res.cloudinary.com/tolulope-od/image/upload/v1605094663/Kathekon-redesign-13-13_e9qpnx.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="https://res.cloudinary.com/tolulope-od/image/upload/v1605094663/Kathekon-redesign-13-13_e9qpnx.png" />
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
        <meta name="twitter:site" content="@Kathekon_" />
        <meta name="twitter:creator" content="@Kathekon_" />
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />

        <title>Kathēkon - Transforming society through evidence-driven investments</title>
      </Head>
        {/* <GlobalStyle /> */}
        <div
          style={{
            display: 'none',
            ...(!displayHeader ? { display: 'block' } : { }),
          }}
        >
          <Container>
            <AppHeader transparent={false} logoUrl={'https://res.cloudinary.com/tolulope-od/image/upload/v1605094663/Kathekon-redesign-13-13_e9qpnx.png'} />
          </Container>
        </div>
        <Component {...pageProps} {...props} />
        <Footer />
        <ToastContainer style={{ fontFamily: 'GT Sectra Regular' }} />
    </>
  );
}

function Wrapper(props) { return (<AuthStateProvider><App {...props}/></AuthStateProvider>) };

Wrapper.getInitialProps = (ctx) => {
  const context = ctx?.ctx || ctx;
  const requestedPathName = context?.req?.url;
  return { requestedPathName: requestedPathName === "/" ? "Home" : requestedPathName };
}

export default Wrapper;
