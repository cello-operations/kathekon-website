import React from "react";
import Head from 'next/head';
import Link from 'next/link';
import styled from "styled-components";
import tw from 'twin.macro';
import { ReactComponent as ArrowRight } from 'feather-icons/dist/icons/arrow-right.svg';
import { css } from "styled-components/macro"; //eslint-disable-line
import { truncateText } from '../../helpers/truncateText';
import AuthContext  from '../../context/AuthContext';

const MotionSection = styled.section`
  background: white;
  padding: 2rem;
  justify-self: center;
  align-self: center;
  
  @media(min-width: 1440px) {
    margin-top: 1rem;
  }
  
  @media(max-width: 768px) {
    padding: 1rem;
  }
`;

const StyledDiv = tw.div`font-display min-h-screen text-secondary-500 lg:p-8 overflow-hidden`;
const Container = tw.div`grid grid-cols-13`;

const ResponsiveStyledDiv = styled(StyledDiv)`
  @media(max-width: 414px) {
    padding: 0 !important;
  }
`;

const SubmitButton = styled.button`
  ${tw`mt-5 tracking-wide font-semibold bg-primary-500 text-gray-100 w-auto py-4 rounded-lg hover:bg-primary-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
  .icon {
    ${tw`w-6 h-6 -ml-2`}
  }
  .text {
    ${tw`ml-3`}
  }
`;

const Text = tw.h5`text-primary-500 text-3xl lg:text-4xl font-bold px-3 pt-0`;
const SubText = tw.p`text-primary-100 mt-3 py-3`;

export const Image = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`h-64 w-full bg-cover bg-center rounded-md`}
`;

const Scholarships = (props) => {
  const { state } = React.useContext(AuthContext)
  return (
    <>
      <Head>
        <title>Kathēkon - Scholarships</title>
        <meta name="description"
              content="We implore students whose values are consistent with ours, whose goals for the future are reflected in ours, and whose vision for change is as radical, urgent, and pragmatic as ours, to apply for grants."/>
        <meta name="keywords"
              content="kathēkon grants scholarship school children Nigeria education civil society transformation change"/>
        <meta name="og:title" property="og:title" content="Kathēkon - Grants"/>
        <meta property="og:image"
              content="https://images.unsplash.com/photo-1541000020894-321f175f5a69?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80"/>
        <meta property="og:description"
              content="We implore students whose values are consistent with ours, whose goals for the future are reflected in ours, and whose vision for change is as radical, urgent, and pragmatic as ours, to apply for grants."/>
        <meta name="twitter:title" content="Kathēkon - Grants"/>
        <meta name="twitter:card" content="photo"/>
        <meta name="twitter:description"
              content="We implore students whose values are consistent with ours, whose goals for the future are reflected in ours, and whose vision for change is as radical, urgent, and pragmatic as ours, to apply for grants."/>
        <meta name="twitter:image:src"
              content="https://images.unsplash.com/photo-1541000020894-321f175f5a69?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80"/>
      </Head>
      <Container>
        {/*<GrantsBanner />*/}
        <ResponsiveStyledDiv>
          <MotionSection>
            <div className="w-full flex-grow flex justify-center items-center ">

              <div className="py-2 text-center">

                <div className="text-center max-w-4xl lg:mx-auto mt-6 px-3 lg:px-0">
                  <Text>Students can apply for scholarships</Text>
                  <SubText>We implore students whose values are consistent with ours, whose goals for the future are reflected in ours, and whose vision for change is as radical, urgent, and pragmatic as ours, to apply for grants.</SubText>
                </div>

                <div className="h-1 opacity-0.5 bg-gray-500 w-40 block mx-auto rounded-sm mt-3 mb-4"/>
                {
                    state.isAuthenticated && (
                      <center>
                      <Link href="/applications">
                      <SubmitButton>
                        <React.Fragment>
                          <span className="text mr-6">{
                            state.user?.userType !== 'ADMIN' ? 'My ' : ''
                          } Applications</span>
                          <ArrowRight className="icon" />
                          <span className="ml-5"/>
                          </React.Fragment>
                      </SubmitButton>
                      </Link>
                      </center>
                    )
                  }
                <div className="w-full flex flex-row flex-wrap justify-center items-center align-center mt-8 mx-auto">
                  {
                    props?.grants?.Scholarships < 1 ? (
                      <h4>There are no available scholarships at the moment</h4>
                    ) : props.grants?.Scholarships.map((grant) => (
                      <div key={grant._id} className="w-auto max-w-sm">
                        <div className="bg-white shadow-lg rounded-lg px-4 py-6 mx-4 my-4">
                          <Image
                            imageSrc={'https://images.unsplash.com/photo-1541000020894-321f175f5a69?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80'}/>
                          <br/>
                          <div className="flex w-full justify-start py-1">
                            <span
                              className="px-2 text-xs leading-5 font-semibold rounded-full bg-green-200 text-green-900">
                            {grant?.status}
                          </span>
                          </div>
                          <div style={{fontSize: '1.025rem'}} className="w-auto mt-2 block mx-auto rounded-sm">
                            <h6 className="font-bold truncate">
                              {grant.grantName}
                            </h6>
                          </div>
                          {/*<div className="mx-auto h-40 bg-gray-200 rounded-md"/>*/}
                          {/*<div className="h-4 bg-gray-200 w-40 mt-8 block mx-auto rounded-sm"/>*/}
                          <div style={{fontSize: '0.85rem'}} className="w-auto mt-2 block mx-auto rounded-sm max h-50">
                            <p className="font-sm mt-3 py-3">
                              {truncateText(grant.description, 120, ' ...')}
                            </p>
                          </div>
                          <div className="flex justify-end mt-4">
                            <Link href={`/${grant.grantType}s/${grant._id}`}>
                              <a type="button"
                                 className="bg-blue-200 text-blue-700 text-sm font-semibold px-6 py-2 rounded-lg">
                                View More
                              </a>
                            </Link>

                            {/*<div className="rounded-sm h-8 w-20 px-4 bg-green-300">*/}
                            {/*  View More*/}
                            {/*</div>*/}
                          </div>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
            {/*<GrantsTabs tabs={props.grants} />*/}
          </MotionSection>
        </ResponsiveStyledDiv>
      </Container>
    </>
  );
};

export default Scholarships;
