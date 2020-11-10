import React from "react";
import Head from 'next/head';
import AnimationRevealPage from "../../helpers/AnimationRevealPage.jsx";
import ContactUsForm from "../forms/ContactForm.jsx";
import { PageNavLinks } from '../header/NavLinks.jsx';

const ContactUs = () => {
  return (
    <>
      <Head>
        <title>Kathēkon - Contact Us At Kathekon</title>
        <meta name="description" content="Contact Kathekon: Get in touch with Kathēkon to learn more about scholarship, volunteering and how we can create valuable partnerships" />
        <meta name="keywords" content="contact us at kathekon kathēkon ulesson khan academy kathēkon scholarships transforming nigeria kathekon education civil society social welfare investment africa" />
      </Head>
      <AnimationRevealPage>
        <ContactUsForm />
      </AnimationRevealPage>
    </>
  );
};

export default ContactUs;
