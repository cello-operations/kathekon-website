import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustrationFullForm.js";
import { NavLink, NavLinks, PrimaryLink } from 'components/headers/light';

const Address = tw.span`leading-relaxed`;
const AddressLine = tw.span`block`;
const Email = tw.span`text-sm mt-6 block text-gray-500`;
const Phone = tw.span`text-sm mt-0 block text-gray-500`;

export default () => {
  const buttonRounded = false;
  const buttonRoundedCss = buttonRounded && tw`rounded-full`;

  const navLinks = [
    <NavLinks key={1}>
      <NavLink href="/about">About</NavLink>
      <NavLink href="/our-work">Our Work</NavLink>
      <NavLink href="/#">Partnerships</NavLink>
      <NavLink href="/#">Blog</NavLink>
      <NavLink href="/#">Scholarships</NavLink>
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
    <AnimationRevealPage>
      <Header links={navLinks} />
      <ContactUsForm />
      <Footer />
    </AnimationRevealPage>
  );
};
