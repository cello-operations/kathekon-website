import * as React from 'react';
import tw from 'twin.macro';
import AnimationRevealPage from '../../helpers/AnimationRevealPage.jsx';
import BackgroundWithCenteredContent from '../fragments/BackgroundWithCenteredContent.jsx';
import TwoColFeatureSection from '../fragments/TwoColFeatureSection.jsx';
import CoreValues from '../fragments/TwoColWithImageSlider.jsx';
import GrantsSection from '../fragments/GrantsSection.jsx';
import FeaturedBlogsSection from '../fragments/FeaturedBlogsSection.jsx';
import GetStarted from '../cta/GetStarted.jsx';

import { cards, fundingCategories } from '../../utils/grantsInformation';

const Subheading = tw.span`uppercase tracking-wider text-sm`;
const Title = tw.div`text-secondary-700`;

const Landing = (props) => {
  return (
    <div>
      <AnimationRevealPage>
        {/* <h1 className="title" style={{ display: 'none' }}>kathekon</h1> */}
        <BackgroundWithCenteredContent
          requestedPathName={props.requestedPathName}
          backgroundImage={"https://res.cloudinary.com/tolulope-od/image/upload/v1603023426/agence-olloweb-Z2ImfOCafFk-unsplash_asukce.jpg"}
        />
        <TwoColFeatureSection
          subheading={(
            <Subheading>
              Who are we?
            </Subheading>
          )}
          heading={<Title>We are <span tw="text-primary-500">Kathēkon.</span></Title>}
          description={"Dedicated to Rebuiilding Societies through strategic investments in the social impact space"}
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
      <GrantsSection
        subheading={"Grants"}
        heading ={<Title>We grant <span tw="text-primary-500">Funding.</span></Title>}
        description={"What do we fund?"}
        cta={"Apply Here"}
        posts={fundingCategories}
      />
      <FeaturedBlogsSection
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