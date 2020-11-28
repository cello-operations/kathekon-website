import React from "react";
import Head from 'next/head';
import tw from "twin.macro";
import AnimationRevealPage from "../../helpers/AnimationRevealPage.jsx";
import MainFeature1 from "../fragments/TwoColFeatureSection.jsx";
import Features from "../fragments/ThreeColFeatures.jsx";
import TeamCardGrid from "../fragments/TeamCardGrid.jsx";

const Subheading = tw.span`uppercase tracking-wider text-sm`;
const Description = tw.p`mt-4 text-center md:text-left md:text-base lg:text-lg font-medium leading-relaxed text-secondary-900 font-sans`;

const AboutUs = () => {
  const hostURL =
    process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF !== 'master'
      ? process.env.NEXT_PUBLIC_DEV_HOST_URL
      : process.env.NEXT_PUBLIC_HOST_URL
  return (
    <>
      <Head>
        <title>Kathēkon - About Kathekon</title>
        <meta name="description" content="Kathekon provides grants to organisations seeking to transform society through evidence-driven investments in education, social welfare, and civil society." />
        <meta name="keywords" content="about kathēkon scholarships transforming nigeria kathekon education civil society social welfare investment africa" />
        <meta property="og:url" name="og:url"           content={`${hostURL}/about`} />
        <meta property="og:type"  name="og:type"        content="website" />
        <meta name="og:title" property="og:title"         content="Kathēkon - About Kathekon" />
        <meta property="og:description"  name="og:description" content="Kathekon provides grants to organisations seeking to transform society through evidence-driven investments in education, social welfare, and civil society." />
        <meta property="og:image"  name="og:image"   content="https://res.cloudinary.com/tolulope-od/image/upload/f_auto,q_auto/v1605094663/Kathekon-redesign-13-13_e9qpnx.png" />
        <meta name="twitter:card" content="photo" />
        <meta name="twitter:title" content="Kathēkon - About Kathekon" />
        <meta name="twitter:description" content="Kathekon provides grants to organisations seeking to transform society through evidence-driven investments in education, social welfare, and civil society." />
        <meta name="twitter:image:src" content="https://res.cloudinary.com/tolulope-od/image/upload/f_auto,q_auto/v1605094663/Kathekon-redesign-13-13_e9qpnx.png" />
      </Head>
      <AnimationRevealPage>
      <MainFeature1
        subheading={<Subheading>About Kathēkon</Subheading>}
        heading=""
        buttonRounded={false}
        description={'Kathekon provides grants to organisations seeking to transform society through evidence-driven investments in education, social welfare, and civil society. While Nigeria is a current focus, we seek to impact the world through Africa.'}
        primaryButtonUrl={"/our-workx"}
        primaryButtonText="See Our Work"
        imageCredits={(
          <span style={{ color: '#333', fontSize: '10px', fontWeight: 100 }}>Photo by <a style={{ color: '#34a4dd' }} href="https://unsplash.com/@nesabymakers?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">NESA by Makers</a> on <a style={{ color: '#34a4dd' }} href="https://unsplash.com/s/photos/nigeria-team?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
        )}
        imageSrc="https://res.cloudinary.com/tolulope-od/image/upload/f_auto,q_auto/v1601229176/nesa-by-makers-kwzWjTnDPLk-unsplash_cbhdgl.jpg"
      />
      <MainFeature1
        subheading={<Subheading>Our Goals</Subheading>}
        heading={(
          <Description>To undertake scalable development programs in our areas of focus until they yield systemic change.</Description>
        )}
        buttonRounded={false}
        primaryButtonText="Partner With Us"
        imageSrc="https://res.cloudinary.com/tolulope-od/image/upload/f_auto,q_auto/v1601229705/ovinuchi-ejiohuo-OxesnxkySD0-unsplash_lvswaz.jpg"
        textOnLeft={false}
        hasList={true}
        features={[
          "To improve the quality of education available to low-income families.",
          "To fund credible organizations and support underserved communities.",
          "To rebrand and reenergize civil society.",
        ]}
        imageCredits={(
          <span style={{ color: '#333', fontSize: '10px', fontWeight: 100 }}>Photo by <a style={{ color: '#34a4dd' }} href="https://unsplash.com/@oviidaniel?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Ovinuchi Ejiohuo</a> on <a href="https://unsplash.com/s/photos/nigeria-society?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
        )}
      />
      <Features
        subheading={<Subheading>General Framework</Subheading>}
        heading=""
        description="If results fall too far below the anticipated outcomes, we shall redirect capital to a new region where the project will probably be more successful, or to support an entirely different area of need."
        cards={[
          {
            imageSrc: '/images/support-icon.svg',
            title: "Select Area",
            description: "We pick an area of need",
          },
          {
            imageSrc: '/images/shield-icon.svg',
            title: "Goal Setting",
            description: "We set long-term goals for work in that area.",
          },
          {
            imageSrc: '/images/simple-icon.svg',
            title: "Long-Term Solutions",
            description: "Set intermediate goals expressed as hypotheses about the probable impacts of our work",
          },
          {
            imageSrc: '/images/reliable-icon.svg',
            title: "Pivots",
            description: "Willingness to redirect capital when required",
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
