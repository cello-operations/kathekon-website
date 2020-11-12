import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading as HeadingTitle } from "../misc/Headings.jsx";
import { ReactComponent as QuotesLeftIcon } from "../../public/images/quotes-l.svg";
import { ReactComponent as QuotesRightIcon } from "../../public/images/quotes-r.svg";
import { ReactComponent as ArrowLeftIcon } from "../../public/images/arrow-left-2-icon.svg";
import { ReactComponent as ArrowRightIcon } from "../../public/images/arrow-right-2-icon.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "../../public/images/svg-decorator-blob-4.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../../public/images/svg-decorator-blob-5.svg";

import "slick-carousel/slick/slick.css";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const TestimonialSliderContainer = tw.div`mt-24`;
const TestimonialSlider = styled(Slider)``;
const Testimonial = tw.div`flex! flex-col items-center md:items-stretch md:flex-row md:justify-center outline-none`;
const ImageContainer = styled.div`
  ${tw`md:mx-3 lg:mx-6 w-2/3 md:w-4/12 rounded flex items-center max-w-xs md:max-w-none`}
  img {
    ${tw`rounded`}
  }
`;
const TextContainer = tw.div`md:mx-3 lg:mx-6 md:w-6/12 py-4 flex flex-col justify-between`;
const QuoteContainer = tw.div`relative p-6 md:p-8 lg:p-10 mt-4 md:mt-0`;
const Quote = tw.blockquote`text-center md:text-left font-medium text-lg`;
const CustomerInfo = tw.div`px-5 lg:px-10 text-center md:text-left mt-4 md:mt-0`;
const CustomerName = tw.h5`font-bold text-lg lg:text-xl xl:text-2xl text-primary-500`;
const CustomerTitle = tw.p`font-medium text-sm`;

const QuotesLeft = tw(QuotesLeftIcon)`w-8 h-8 lg:w-10 lg:h-10 text-primary-500 absolute top-0 left-0`;
const QuotesRight = tw(QuotesRightIcon)`w-8 h-8 lg:w-10 lg:h-10 text-primary-500 absolute bottom-0 right-0`;

const SliderControlButtonContainer = styled.div`
  ${tw`absolute top-0 h-full flex items-end md:items-center z-20`}
  button {
    ${tw`text-secondary-500 hover:text-primary-500 focus:outline-none transition duration-300 transform hover:scale-125 transform -translate-y-2/3 md:translate-y-0`}
    svg {
      ${tw`w-8`}
    }
  }
`;

const NextArrow = ({ currentSlide, slideCount, ...props }) => (
  <SliderControlButtonContainer tw="right-0">
    <button {...props}>
      <ArrowRightIcon />
    </button>
  </SliderControlButtonContainer>
);
const PreviousArrow = ({ currentSlide, slideCount, ...props }) => (
  <SliderControlButtonContainer tw="left-0">
    <button {...props}>
      <ArrowLeftIcon />
    </button>
  </SliderControlButtonContainer>
);

const DecoratorBlob1 = tw(
  SvgDecoratorBlob1
)`absolute w-32 top-0 left-0 -z-10 text-primary-500 opacity-25 transform -translate-x-full`;
const DecoratorBlob2 = tw(
  SvgDecoratorBlob2
)`absolute w-32 bottom-0 right-0 -z-10 text-pink-500 opacity-15 transform translate-x-2/3 translate-y-8`;

const OurTeam = () => {
  /*
   * You can modify the testimonials shown by modifying the array below
   * You can add or remove objects from the array as you need.
   */
  const testimonials = [
    {
      imageSrc:
        "https://res.cloudinary.com/tolulope-od/image/upload/v1601211702/web-9_whr5dl.jpg",
      quote:
        "Ogunjubee Ifedolapo is experienced in Business Strategy, partnership, communication, and marketing with successful history developing intelligence to improve business operational planning and implementation in the highly competitive IT industry. Proven track record of contributing to and managing high-value projects. He is particularly interested in the social impact space considering the need for effective work in the following areas in Africa; Education, Civil Society and Social welfare",
      customerName: "Ifedolapo Jubee",
      customerTitle: "Title"
    },
    {
      imageSrc:
        "https://res.cloudinary.com/tolulope-od/image/upload/v1605095626/WhatsApp_Image_2020-09-29_at_16.53.52_s719q5.jpg",
      quote:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
      customerName: "Morisola Alaba",
      customerTitle: "Title"
    },
    {
      imageSrc:
        "https://res.cloudinary.com/tolulope-od/image/upload/v1605096180/WhatsApp_Image_2020-11-03_at_11.06.20_jbgfye.jpg",
      quote:
        "Adeyemi Adebimpe is an experienced administrator with several years working as an Executive Assistant. She is a graduate of English language with expertise in creative thinking, problem solving, customer relations and communications. She is an avid reader with interests in digital marketing and content creation. She loves to connect with people and would love to see a world with  less inequality.",
      customerName: "Adebimpe Adeyemi",
      customerTitle: "Title"
    },
    {
      imageSrc:
        "https://res.cloudinary.com/tolulope-od/image/upload/v1605095625/WhatsApp_Image_2020-09-30_at_11.06.35_luwk2f.jpg",
      quote:
        "Socrates Mbamalu is a writer and journalist whose works have been published in various publications. His interests in economics, social justice and politics have influenced his work.",
      customerName: "Socrates Mbalu",
      customerTitle: "Title"
    }
  ];
  return (
    <Container>
      <Content>
        <HeadingInfoContainer>
          {/* <HeadingTitle>Our Awesome Customers</HeadingTitle> */}
          <HeadingDescription></HeadingDescription>
        </HeadingInfoContainer>
        <TestimonialSliderContainer>
          <TestimonialSlider autoplay={true} nextArrow={<NextArrow />} prevArrow={<PreviousArrow />}>
            {testimonials.map((testimonial, index) => (
              <Testimonial key={index}>
                <ImageContainer>
                  <img src={testimonial.imageSrc} alt={testimonial.customerName} />
                </ImageContainer>
                <TextContainer>
                  <QuoteContainer>
                    <Quote>{testimonial.quote}</Quote>
                  </QuoteContainer>
                  <CustomerInfo>
                    <CustomerName>{testimonial.customerName}</CustomerName>
                    <CustomerTitle>{testimonial.customerTitle}</CustomerTitle>
                  </CustomerInfo>
                </TextContainer>
              </Testimonial>
            ))}
          </TestimonialSlider>
        </TestimonialSliderContainer>
      </Content>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};

export default OurTeam;