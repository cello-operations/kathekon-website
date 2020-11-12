import React from "react";
import tw from "twin.macro";
import Link from 'next/link';
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading } from "../misc/Headings.jsx";
import { PrimaryLink as PrimaryLinkBase } from "../misc/Links.jsx";
import { PrimaryButton as PrimaryButtonBase } from "../misc/Buttons.jsx";
import { ReactComponent as LocationIcon } from "feather-icons/dist/icons/map-pin.svg";
import { ReactComponent as TimeIcon } from "feather-icons/dist/icons/clock.svg";
import { ReactComponent as ArrowRightIcon } from "../../public/images/arrow-right-icon.svg";
import { truncateText } from '../../helpers/truncateText';

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const ThreeColumn = tw.div`flex flex-wrap`;
const Column = tw.div`xl:mr-12 xl:last:mr-0`;
const HeadingColumn = styled(Column)(props => [
  tw`w-full xl:w-5/12`,
  props.textOnLeft ? tw`xl:order-first` : tw`xl:order-last xl:ml-12 xl:mr-0`
]);
const CardColumn = tw(Column)`w-full md:w-1/2 xl:w-3/12 mt-16 xl:mt-0 xl:last:ml-auto`;

const HeadingInfoContainer = tw.div`text-center xl:text-left max-w-lg xl:max-w-none mx-auto xl:mx-0`;
const HeadingTitle = tw(SectionHeading)`mt-4 xl:text-left leading-tight`;
const HeadingDescription = tw.p`text-sm md:text-base lg:text-lg leading-relaxed text-secondary-100 mt-8`;
const PrimaryLink = styled(PrimaryLinkBase)`
  ${tw`inline-flex justify-center xl:justify-start items-center mt-8 text-lg`}
  svg {
    ${tw`ml-2 w-5 h-5`}
  }
`;

const Card = tw.div`mx-auto xl:mx-0 xl:ml-auto max-w-sm md:max-w-xs lg:max-w-sm xl:max-w-xs`;
const CardImage = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`h-80 bg-cover bg-center rounded`
]);

const CardText = tw.div`mt-4`;

const CardHeader = tw.div`flex justify-between items-center`;
const CardCompany = tw.div`text-primary-500 font-bold text-lg`;
const CardType = tw.div`font-semibold text-sm text-gray-600`;

const CardTitle = tw.h5`text-xl mt-4 font-bold`;

const CardMeta = styled.div`
  ${tw`flex flex-row flex-wrap justify-center sm:items-center font-semibold tracking-wide text-gray-600 uppercase text-xs`}
`;

const CardMetaFeature = styled.div`
  ${tw`flex items-center mt-4 mr-4 last:mr-0`}
  svg {
    ${tw`w-5 h-5 mr-1`}
  }
`;
const CardAction = tw(PrimaryButtonBase)`w-full mt-6`;
const Description = tw.p`mt-2 text-sm text-secondary-100`;

const FeaturedBlogsSection = ({
  subheading = "Our Portfolio",
  headingHtmlComponent = (
    <>
      We've done some <span tw="text-primary-500">amazing projects.</span>
    </>
  ),
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam.",
  linkText = "View all Projects",
  cardLinkText = "Read Case Study",
  textOnLeft = false,
  cards,
}) => {
  return (
    <Container>
      <Content>
        <ThreeColumn>
          <HeadingColumn textOnLeft={textOnLeft}>
            <HeadingInfoContainer>
              <Subheading>{subheading}</Subheading>
              <HeadingTitle>{headingHtmlComponent}</HeadingTitle>
              <HeadingDescription>{description}</HeadingDescription>
              <PrimaryLink href={'/blog'}>
                {linkText} <ArrowRightIcon />
              </PrimaryLink>
            </HeadingInfoContainer>
          </HeadingColumn>
          {
            cards.length > 0 ? cards.map((card, index) => (
              <CardColumn key={index}>
                <Card>
                  <CardImage imageSrc={card.coverImage} />
                  <CardText>
                    <CardHeader>
                      <CardCompany>{card.author.firstName} {card.author.lastName[0]}.</CardCompany>
                      <CardType>{''}</CardType>
                    </CardHeader>
                    <CardTitle>{truncateText(card.title, 90)}</CardTitle>
                    <Description style={{ minHeight: '43px' }}>
                      {truncateText(card.description, 150)}
                    </Description>
                    {/* <CardMeta>
                      <CardMetaFeature>
                        <TimeIcon /> {card.readTime < 0 ? '< 1 Min.' : `${card.readTime} Min.`}
                      </CardMetaFeature>
                      <CardMetaFeature>
                        <LocationIcon /> {card.createdOn}
                      </CardMetaFeature>
                    </CardMeta> */}
                    <Link href={`/blog/post/${card.slug}`}>
                      <CardAction>{cardLinkText}</CardAction>
                    </Link>
                  </CardText>
                </Card>
              </CardColumn>
            )) : (
              <CardColumn>
                <div>
                  <h2
                    style={{ fontWeight: '900', marginTop: '2.5rem' }}
                  >
                    No Posts to Display</h2>
                </div>
              </CardColumn>
            )
        }
        </ThreeColumn>
      </Content>
    </Container>
  );
};

export default FeaturedBlogsSection;
