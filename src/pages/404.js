import React from "react";
import { Helmet } from "react-helmet";
import BackgroundAsImageWithCenteredContent from "components/hero/BackgroundAsImageWithCenteredContent";
import Footer from "components/footers/FiveColumnWithInputForm.js";

const NotFound = () => (
  <>
    <Helmet>
      <title>Kathēkon - 404 Not found</title>
      <meta name="description" content="Not found on Kathekon: The page you are looking for does not exist or may have been move." />
    </Helmet>
    <BackgroundAsImageWithCenteredContent />
    <Footer />
  </>
);

export default NotFound;
