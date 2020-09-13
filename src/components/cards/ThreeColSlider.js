import React from "react";
import tw from "twin.macro";
import { SectionHeading } from "components/misc/Headings";
import CardGrid from "components/cards/CardGrid";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20`;

const HeadingWithControl = tw.div`flex flex-col items-center sm:items-stretch sm:flex-row justify-between`;
const Heading = tw(SectionHeading)``;

export default () => {
  return (
    <Container>
      <Content>
        <HeadingWithControl>
          <Heading>Core Values</Heading>
        </HeadingWithControl>
        <CardGrid />
      </Content>
    </Container>
  );
};
