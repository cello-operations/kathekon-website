import * as React from "react";
import Head from 'next/head';
import AnimationRevealPage from "../../helpers/AnimationRevealPage.jsx";
import Header from "../header/LightHeader.jsx";
import OurWorkFeatures from "../fragments/VerticalImageSection.jsx";
import TwoColWithSteps from "../fragments/TwoColWithSteps.jsx";
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
        <meta name="description" content="Kathekon:  We will partner with local NGOs to build centers
          that provide access to internet-enabled computers
          or tablets to students.
          The students will have access to online
          learning platforms like Ulesson and Khan Academy" />
        <meta name="keywords" content="our work ulesson khan academy kathēkon scholarships transforming nigeria kathekon education civil society social welfare investment africa" />
      </Head>
      <AnimationRevealPage>
        <OurWorkFeatures />
        <TwoColWithSteps
          subheading={"Our Future (2020 -2021)"}
          heading={(
            <React.Fragment>
              <span>Minimum </span>
               Viable Project
            </React.Fragment>
          )}
          imageCredits={(<span style={{ color: '#333', fontSize: '10px', fontWeight: 100 }}>Photo by <a style={{ color: '#34a4dd' }} href="https://unsplash.com/@kofoshotit?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Omotayo Kofoworola</a> on <a style={{ color: '#34a4dd' }} href="https://unsplash.com/s/photos/nigeria?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>)}
          steps={steps}
          imageSrc={'https://res.cloudinary.com/tolulope-od/image/upload/v1601225152/omotayo-kofoworola-7eHPxnhY_uA-unsplash_rgkel8.jpg'}
        />
      </AnimationRevealPage>
    </>
  );
};

export default OurWork;