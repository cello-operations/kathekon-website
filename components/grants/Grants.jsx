import React from "react";
import Head from 'next/head';
import styled from "styled-components";
import tw from 'twin.macro';
import GrantsBanner from '../fragments/GrantsBanner.jsx';
import GrantsTabs from '../cards/CardsWIthTabSwitch.jsx';

const MotionSection = styled.section`
  background: white;
  padding: 2rem 4rem;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  z-index: 99999;
  justify-self: center;
  align-self: center;
  
  @media(min-width: 1440px) {
    margin-top: 1rem;
  }
  
  @media(max-width: 768px) {
    padding: 2rem;
  }
`;

const StyledDiv = tw.div`font-display min-h-screen text-secondary-500 p-8 overflow-hidden`;
const Container = tw.div`grid grid-cols-13`;

const ResponsiveStyledDiv = styled(StyledDiv)`
  @media(max-width: 414px) {
    padding: 0 !important;
  }
`;

const Grants = (props) => {
  return (
    <>
      <Head>
        <title>Kathēkon - Grants</title>
        <meta name="description" content="We implore individuals and organizations whose values are consistent with ours, whose goals for the future are reflected in ours, and whose vision for change is as radical, urgent, and pragmatic as ours, to apply for grants." />
        <meta name="keywords" content="kathēkon grants scholarship school children Nigeria education civil society transformation change" />
        <meta name="og:title" property="og:title" content="Kathēkon - Grants" />
        <meta property="og:image" content="https://res.cloudinary.com/tolulope-od/image/upload/v1605094663/Kathekon-redesign-13-13_e9qpnx.png" />
        <meta name="twitter:title" content="Kathēkon - Grants" />
        <meta name="twitter:card" content="photo" />
        <meta name="twitter:description" content="We implore individuals and organizations whose values are consistent with ours, whose goals for the future are reflected in ours, and whose vision for change is as radical, urgent, and pragmatic as ours, to apply for grants." />
        <meta name="twitter:image:src" content="https://res.cloudinary.com/tolulope-od/image/upload/v1605094663/Kathekon-redesign-13-13_e9qpnx.png" />
      </Head>
      <Container>
        <GrantsBanner />
        <ResponsiveStyledDiv>
          <MotionSection>
            <GrantsTabs tabs={props.grants} />
          </MotionSection>
        </ResponsiveStyledDiv>
      </Container>
    </>
  );
};

export default Grants;
