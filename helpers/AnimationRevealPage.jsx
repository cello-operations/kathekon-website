import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
/* framer-motion and useInView here are used to animate the sections in when we reach them in the viewport
 */
import { motion } from "framer-motion";
import useInView from '../hooks/useInView';

const StyledDiv = tw.div`min-h-screen text-secondary-500 p-8 overflow-hidden`;
const MotionSection = motion.section;
const ResponsiveStyledDiv = styled(StyledDiv)`
  @media(max-width: 414px) {
    padding: .5rem;
  }
`;

function AnimationReveal({ disabled, children }) {
  if (disabled) {
    return <>{children}</>;
  }

  if (!Array.isArray(children)) children = [children];

  const directions = ["left", "right"];
  const childrenWithAnimation = children.map((child, i) => {
    return (
      <AnimatedSlideInComponent key={i} direction={directions[i % directions.length]}>
        {child}
      </AnimatedSlideInComponent>
    );
  });
  return <>{childrenWithAnimation}</>;
}

function AnimatedSlideInComponent({ direction = "left", offset = 30, children }) {
  const [ref, inView] = useInView(30);

  const x = { target: "0%" };

  if (direction === "left") x.initial = "-150%";
  else x.initial = "150%";

  return (
    <MotionSection
    >
      {children}
    </MotionSection>
  );
}

const AnimationRevealPage = (props) => (
  <ResponsiveStyledDiv className="App" style={{ fontFamily: 'Raleway' }}>
    <AnimationReveal {...props} />
  </ResponsiveStyledDiv>
);

export default AnimationRevealPage;
