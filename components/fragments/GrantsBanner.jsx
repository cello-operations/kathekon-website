import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { ReactComponent as SvgDecoratorBlob1 } from "../../public/images/svg-decorator-blob-9.svg";
import { Container } from "../misc/Layouts.jsx";

const PrimaryBackgroundContainer = tw.div`py-20 lg:py-24 px-2 lg:px-2 mb-172 lg:mb-156 md:mb-164 bg-primary-500 rounded-lg relative z-10`
const Row = tw.div`px-8 max-w-screen-lg mx-auto relative text-center`;

const ColumnContainer = tw.div`lg:w-1/2 max-w-lg`
const TextContainer = tw(ColumnContainer)``;
const Text = tw.h5`text-gray-100 text-2xl sm:text-3xl font-bold`;
const SubText = tw.p`text-gray-300 mt-3 p-3`;

const LinksContainer = tw(ColumnContainer)`flex justify-center lg:justify-end mt-6 lg:mt-0 flex-col sm:flex-row`;

const Link = tw.a`w-full sm:w-auto text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 mt-4 first:mt-0 sm:mt-0 sm:mr-8 sm:last:mr-0 rounded-full font-bold border border-transparent tracking-wide transition duration-300 focus:outline-none focus:shadow-outline`;
const PrimaryLink = tw(Link)`bg-red-500 text-gray-100 shadow-lg hocus:bg-red-600 hocus:text-gray-200`;

const SecondaryLink = tw(Link)`text-gray-100 border-gray-500 hover:bg-gray-100 hover:text-primary-500 hover:border-primary-500`;

const DecoratorBlobContainer = tw.div`absolute inset-0 overflow-hidden rounded-lg`
const DecoratorBlob1 = tw(SvgDecoratorBlob1)`absolute bottom-0 left-0 w-80 h-80 transform -translate-x-20 translate-y-32 text-primary-700 opacity-50`
const DecoratorBlob2 = tw(SvgDecoratorBlob1)`absolute top-0 right-0 w-80 h-80 transform  translate-x-20 -translate-y-64 text-primary-700 opacity-50`
const GrantsBanner = ({
  text = "Credible organizations can apply for grants",
  subtext = "We implore individuals and organizations whose values are consistent with ours, whose goals for the future are reflected in ours, and whose vision for change is as radical, urgent, and pragmatic as ours, to apply for grants.",
  pushDownFooter = false
}) => {
  return (
    <Container css={pushDownFooter && tw`mb-20 lg:mb-24`} style={{ fontFamily: 'Raleway' }}>
      <PrimaryBackgroundContainer style={{ borderRadius: 0, zIndex: -1 }}>
        <div style={{ textAlign: 'center', zIndex: 1, marginBottom: '3.5rem' }}>
          <Text>{text}</Text>
          <SubText>{subtext}</SubText>
        </div>
        <DecoratorBlobContainer>
          <DecoratorBlob1 style={{ zIndex: -1 }}/>
          <DecoratorBlob2/>
        </DecoratorBlobContainer>
      </PrimaryBackgroundContainer>
    </Container>
  );
};

export default GrantsBanner;
