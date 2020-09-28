import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { css } from "styled-components/macro"; //eslint-disable-line

import Header, { NavLink, NavLinks, PrimaryLink as PrimaryLinkBase, LogoLink, NavToggle, DesktopNavLinks } from "../headers/light.js";

const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none w-9/12`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;

const PrimaryLink = PrimaryLinkBase
const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover h-screen min-h-144`}
  background-image: url("https://res.cloudinary.com/tolulope-od/image/upload/v1601250870/aaron-burden-NXt5PrOb_7U-unsplash_uix1mv.jpg");
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-black opacity-75`;

const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col`;
const Content = tw.div`px-4 flex flex-1 flex-col justify-center items-center`;

const Heading = styled.h1`
  ${tw`text-3xl text-center sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-snug -mt-24 sm:mt-0`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const PrimaryAction = tw.button`px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-gray-100 font-bold shadow transition duration-300 bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:outline-none focus:shadow-outline`;

export default () => {
  const buttonRounded = false;
  const buttonRoundedCss = buttonRounded && tw`rounded-full`;
  const StyledLink = React.forwardRef((props, ref) => (
    <NavLink {...props} ref={ref}>{props.children}</NavLink>
  ))
  const navLinks = [
    <NavLinks key={1}>
      <Link to="/about" component={(props) => <StyledLink {...props}>About</StyledLink>} />
      <Link to="/our-work" component={(props) => <StyledLink {...props}>Our Work</StyledLink>} />
      <Link to="/" component={(props) => <StyledLink {...props}>Partnerships</StyledLink>} />
      <Link to="/" component={(props) => <StyledLink {...props}>Blog</StyledLink>} />
      <Link to="/" component={(props) => <StyledLink {...props}>Scholarships</StyledLink>} />
    </NavLinks>,
    <NavLinks key={2}>
      <NavLink href="/#" tw="lg:ml-12!">
        Login
      </NavLink>
      <PrimaryLink css={buttonRoundedCss} href="/#">
        Sign Up
      </PrimaryLink>
    </NavLinks>,
  ];

  return (
    <Container>
      <OpacityOverlay />
      <HeroContainer>
        <StyledHeader logoUrl={"https://res.cloudinary.com/tolulope-od/image/upload/v1597492351/Kathekon-redesign-13_cxjtts.png"} links={navLinks} />
        <Content>
          <Heading>
              Oops!
              <br />
              Looks like you are lost
          </Heading>
          <PrimaryAction>
            <Link to={"/"}>
              Back Home
            </Link>
          </PrimaryAction>
        </Content>
      </HeroContainer>
    </Container>
  );
};
