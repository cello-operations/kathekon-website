import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import { motion } from "framer-motion";
import { ReactComponent as SvgDotPatternIcon } from "../../public/images/dot-pattern.svg";
import { SectionHeading as HeadingTitle } from "../misc/Headings.jsx";

const Container = tw.div`relative`;

const SingleColumn = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const Content = tw.div`mt-16`;

const MotionDiv = motion.div;
const Card = styled.div(props => [
  tw`mt-24 md:flex justify-center items-center`,
  props.reversed ? tw`flex-row-reverse` : "flex-row"
]);
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded md:w-1/2 lg:w-5/12 xl:w-1/3 flex-shrink-0 h-80 md:h-144 bg-cover bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8`
]);
const Details = tw.div`mt-4 md:mt-0 md:max-w-md mx-4 sm:mx-8 md:mx-4 lg:mx-8`;
const Subtitle = tw.div`font-bold tracking-wide text-secondary-100`;
const Title = tw.h4`text-3xl font-bold text-gray-900`;
const Description = tw.div`mt-2 text-sm leading-loose`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const Link = tw.a`inline-block mt-4 text-sm text-primary-500 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-primary-500`;
const TextColumn = styled(Column)(props => [
  tw`md:w-full mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`,
]);
const Steps = tw.ul`mt-6`;
const Step = tw.li`mt-8 flex flex-col md:flex-row items-center md:items-start`;
const StepNumber = tw.div`font-semibold leading-none text-gray-400`;
const StepText = tw.div`mt-3 md:mt-0 md:ml-6`;
const StepHeading = tw.h6`leading-none text-xl font-semibold`;
const StepDescription = tw.p`mt-3 max-w-xs leading-loose text-sm text-gray-600 font-medium`;
const DescriptionWithSteps = tw.div`mt-2 text-sm leading-loose`;

const TextContent = tw.div`text-center md:text-left`;

const SvgDotPattern1 = tw(
  SvgDotPatternIcon
)`absolute top-0 left-0 transform -translate-x-20 rotate-90 translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern2 = tw(
  SvgDotPatternIcon
)`absolute top-0 right-0 transform translate-x-20 rotate-45 translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern3 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 left-0 transform -translate-x-20 rotate-45 -translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern4 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 right-0 transform translate-x-20 rotate-90 -translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;

const VerticalImageSection = () => {
  const cards = [
    {
      imageSrc: "https://res.cloudinary.com/tolulope-od/image/upload/v1601215756/annie-spratt-KBpIcWV6o2c-unsplash_vrmi0u.jpg",
      subtitle: "",
      title: "Investment In Education",
      description: (
        <span style={{ fontSize: '18px' }}>
        The gulf in good education in Nigeria continues to widen. Students rarely have basic resources for proper learning, and many students find themselves at a tremendous disadvantage against students from across the world. Part of our work at Kathekon is to identify inefficiencies in education and help rebuild a well standardized model by providing funds to schools that have the potential, but are limited in resources.
        </span>
      ),
      url: "/contact-us",
      imageCredit: (<span style={{ color: '#333', fontSize: '10px', fontWeight: 100 }}>Photo by <a style={{ color: '#34a4dd' }} href="https://unsplash.com/@olajidetunde?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Annie Spratt</a> on <a style={{ color: '#34a4dd' }} href="https://unsplash.com/s/photos/nigeria?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>),
    },
    {
      imageSrc:
        "https://res.cloudinary.com/tolulope-od/image/upload/v1601224310/babatunde-olajide-q4ZBGVzJskE-unsplash_aie8pm.jpg",
      subtitle: "",
      title: "Social Welfare",
      description: (
        <span style={{ fontSize: '18px' }}>
          We will provide local NGOs with funds in order to reshape societies through investments in social impact spaces such as Education, Civil Societies and Social welfare. Also, we make provision for discretionary grants to support humanitarian response to emergencies and relevant long-term interventions that fall within the specific thematic areas of choice.
        </span>
      ),
      url: "/contact-us",
      hasSteps: true,
      imageCredit: (<span style={{ color: '#333', fontSize: '10px', fontWeight: 100 }}>Photo by <a style={{ color: '#34a4dd' }} href="https://unsplash.com/@olajidetunde?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Babatunde Olajide</a> on <a style={{ color: '#34a4dd' }} href="https://unsplash.com/s/photos/nigeria?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>),
    },
    {
      imageSrc:
        "https://res.cloudinary.com/tolulope-od/image/upload/v1601138950/logan-weaver-uwyqYYWUQJw-unsplash_upqyxf.jpg",
      subtitle: "",
      title: "Civil Society",
      description: (
        <span style={{ fontSize: '18px' }}>
          We recognize the important work of the civil society in a country like Nigeria and often times those in the civil society find themselves working in the most challenging environments either as a result of government stifling the civic space or the limited number of funds available.
        </span>
      ),
      url: "/contact-us",
      hasSteps: true,
      imageCredit: (<span style={{ color: '#333333', fontSize: '10px', fontWeight: 100 }}>Photo by <a style={{ color: '#34a4dd' }} href="https://unsplash.com/@wwarby?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">William Warby</a> on <a style={{ color: '#34a4dd' }} href="https://unsplash.com/s/photos/measurement?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>),
    },
    // {
    //   imageSrc:
    //     "https://res.cloudinary.com/tolulope-od/image/upload/v1601238029/william-warby-WahfNoqbYnM-unsplash_a5y26m.jpg",
    //   subtitle: "General Framework",
    //   title: "Goal Measurements",
    //   description: (
    //     <TextColumn textOnLeft={true}>
    //       <TextContent>
    //         <Steps>
    //           <Step>
    //             <StepNumber><FontAwesomeIcon size={"2x"} icon={faArrowCircleRight} /></StepNumber>
    //             <StepText>
    //               <StepHeading>Make public school education in the South-West region of Nigeria competitive with private schools in Nigeria</StepHeading>
    //               <StepDescription><b>Measurement:</b> performance on major exams: WASSCE, NECO, SAT, etc.
    //               </StepDescription>
    //             </StepText>
    //           </Step>
    //           <Step>
    //             <StepNumber><FontAwesomeIcon size={"2x"} icon={faArrowCircleRight} /></StepNumber>
    //             <StepText>
    //               <StepHeading>Develop public school education in the South-West region of Nigeria to meet international standards</StepHeading>
    //               <StepDescription><b>Measurement:</b> performance on SAT, IQ tests, and international competitions.
    //               </StepDescription>
    //             </StepText>
    //           </Step>
    //         </Steps>
    //       </TextContent>
    //     </TextColumn>
    //   ),
    //   url: "/",
    //   imageCredit: (<span style={{ color: '#333333', fontSize: '10px', fontWeight: 100 }}>Photo by <a style={{ color: '#34a4dd' }} href="https://unsplash.com/@wwarby?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">William Warby</a> on <a style={{ color: '#34a4dd' }} href="https://unsplash.com/s/photos/measurement?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>),
    // },
  ];

  return (
    <Container>
      <SingleColumn>
        <HeadingInfoContainer>
          <HeadingTitle>Our Work</HeadingTitle>
          <HeadingDescription style={{ fontSize: '18px' }}>
            Here are some of Kathēkon's work detailing the reinforcement of our core values.
          </HeadingDescription>
        </HeadingInfoContainer>

        <Content>
          {cards.map((card, i) => (
            <MotionDiv key={i} whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
            }}>
              <Card key={i} reversed={i % 2 === 1}>
                <Image imageSrc={card.imageSrc} />
                <Details>
                  <Subtitle>{card.subtitle}</Subtitle>
                  <Title>{card.title}</Title>
                  {
                    card.hasSteps
                      ? (
                        <DescriptionWithSteps style={{ fontSize: '12px' }}>{card.description}</DescriptionWithSteps>
                      ) : (
                        <Description>{card.description}</Description>
                      )
                  }
                  <Link href={card.url}>Partner with us</Link>
                  <br/>
                  <br/>
                  {
                    card.imageCredit && card.imageCredit
                  }
                </Details>
              </Card>
            </MotionDiv>
          ))}
        </Content>
      </SingleColumn>
      <SvgDotPattern1 />
      <SvgDotPattern2 />
      <SvgDotPattern3 />
      <SvgDotPattern4 />
    </Container>
  );
};

export default VerticalImageSection;
