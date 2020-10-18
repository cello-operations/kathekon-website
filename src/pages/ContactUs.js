import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustrationFullForm.js";
import { NavLink, NavLinks, PrimaryLink } from 'components/headers/light';

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
      <Link to="/blog" component={(props) => <StyledLink {...props}>Blog</StyledLink>} />
      <Link to="/" component={(props) => <StyledLink {...props}>Grants</StyledLink>} />
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
    <>
      <Helmet>
        <title>Kathēkon - Contact Us At Kathekon</title>
        <meta name="description" content="Contact Kathekon: Get in touch with Kathēkon to learn more about scholarship, volunteering and how we can create valuable partnerships" />
        <meta name="keywords" content="contact us at kathekon kathēkon ulesson khan academy kathēkon scholarships transforming nigeria kathekon education civil society social welfare investment africa" />
      </Helmet>
      <AnimationRevealPage>
        <Header links={navLinks} />
        <ContactUsForm />
        <Footer />
      </AnimationRevealPage>
    </>
  );
};
