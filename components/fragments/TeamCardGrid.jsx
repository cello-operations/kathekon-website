import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import { ReactComponent as TwitterSVGIcon } from "feather-icons/dist/icons/twitter.svg";
import { ReactComponent as LinkedinSVGIcon } from "feather-icons/dist/icons/linkedin.svg";
import { ReactComponent as FacebookSVGIcon } from "feather-icons/dist/icons/facebook.svg";
import { Container, ContentWithPaddingXl } from "../misc/Layouts.jsx";
import { SectionHeading, Subheading as SubheadingBase } from "../misc/Headings.jsx";
import {SectionDescription} from "../misc/Typography.jsx";

const HeadingContainer = tw.div``
const Heading = tw(SectionHeading)``
const Subheading = tw(SubheadingBase)`text-center mb-3`
const Description = tw(SectionDescription)`mx-auto text-center font-sans`

const Cards = tw.div`flex flex-wrap flex-row justify-center sm:max-w-2xl lg:max-w-5xl mx-auto`
const Card = tw.div`mt-24 w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center`
const CardImage = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`w-56 h-56 bg-cover bg-center rounded`}
  border-radius: 50%;
`
const CardContent = styled.div`
  ${tw`flex flex-col items-center mt-6`}
  .position {
    ${tw`uppercase font-bold tracking-widest text-xs text-primary-500`}
  }
  .name {
    ${tw`mt-1 text-xl font-medium text-gray-900`}
  9
`

const CardLinks = styled.div`
  ${tw`mt-6 flex`}
  .link {
    ${tw`mr-8 last:mr-0 text-gray-400 hocus:text-primary-500 transition duration-300`}
    .icon {
      ${tw`fill-current w-6 h-6`}
    }
  }
`

const TeamCardGrid = ({
  heading = "Meet Our Team.",
  subheading = "Our Team",
  description = "",
  cards = [
    {
      imageSrc: "https://res.cloudinary.com/tolulope-od/image/upload/v1601211702/web-9_whr5dl.jpg",
      position: "Executive Director",
      name: "Ifedolapo Ogunjubee",
      links: [
        {
          url: "https://www.linkedin.com/in/ifedolapo-ogunjubee",
          icon: LinkedinSVGIcon,
        },
      ],
    },
    {
      imageSrc: "https://res.cloudinary.com/tolulope-od/image/upload/v1605095626/WhatsApp_Image_2020-09-29_at_16.53.52_s719q5.jpg",
      position: "Director of Operations",
      name: "Morisola Alaba",
      links: [
        {
          url: "https://www.linkedin.com/in/morisola-alaba-4506aa83",
          icon: LinkedinSVGIcon,
        },
      ],
    },
    {
      imageSrc: "https://res.cloudinary.com/tolulope-od/image/upload/v1605095625/WhatsApp_Image_2020-09-30_at_11.06.35_luwk2f.jpg",
      position: "Director of Communications",
      name: "Socrates Mbamalu",
      links: [
        {
          url: "https://www.linkedin.com/in/socrates-mbamalu-7b159b7b",
          icon: LinkedinSVGIcon,
        },
      ],
    },
    {
      imageSrc: "https://res.cloudinary.com/tolulope-od/image/upload/v1605096180/WhatsApp_Image_2020-11-03_at_11.06.20_jbgfye.jpg",
      position: "Social Media Manager",
      name: "Adebimpe Adeyemi",
      links: [
        {
          url: "https://www.linkedin.com/in/adebimpe-adeyemi-a44a50149",
          icon: LinkedinSVGIcon,
        },
      ],
    },
  ]
}) => {
  return (
    <Container>
      <ContentWithPaddingXl>
        <HeadingContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          {heading && <Heading>{heading}</Heading> }
          {description && <Description>{description}</Description> }
        </HeadingContainer>
        <Cards>
          {cards.map((card, index) => (
            <Card key={index}>
              <CardImage imageSrc={card.imageSrc} />
              <CardContent>
                <span className="position">{card.position}</span>
                <span className="name">{card.name}</span>
                <CardLinks>
                  {card.links.map((link, linkIndex) => (
                    <a key={linkIndex} className="link" href={link.url}>
                      <link.icon className="icon" color={'#32a3dc'}/>
                    </a>
                  ))}
                </CardLinks>
              </CardContent>
            </Card>
          ))}
        </Cards>
      </ContentWithPaddingXl>
    </Container>
  );
};

export default TeamCardGrid;
