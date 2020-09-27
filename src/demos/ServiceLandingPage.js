import React from "react";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import SliderCard from "components/cards/ThreeColSlider.js";


import Hero from "components/hero/TwoColumnWithFeaturesAndTestimonial.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";

export default () => {
  return (
    <AnimationRevealPage>
      <Hero />
      <SliderCard />
      <Footer />
    </AnimationRevealPage>
  );
}
