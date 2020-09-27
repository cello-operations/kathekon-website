import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
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
import ReliableIconImage from "images/reliable-icon.svg";
import { NavLink, NavLinks, PrimaryLink } from 'components/headers/light';

const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {
  const buttonRounded = true;
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
      <MainFeature1
        subheading={<Subheading>About Kathēkon</Subheading>}
        heading="Transforming society through evidence-driven investments in education, social welfare, and civil society"
        buttonRounded={false}
        description={''}
        primaryButtonUrl={"/our-workx"}
        primaryButtonText="See Our Work"
        imageCredits={(
          <span style={{ color: '#333', fontSize: '10px', fontWeight: 100 }}>Photo by <a style={{ color: '#34a4dd' }} href="https://unsplash.com/@nesabymakers?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">NESA by Makers</a> on <a style={{ color: '#34a4dd' }} href="https://unsplash.com/s/photos/nigeria-team?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
        )}
        imageSrc="https://res.cloudinary.com/tolulope-od/image/upload/v1601229176/nesa-by-makers-kwzWjTnDPLk-unsplash_cbhdgl.jpg"
      />
      <MainFeature1
        subheading={<Subheading>Our Goals</Subheading>}
        heading="We aim to transform society while achieving these goals"
        buttonRounded={false}
        primaryButtonText="Partner With Us"
        imageSrc="https://res.cloudinary.com/tolulope-od/image/upload/v1601229705/ovinuchi-ejiohuo-OxesnxkySD0-unsplash_lvswaz.jpg"
        textOnLeft={false}
        hasList={true}
        features={[
          "Bridge the quality gap between public and private pre-college schools.",
          "Provide a safety net for low-income families.",
          "Re-brand and re-energize civil societies.",
        ]}
        imageCredits={(
          <span style={{ color: '#333', fontSize: '10px', fontWeight: 100 }}>Photo by <a style={{ color: '#34a4dd' }} href="https://unsplash.com/@oviidaniel?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Ovinuchi Ejiohuo</a> on <a href="https://unsplash.com/s/photos/nigeria-society?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
        )}
      />
      <Features
        subheading={<Subheading>General Framework</Subheading>}
        heading="An empirical approach."
        description="​If results fall too far below the anticipated outcomes, we shall redirect capital: to a new region where the project will likely be more successful, or to support an entirely different area of need"
        cards={[
          {
            imageSrc: SupportIconImage,
            title: "Select Area",
            description: "We will pick an area of need",
          },
          {
            imageSrc: ReliableIconImage,
            title: "Pivots",
            description: "Willingness to redirect capital when required -- to a new region where current projects can succeed, or to support an entirely different area of need.",
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
