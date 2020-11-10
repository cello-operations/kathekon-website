import React from "react";
import Head from 'next/head';
import styled from "styled-components";
import tw from 'twin.macro';
import AnimationRevealPage from "../../helpers/AnimationRevealPage.jsx";
import GrantsBanner from '../fragments/GrantsBanner.jsx';
import GrantsTabs from '../cards/CardsWIthTabSwitch.jsx';
import { PageNavLinks } from '../header/NavLinks.jsx';

// const PaddedBackground = styled.div`
//   ${tw.div`max-w-screen-xl mx-auto px-6 py-6 lg:px-8 lg:py-8`}
//   background: white;
//   border-radius: 0.75rem;
//   box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
//   z-index: 2;
//   position: absolute;
//   transform: translate(10%, 30%);
// `;

const MotionSection = styled.section`
  background: white;
  padding: 2rem 4rem;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  z-index: 99999;
  justify-self: center;
  align-self: center;
`;

const StyledDiv = tw.div`font-display min-h-screen text-secondary-500 p-8 overflow-hidden`;
const Container = tw.div`grid grid-cols-13`;

const Grants = () => {
  return (
    <>
      <Head>
        <title>Kathēkon - Grants</title>
        <meta name="description" content="Kathekon Grants: Kathēkon gives different type of grants and scholarships to Nigerian school students in accordance to fulfillinf certain criteria" />
        <meta name="keywords" content="kathēkon grants scholarship school children Nigeria education civil society transformation change" />
      </Head>
      <Container>
        <GrantsBanner />
        <StyledDiv>
          <MotionSection>
            <GrantsTabs />
          </MotionSection>
        </StyledDiv>
      </Container>
    </>
  );
};

export default Grants;