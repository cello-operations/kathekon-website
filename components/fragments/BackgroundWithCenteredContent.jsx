import React from "react";
import tw from "twin.macro";
import Cookies from "universal-cookie";
import styled from "styled-components";
import Link from 'next/link';
import { css } from "styled-components/macro"; //eslint-disable-line

import Header, { NavLink, NavLinks, PrimaryLink as PrimaryLinkBase, LogoLink, NavToggle, DesktopNavLinks } from "../header/LightHeader.jsx";

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
  ${tw`text-3xl text-center sm:text-4xl lg:text-5xl xl:text-5xl font-black text-gray-100 leading-snug -mt-24 sm:mt-0`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const PrimaryAction = tw.button`px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-gray-100 font-bold shadow transition duration-300 bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:outline-none focus:shadow-outline`;

const BackgroundAsImageWithCenteredContent = ({
  backgroundImage = "https://res.cloudinary.com/tolulope-od/image/upload/v1601250870/aaron-burden-NXt5PrOb_7U-unsplash_uix1mv.jpg",
  requestedPathName,
                                              }) => {
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

  const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover h-screen min-h-144`}
  background-image: url(${backgroundImage});
`;

  const cookies = new Cookies();
  return (
    <Container>
      <OpacityOverlay />
      <HeroContainer>
        <div style={{
          display: requestedPathName === 'Home' ? '': 'none'
        }}>
          <StyledHeader logoUrl={"https://res.cloudinary.com/tolulope-od/image/upload/v1605094682/Kathekon-redesign-13_xjg32j.png"} transparent={true} />
        </div>
        <Content>
          <Heading>
            Transforming society through evidence-driven investments in education, social welfare, and civil society
              {/*<br />*/}
              {/*Looks like you are lost*/}
          </Heading>
          {/* <PrimaryAction onClick={() => {
            return {}
          }}>
            <Link href={"/"}>
              Back Home
            </Link>
          </PrimaryAction> */}
        </Content>
      </HeroContainer>
    </Container>
  );
};

export default BackgroundAsImageWithCenteredContent;
