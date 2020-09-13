import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import { Link } from 'react-router-dom';
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import MainFeature1 from "components/features/TwoColWithButton.js";
// import MainFeature2 from "components/features/TwoColSingleFeatureWithStats.js";
// import MainFeature3 from "components/features/TwoColSingleFeatureWithStats2.js";
import Features from "components/features/ThreeColSimple.js";
// import Features from "components/features/ThreeColWithSideImage.js";
import TeamCardGrid from "components/cards/ProfileThreeColGrid.js";

import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomerLoveIconImage from "images/simple-icon.svg";
import {NavLink, NavLinks, PrimaryLink} from 'components/headers/light';

const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {
  const buttonRounded = true;
  const buttonRoundedCss = buttonRounded && tw`rounded-full`;

  const navLinks = [
    <NavLinks key={1}>
      <Link to={'/about'}>
        <NavLink>About</NavLink>
      </Link>
      <NavLink href="/#">Our Work</NavLink>
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
      <MainFeature1
        subheading={<Subheading>About Kathēkon</Subheading>}
        heading="We seek to transform society."
        buttonRounded={false}
        primaryButtonText="See Our Work"
        imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
      />
      <MainFeature1
        subheading={<Subheading>Our Goals</Subheading>}
        heading="We aim to transform society while achieving these goals"
        buttonRounded={false}
        primaryButtonText="Partner With Us"
        imageSrc="https://images.unsplash.com/3/doctype-hi-res.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=768&q=80"
        textOnLeft={false}
        hasList={true}
        features={[
          "Close the quality gap between public primary and secondary schools and their private counterparts.",
          "Provide a safety net for low-income families.",
          "Rebrand and re-energize civil societies.",
        ]}
      />
      <Features
        subheading={<Subheading>General Framework</Subheading>}
        heading="We shall follow these."
        description="​If results fall too far below the anticipated outcomes, we shall redirect capital: to a new region where the project will likely be more successful, or to support an entirely different area of need"
        cards={[
          {
            imageSrc: SupportIconImage,
            title: "Select Area",
            description: "We will pick an area of need",
          },
          {
            imageSrc: ShieldIconImage,
            title: "Goal Setting",
            description: "We shall set long-term goals for work in that area",
          },
          {
            imageSrc: CustomerLoveIconImage,
            title: "Long-Term Solutions",
            description: "We shall set intermediate (biannual or annual) goals expressed as hypotheses about the impacts of our work",
          },
        ]}
        linkText=""
      />
      <TeamCardGrid 
        subheading={<Subheading>Our Team</Subheading>}
      />
      <Footer />
    </AnimationRevealPage>
  );
};
