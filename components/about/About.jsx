import React from "react";
import Head from 'next/head';
import Link from 'next/link';
import tw from "twin.macro";
import AnimationRevealPage from "../../helpers/AnimationRevealPage.jsx";
import MainFeature1 from "../fragments/TwoColFeatureSection.jsx";
import Features from "../fragments/ThreeColFeatures.jsx";
import TeamCardGrid from "../fragments/TeamCardGrid.jsx";
import { PageNavLinks } from '../header/NavLinks.jsx';

const Subheading = tw.span`uppercase tracking-wider text-sm`;
const AboutUs = () => {
  return (
    <>
      <Head>
        <title>Kathēkon - About Kathekon</title>
        <meta name="description" content="About Kathekon: Transforming society through evidence-driven investments in education, social welfare, and civil society" />
        <meta name="keywords" content="about kathēkon scholarships transforming nigeria kathekon education civil society social welfare investment africa" />
      </Head>
      <AnimationRevealPage>
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
            imageSrc: '/images/support-icon.svg',
            title: "Select Area",
            description: "We will pick an area of need",
          },
          {
            imageSrc: '/images/reliable-icon.svg',
            title: "Pivots",
            description: "Willingness to redirect capital when required -- to a new region where current projects can succeed, or to support an entirely different area of need.",
          },
          {
            imageSrc: '/images/shield-icon.svg',
            title: "Goal Setting",
            description: "We shall set long-term goals for work in that area",
          },
          {
            imageSrc: '/images/simple-icon.svg',
            title: "Long-Term Solutions",
            description: "We shall set intermediate (biannual or annual) goals expressed as hypotheses about the impacts of our work",
          },
        ]}
        linkText=""
      />
      <TeamCardGrid 
        subheading={<Subheading>Our Team</Subheading>}
      />
    </AnimationRevealPage>
    </>
  );
};

export default AboutUs;
