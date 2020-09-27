import * as React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import OurWorkFeatures from "components/features/VerticalWithAlternateImageAndText.js";
import { NavLink, NavLinks, PrimaryLink } from 'components/headers/light';
import TwoColWithSteps from "components/features/TwoColWithSteps";

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



export default () => {
  const buttonRounded = true;
  const buttonRoundedCss = buttonRounded && tw`rounded-full`;

  const navLinks = [
    <NavLinks key={1}>
      <NavLink href="/about">About</NavLink>
      <NavLink href="/our-work">Our Work</NavLink>
      <NavLink href="/#">Partnerships</NavLink>
      <NavLink href="/#">Blog</NavLink>
      <NavLink href="/#">Scholarships</NavLink>
    </NavLinks>,
    <NavLinks key={2}>
      <NavLink href="/#" tw="lg:ml-12!">
        Login
      </NavLink>
      <PrimaryLink css={buttonRoundedCss} href="/#">
        Sign Up
      </PrimaryLink>
    </NavLinks>,
  ];
  return (
    <AnimationRevealPage>
      <Header links={navLinks} />
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
      <Footer />
    </AnimationRevealPage>
  );
};
