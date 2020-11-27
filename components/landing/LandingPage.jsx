import * as React from 'react';
import tw from 'twin.macro';
import AnimationRevealPage from '../../helpers/AnimationRevealPage.jsx';
import BackgroundWithCenteredContent from '../fragments/BackgroundWithCenteredContent.jsx';
import TwoColFeatureSection from '../fragments/TwoColFeatureSection.jsx';
import CoreValues from '../fragments/TwoColWithImageSlider.jsx';
import GrantsSection from '../fragments/GrantsSection.jsx';
import FeaturedBlogsSection from '../fragments/FeaturedBlogsSection.jsx';
import GetStarted from '../cta/GetStarted.jsx';

import { fundingCategories } from '../../utils/grantsInformation';

const Subheading = tw.span`uppercase tracking-wider text-sm`;
const Title = tw.div`text-secondary-700`;

const Landing = (props) => {
  return (
    <div>
      <AnimationRevealPage>
        <BackgroundWithCenteredContent
          requestedPathName={props.requestedPathName}
          backgroundImage={"https://res.cloudinary.com/tolulope-od/image/upload/v1601250870/aaron-burden-NXt5PrOb_7U-unsplash_uix1mv.jpg"}
        />
        <TwoColFeatureSection
          subheading={(
            <Subheading />
          )}
          heading={<Title>We are <span tw="text-primary-500">Kathēkon.</span></Title>}
          description={"Dedicated to rebuilding society through strategic investments in the social impact space."}
          buttonRounded={false}
          primaryButtonText="About Us"
          imageSrc="https://res.cloudinary.com/tolulope-od/image/upload/v1601139589/santi-vedri-O5EMzfdxedg-unsplash_forq9q.jpg"
          textOnLeft={false}
          imageCredits={(
            <span style={{ color: '#333', fontSize: '10px', fontWeight: 100 }}>
              Photo by {' '}
              <a style={{ color: '#34a4dd' }} href="https://unsplash.com/@oviidaniel?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
                Ovinuchi Ejiohuo
              </a> on <a href="https://unsplash.com/s/photos/nigeria-society?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
                Unsplash
              </a>
            </span>
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
            description: "To invest in the social impact space using rigorous evidence-driven processes that are improved or discarded as new information becomes available.",
          },
        }}
        testimonials={[
          {
            id: 0,
            imageSrc:
              "https://res.cloudinary.com/tolulope-od/image/upload/v1599943083/nathan-dumlao-VJHb4QPBgV4-unsplash_zuahht.jpg",
            profileImageSrc:
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
            quote:
              "The impediment to action advances action.",
            customerName: "Marcus Aurelius",
            customerTitle: "",
            hasQuote: true,
            heading: "Our Vision",
            description: "To transform society through evidence-driven investments in education, social welfare, and civil society.",
          },
          {
            id: 1,
            imageSrc:
              "https://res.cloudinary.com/tolulope-od/image/upload/v1599957294/bernard-hermant-z9AOxTYQBy4-unsplash_awrrpy.jpg",
            profileImageSrc:
              "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80",
              quote:
              "The impediment to action advances action.",
          
            customerName: "Marcus Aurelius",
            customerTitle: "",
            hasQuote: true,
            heading: "Our Mission",
            description: "To build a community through investments in the social impact space with the aim of supporting productive programs",
          },
        ]}
        textOnLeft={true}
      />
      <GrantsSection
        subheading={""}
        heading ={<Title>What do we <span tw="text-primary-900">Fund?</span></Title>}
        description={""}
        cta={"Apply Here"}
        posts={fundingCategories}
      />
      <FeaturedBlogsSection
        cardLinkText={"Read Article"}
        subheading={""}
        hasDescription={true}
        description={"Our amazing team loves to write articles to share what the atmosphere at the organization feels and also to share insights on our grant application processes."}
        linkText={"View more articles"}
        headingHtmlComponent={
          (
            <Title>
              Our <span tw="text-primary-500">Blog</span>
            </Title>
          )
        }
        cards={props.blogPosts}
      />
      <GetStarted
        heading={"We are open to partnerships and collaborations "}
        primaryLinkText={"View More"}
        subheading={""}
      />
      </AnimationRevealPage>
    </div>
  );
}

export default Landing;
