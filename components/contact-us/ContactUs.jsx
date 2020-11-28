import React from "react";
import Head from 'next/head';
import AnimationRevealPage from "../../helpers/AnimationRevealPage.jsx";
import ContactUsForm from "../forms/ContactForm.jsx";
import { PageNavLinks } from '../header/NavLinks.jsx';

const ContactUs = () => {
  return (
    <>
      <Head>
        <title>Kathēkon - Contact Us</title>
        <meta name="description" content="Contact Kathekon: Get in touch with Kathēkon to learn more about scholarship, volunteering and how we can create valuable partnerships" />
        <meta name="keywords" content="contact us at kathekon kathēkon ulesson khan academy kathēkon scholarships transforming nigeria kathekon education civil society social welfare investment africa" />
        <meta name="og:title" property="og:title" content="Kathēkon - Contact Us"/>
        <meta name="twitter:card" content="photo" />
        <meta name="twitter:title" content="Kathēkon - Contact Us" />
        <meta property="og:image" content="https://res.cloudinary.com/tolulope-od/image/upload/q_auto/v1605094663/Kathekon-redesign-13-13_e9qpnx.png" />
        <meta name="twitter:description" content="Contact Kathekon: Get in touch with Kathēkon to learn more about scholarship, volunteering and how we can create valuable partnerships." />
        <meta name="twitter:image:src" content="https://res.cloudinary.com/tolulope-od/image/upload/q_auto/v1605094663/Kathekon-redesign-13-13_e9qpnx.png" />
      </Head>
      <AnimationRevealPage>
        <ContactUsForm />
      </AnimationRevealPage>
    </>
  );
};

export default ContactUs;
