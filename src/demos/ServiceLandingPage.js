import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import SliderCard from "components/cards/ThreeColSlider.js";
import BackgroundAsImageWithCenteredContent from "components/hero/BackgroundAsImageWithCenteredContent";
import MainFeature1 from "components/features/TwoColWithButton";
import Grants from "components/blogs/ThreeColSimpleWithImageAndDashedBorder.js";
import Blog from "components/cards/PortfolioTwoCardsWithImage.js";
import CoreValues from "components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";
import GetStartedLight from "components/cta/GetStartedLight";
import { truncateText } from "helpers/truncateText";


import Hero from "components/hero/TwoColumnWithFeaturesAndTestimonial.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";

const Subheading = tw.span`uppercase tracking-wider text-sm`;
const Title = tw.div`text-secondary-700`;

export default () => {
  const fundingCategories = [
    {
      imageSrc:
        "https://res.cloudinary.com/tolulope-od/image/upload/v1601139160/jaredd-craig-HH4WBGNyltc-unsplash_vgzblr.jpg",
      // author: "Adam Wathan",
      // category: "Education",
      title: "Education",
      description: "Students in Nigeria rarely have basic resources for proper learning, and many who graduate from the best public schools find themselves at a tremendous disadvantage against students graduating from middling private schools. We have intend to intervene in this area.",
      url: "https://reddit.com",
    },
    {
      imageSrc:
        "https://res.cloudinary.com/tolulope-od/image/upload/v1601224310/babatunde-olajide-q4ZBGVzJskE-unsplash_aie8pm.jpg",
      // author: "Owais Khan",
      // category: "Civil Society",
      title: "Civil Society",
      description: "We recognize the important work of the civil society in a country like Nigeria and often times those in the civil society find themselves working in the most challenging environments either as a result of government stifling the civic space or the limited number of funds available.",
      url: "https://timerse.com",
    },
    {
      imageSrc:
        "https://res.cloudinary.com/tolulope-od/image/upload/v1598367140/trevor-cole-CWcAsKuhwy0-unsplash_vdmd17.jpg",
      // author: "Steve Schoger",
      category: "July 10",
      title: "July 10 Scholarships",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      url: "https://timerse.com",
    },
  ];
  const cards =  [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1563461660947-507ef49e9c47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80",
      company: "Ifedolapo J.",
      type: "Learning",
      title: truncateText("Creating meaningful grants to assist students: A guide to something", 90),
      description: truncateText("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam.", 150),
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1573165231977-3f0e27806045?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80",
      company: "Socrates M.",
      type: "Research",
      title: truncateText("Conducting investigative researches in the Nigerian Ed-Tech space", 90),
      description: truncateText("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam.", 150),
    },
  ];
  return (
    <AnimationRevealPage>
      <BackgroundAsImageWithCenteredContent
        backgroundImage={"https://res.cloudinary.com/tolulope-od/image/upload/v1603023426/agence-olloweb-Z2ImfOCafFk-unsplash_asukce.jpg"}
      />
      <MainFeature1
        subheading={<Subheading>Who are we?</Subheading>}
        heading={<Title>We are <span tw="text-primary-500">Kathēkon.</span></Title>}
        description={"Very brief text explaining what we do here at kathekon dont get it twisted"}
        buttonRounded={false}
        primaryButtonText="About Us"
        imageSrc="https://res.cloudinary.com/tolulope-od/image/upload/v1601139589/santi-vedri-O5EMzfdxedg-unsplash_forq9q.jpg"
        textOnLeft={false}
        imageCredits={(
          <span style={{ color: '#333', fontSize: '10px', fontWeight: 100 }}>Photo by <a style={{ color: '#34a4dd' }} href="https://unsplash.com/@oviidaniel?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Ovinuchi Ejiohuo</a> on <a href="https://unsplash.com/s/photos/nigeria-society?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
        )}
      />
      <CoreValues
        subheading="Core Values"
        headerMap={{
          0: {
            heading: "Our Vision",
            description: "To transform society through evidence-driven investments in education, social welfare, and civil society.",
          },
          1: {
            heading: "Our Mission",
            description: "To operate like a startup in the social impact space, thus focusing only on areas where we can maximize value.",
          },
        }}
        testimonials={[
          {
            id: 0,
            imageSrc:
              "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80",
            profileImageSrc:
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
            quote:
              "The impediment to action advances action.",
            customerName: "Marcus Aurelius",
            customerTitle: "",
            heading: "Our Vision",
            description: "To transform society through evidence-driven investments in education, social welfare, and civil society.",
          },
          {
            id: 1,
            imageSrc:
              "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80",
            profileImageSrc:
              "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80",
            quote:
              "Something profound goes here as a quote from a famous person.",
            customerName: "DJ Cuppy",
            customerTitle: "",
            heading: "Our Mission",
            description: "To operate like a startup in the social impact space, thus focusing only on areas where we can maximize value.",
          },
        ]}
        textOnLeft={true}
      />
      <Grants
        subheading={"Grants"}
        heading ={<Title>We grant <span tw="text-primary-500">Funding.</span></Title>}
        description={"What do we fund?"}
        cta={"Apply Here"}
        posts={fundingCategories}
      />
      <Blog
        cardLinkText={"Read Article"}
        subheading={"Our Blog"}
        hasDescription={true}
        description={"Our amazing team loves to write articles to share what the atmosphere at the organization feels and also to share insights on our grant application processes."}
        linkText={"View more Articles"}
        headingHtmlComponent={
          (
            <Title>
              We write some very <span tw="text-primary-500">amazing articles.</span>
            </Title>
          )
        }
        cards={cards}
      />
      <GetStartedLight
        heading={"We partner with organisations to bring the best grants "}
        primaryLinkText={"View More"}
        subheading={"We love collaborations"}
      />
      <Footer />
    </AnimationRevealPage>
  );
}
