import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import { motion } from "framer-motion";
import { ReactComponent as SvgDotPatternIcon } from "../../images/dot-pattern.svg";
import { SectionHeading as HeadingTitle } from "../misc/Headings.js";

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

export default () => {
  const cards = [
    {
      imageSrc: "https://res.cloudinary.com/tolulope-od/image/upload/v1601215756/annie-spratt-KBpIcWV6o2c-unsplash_vrmi0u.jpg",
      subtitle: "Education",
      title: "After-school program",
      description:
        "The gulf between public primary/secondary schools and private " +
        "schools in Nigeria continues to widen. " +
        "Students rarely have basic resources for proper learning, " +
        "and many students who graduate from the best public schools find " +
        "themselves at a tremendous disadvantage against students " +
        "graduating from middling private schools. " +
        "This year, we will test a project intended " +
        "to intervene in this area.",
      url: "/partnerships",
      imageCredit: (<span style={{ color: '#333', fontSize: '10px', fontWeight: 100 }}>Photo by <a style={{ color: '#34a4dd' }} href="https://unsplash.com/@olajidetunde?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Annie Spratt</a> on <a style={{ color: '#34a4dd' }} href="https://unsplash.com/s/photos/nigeria?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>),
    },
    {
      imageSrc:
        "https://res.cloudinary.com/tolulope-od/image/upload/v1601224310/babatunde-olajide-q4ZBGVzJskE-unsplash_aie8pm.jpg",
      subtitle: "General Framework",
      title: "Long-term Goals",
      description: (
        <span>
          We will partner with local NGOs to build centers
          that provide access to internet-enabled computers
          or tablets to students.
          The students will have access to online
          learning platforms like
          <a style={{ color: '#34a4dd' }} href="https://ulesson.com/" target="_blank" rel="noopener noreferrer">Ulesson</a>
          and <a target="_blank" rel="noopener noreferrer" href="https://www.khanacademy.org" style={{ color: '#34a4dd' }}>Khan Academy</a>.
          A few instructors would also be physically available to
          the students at the centers. High-performing students are
          provided with mentorship and internship opportunities.
        </span>
      ),
      url: "https://timerse.com",
      hasSteps: true,
      imageCredit: (<span style={{ color: '#333', fontSize: '10px', fontWeight: 100 }}>Photo by <a style={{ color: '#34a4dd' }} href="https://unsplash.com/@olajidetunde?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Babatunde Olajide</a> on <a style={{ color: '#34a4dd' }} href="https://unsplash.com/s/photos/nigeria?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>),
    },
    {
      imageSrc:
        "https://res.cloudinary.com/tolulope-od/image/upload/v1601238029/william-warby-WahfNoqbYnM-unsplash_a5y26m.jpg",
      subtitle: "General Framework",
      title: "Goal Measurements",
      description: (
        <TextColumn textOnLeft={true}>
          <TextContent>
            <Steps>
              <Step>
                <StepNumber><FontAwesomeIcon size={"2x"} icon={faArrowCircleRight} /></StepNumber>
                <StepText>
                  <StepHeading>Make public school education in the South-West region of Nigeria competitive with private schools in Nigeria</StepHeading>
                  <StepDescription><b>Measurement:</b> performance on major exams: WASSCE, NECO, SAT, etc.
                  </StepDescription>
                </StepText>
              </Step>
              <Step>
                <StepNumber><FontAwesomeIcon size={"2x"} icon={faArrowCircleRight} /></StepNumber>
                <StepText>
                  <StepHeading>Develop public school education in the South-West region of Nigeria to meet international standards</StepHeading>
                  <StepDescription><b>Measurement:</b> performance on SAT, IQ tests, and international competitions.
                  </StepDescription>
                </StepText>
              </Step>
            </Steps>
          </TextContent>
        </TextColumn>
      ),
      url: "/",
      imageCredit: (<span style={{ color: '#333333', fontSize: '10px', fontWeight: 100 }}>Photo by <a style={{ color: '#34a4dd' }} href="https://unsplash.com/@wwarby?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">William Warby</a> on <a style={{ color: '#34a4dd' }} href="https://unsplash.com/s/photos/measurement?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>),
    },
  ];

  return (
    <Container>
      <SingleColumn>
        <HeadingInfoContainer>
          <HeadingTitle>Our Work</HeadingTitle>
          <HeadingDescription>
            Here are some of Kathēkon's work detailing the reinforcement of our core values.
          </HeadingDescription>
        </HeadingInfoContainer>

        <Content>
          {cards.map((card, i) => (
            <MotionDiv key={i} whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
            }} whileTap={{ scale: 0.9 }}>
              <Card key={i} reversed={i % 2 === 1}>
                <Image imageSrc={card.imageSrc} />
                <Details>
                  <Subtitle>{card.subtitle}</Subtitle>
                  <Title>{card.title}</Title>
                  {
                    card.hasSteps
                      ? (
                        <DescriptionWithSteps>{card.description}</DescriptionWithSteps>
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
