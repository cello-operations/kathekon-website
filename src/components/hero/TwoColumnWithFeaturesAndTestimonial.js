import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Link } from "react-router-dom";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header, { NavLinks, NavLink, PrimaryLink } from "components/headers/light.js";
import { SectionHeading } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { Container, ContentWithVerticalPadding } from "components/misc/Layouts.js";
import { ReactComponent as CheckboxIcon } from "feather-icons/dist/icons/check-circle.svg";
import { ReactComponent as QuotesLeftIconBase } from "images/quotes-l.svg"
import { ReactComponent as SvgDecoratorBlob1 } from "images/dot-pattern.svg";
import SlideShow from "../../helpers/Carousel";

const Row = tw.div`flex flex-col lg:flex-row justify-between items-center lg:pt-16 max-w-screen-2xl mx-auto sm:px-8`;
const Column = tw.div``;
const TextColumn = tw(Column)`mr-auto lg:mr-0 max-w-lg lg:max-w-xl xl:max-w-2xl`;
const Heading = tw(SectionHeading)`text-left text-primary-900 leading-snug xl:text-6xl`;
const Description = tw(SectionDescription)`mt-4 lg:text-base text-gray-900 max-w-lg font-sans`;
const PrimaryButton = tw(PrimaryButtonBase)`mt-8 inline-block w-56 tracking-wide text-center py-5`;
const ImageColumn = tw(Column)`ml-auto lg:mr-0 relative mt-16 lg:mt-0 lg:ml-32`;
const ImageContainer = tw.div`relative z-40 transform xl:-translate-x-24 xl:-translate-y-16`;
const Image = tw.img`max-w-full w-96 rounded-t sm:rounded relative z-20`;
const Offsetbackground = tw.div`absolute inset-0 bg-gray-200 opacity-75 rounded xl:-mb-8`;
const ImageDecoratorBlob = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none z-10 absolute right-0 bottom-0 transform translate-x-10 translate-y-10 h-32 w-32 opacity-25 text-gray-900 fill-current`}
`;
const Testimonial = tw.div`max-w-sm rounded-b md:rounded-none relative sm:absolute bottom-0 inset-x-0 z-20 px-8 py-6 sm:px-10 sm:py-8 bg-primary-900 text-gray-lightest font-medium transform md:-translate-x-32 text-sm leading-relaxed md:-mr-16 xl:mr-0`
const QuotesLeftIcon = tw(QuotesLeftIconBase)`w-16 h-16 md:w-12 md:h-12 absolute top-0 left-0 text-gray-100 md:text-red-0 transform translate-x-1 md:-translate-x-1/2 md:-translate-y-5 opacity-10 md:opacity-100`
const Quote = tw.blockquote`font-sans font-bold`
const CustomerName = tw.p`mt-4 font-sans`
const CustomerCompany = tw.p`mt-1 text-sm text-gray-500`

export default ({
  heading = "Kathēkon",
  description = "Fundamental societal transformations through evidence-driven investments in education, social welfare, and civil society",
  imageSrc = "https://res.cloudinary.com/tolulope-od/image/upload/e_improve,w_350,h_600,c_thumb,g_auto/v1598367140/trevor-cole-CWcAsKuhwy0-unsplash_vdmd17.jpg",
  imageDecoratorBlob = true,
  primaryButtonUrl = "/about",
  primaryButtonText = "Get Started",
  testimonial = {
    quote: "The impediment to action advances action.",
    customerName: "Marcus Aurelius",
    customerCompany: "",
  }
}) => {
  const buttonRounded = false;
  const buttonRoundedCss = buttonRounded && tw`rounded-full`;
  const StyledLink = React.forwardRef((props, ref) => (
    <NavLink {...props} ref={ref}>{props.children}</NavLink>
  ))
  const navLinks = [
    <NavLinks key={1}>
      <Link to="/about" component={(props) => <StyledLink {...props}>About</StyledLink>} />
      <Link to="/our-work" component={(props) => <StyledLink {...props}>Our Work</StyledLink>} />
      <Link to="/" component={(props) => <StyledLink {...props}>Partnerships</StyledLink>} />
      <Link to="/" component={(props) => <StyledLink {...props}>Blog</StyledLink>} />
      <Link to="/" component={(props) => <StyledLink {...props}>Scholarships</StyledLink>} />
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
      <Header links={navLinks} />
      <Container>
        <ContentWithVerticalPadding>
          <Row>
            <TextColumn>
              <Heading>{heading}</Heading>
              <Description>{description}</Description>
              <PrimaryButton as="a" href={primaryButtonUrl} css={buttonRoundedCss}>
                {primaryButtonText}
              </PrimaryButton>
              {/*<FeatureList>*/}
              {/*  {features.map((feature, index) => (*/}
              {/*    <Feature key={index}>*/}
              {/*      <FeatureIcon />*/}
              {/*      <FeatureText>{feature}</FeatureText>*/}
              {/*    </Feature>*/}
              {/*  ))}*/}
              {/*</FeatureList>*/}
            </TextColumn>
            <ImageColumn>
              <ImageContainer>
                <SlideShow />
                {/*<Image src={imageSrc} />*/}
                {imageDecoratorBlob && <ImageDecoratorBlob />}
                <Testimonial>
                  <QuotesLeftIcon/>
                  <Quote>{testimonial.quote}</Quote>
                  <CustomerName>{testimonial.customerName}</CustomerName>
                  <CustomerCompany>{testimonial.customerCompany}</CustomerCompany>
                </Testimonial>
              </ImageContainer>
              <Offsetbackground />
            </ImageColumn>
          </Row>
        </ContentWithVerticalPadding>
      </Container>
    </>
  );
};
