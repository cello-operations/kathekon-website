import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "../misc/Headings.jsx";
import { motion } from "framer-motion";
import { PrimaryButton as PrimaryButtonBase } from "../misc/Buttons.jsx";
import TeamIllustrationSrc from "../../public/images/team-illustration-2.svg";
import { ReactComponent as SvgDotPattern } from "../../public/images/dot-pattern.svg"
import { ReactComponent as CheckboxIcon } from "feather-icons/dist/icons/check-circle.svg";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24 items-center`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-6/12 flex-shrink-0 relative`;
const TextColumn = styled(Column)((props) => [
  tw`md:w-6/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const Image = styled.img((props) => [
  props.imageRounded && tw`rounded`,
  props.imageBorder && tw`border`,
  props.imageShadow && tw`shadow`,
]);

const DecoratorBlob = styled(SvgDotPattern)((props) => [
  tw`w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-primary-500 -z-10`,
]);

const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100 font-sans`;

const PrimaryButton = styled(PrimaryButtonBase)(props => [
  tw`mt-8 md:mt-8 text-sm inline-block mx-auto md:mx-0`,
  props.buttonRounded && tw`rounded-full`,
]);
const FeatureList = tw.ul`mt-12 leading-loose`;
const Feature = tw.li`flex items-center`;
const FeatureIcon = tw(CheckboxIcon)`w-4 h-4 text-primary-500`;
const FeatureText = tw.p`ml-2 font-medium text-gray-700 font-sans`;
const MotionDiv = motion.div;

const TwoColFeatureSection = ({
  subheading = "Our Expertise",
  heading = (
    <>
      Designed & Developed by <span tw="text-primary-500">Professionals.</span>
    </>
  ),
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  primaryButtonText = "Learn More",
  primaryButtonUrl = "/our-work",
  imageSrc = "https://res.cloudinary.com/tolulope-od/image/upload/v1601139589/santi-vedri-O5EMzfdxedg-unsplash_forq9q.jpg",
  buttonRounded = true,
  imageRounded = true,
  imageBorder = false,
  imageShadow = false,
  imageCss = null,
  imageDecoratorBlob = false,
  imageDecoratorBlobCss = null,
  textOnLeft = true,
  hasList = false, features = ["", "", ""],
  imageCredits = null,
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

  return (
    <Container>
      <TwoColumn>
        <ImageColumn>
          <Image css={imageCss} src={imageSrc} imageBorder={imageBorder} imageShadow={imageShadow} imageRounded={imageRounded}/>
          {imageDecoratorBlob && <DecoratorBlob css={imageDecoratorBlobCss} />}
          {imageCredits && (
            <>
              {imageCredits}
            </>
          )}
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            <Subheading>{subheading}</Subheading>
            <MotionDiv whileHover={{
              scale: 1.15,
              transition: { duration: 1 },
            }} whileTap={{ scale: 0.9 }}>
              <Heading>{heading}</Heading>
            </MotionDiv>
            <MotionDiv whileHover={{
              scale: 1.15,
              transition: { duration: 1 },
            }} whileTap={{ scale: 0.9 }}>
              {
                hasList
                  ? (
                    <FeatureList>
                      {features.map((feature, index) => (
                        <Feature key={index}>
                          <FeatureIcon />
                          <FeatureText>{feature}</FeatureText>
                        </Feature>
                      ))}
                    </FeatureList>
                  ) : (
                    <Description>{description}</Description>
                  )
              }
            </MotionDiv>
            <PrimaryButton buttonRounded={buttonRounded} as="a" href={primaryButtonUrl}>
              {primaryButtonText}
            </PrimaryButton>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};

export default TwoColFeatureSection;