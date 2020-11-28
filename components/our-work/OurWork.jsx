import * as React from "react";
import Head from 'next/head';
import AnimationRevealPage from "../../helpers/AnimationRevealPage.jsx";
import OurWorkFeatures from "../fragments/VerticalImageSection.jsx";
const steps = [
  {
    number: 'I',
    description: 'Will take place in Ilesa, Osun State.',
  },
  {
    number: 'II',
    description: 'A local organization, Destiny Development Initiative, will operate an education center equipped with devices preloaded with ulesson software for 15 students.  The students will be randomly selected from neighboring public schools.',
  },
  {
    number: 'III',
    description: 'Students will go through an intensive one-year after-school program.  We will use Ulesson’s analytics software to monitor performance.',
  },
  {
    number: 'IV',
    description: 'Students will take mock WAEC and NECO exams at the start of the program; they will also take these exams every three months for the rest of the program (total of five exams).',
  },
  {
    number: 'V',
    description: 'Two groups of students will serve as the control for this experiment.',
    children: [
      {
        number: 'i',
        description: (<p><b>Group One:</b> Our partner-organization recently moved these students from public schools to private schools in the area, where they are on scholarship.  These students will not have access to the after-school program.  They will take the same exams as the program participants.  We shall compare the results of the two groups.</p>),
      },
      {
        number: 'ii',
        description: (<p><b>Group One:</b> Public school students not participating in the after-school program.</p>),
      },
    ],
  },
]



const OurWork = () => {
  return (
    <>
      <Head>
        <title>Kathēkon - Our Work</title>
        <meta name="og:title" property="og:title" content="Kathēkon - Our Work"/>
        <meta name="twitter:card" content="photo" />
        <meta name="twitter:title" content="Kathēkon - Our Work" />
        <meta property="og:image" content="https://res.cloudinary.com/tolulope-od/image/upload/v1605094663/Kathekon-redesign-13-13_e9qpnx.png" />
        <meta name="twitter:description" content="Part of our work at Kathēkon is to improve the quality of education available to children from low-income families. We will fund free schools focused on bridging this quality gap as we continue to identify other transformative interventions." />
        <meta name="twitter:image:src" content="https://res.cloudinary.com/tolulope-od/image/upload/v1605094663/Kathekon-redesign-13-13_e9qpnx.png" />
        <meta name="description" content="Part of our work at Kathēkon is to improve the quality of education available to children from low-income families. We will fund free schools focused on bridging this quality gap as we continue to identify other transformative interventions." />
        <meta name="keywords" content="our work ulesson khan academy kathēkon scholarships transforming nigeria kathekon education civil society social welfare investment africa" />
      </Head>
      <AnimationRevealPage>
        <OurWorkFeatures />
      </AnimationRevealPage>
    </>
  );
};

export default OurWork;
