import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Head from 'next/head';
import Link from 'next/link';
import Router from 'next/router';
import { toast } from 'react-toastify';
import AnimationRevealPage from "../../helpers/AnimationRevealPage.jsx";
import { Container as ContainerBase } from "../misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import illustration from "../../public/images/signup-illustration.svg";
import { ReactComponent as SignUpIcon } from "feather-icons/dist/icons/user-plus.svg";
import { FormInput } from '../forms/Inputs.jsx';
import AlternatingLoader from '../loaders/AlternatingLoader.jsx';
import APIHelper from '../../helpers/APIHelpers';

const Container = tw(ContainerBase)`min-h-screen bg-primary-900 text-white font-medium flex justify-center -m-8`;
const Content = tw.div`max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1`;
const MainContainer = tw.div`lg:w-1/2 xl:w-5/12 p-6 sm:p-12`;
const LogoLink = tw.a``;
const LogoImage = tw.img`h-12 mx-auto`;
const MainContent = tw.div`mt-12 flex flex-col items-center`;
const Heading = tw.h1`text-2xl xl:text-3xl font-extrabold`;
const FormContainer = tw.div`w-full flex-1 mt-8`;
const DividerTextContainer = tw.div`my-12 border-b text-center relative`;
const DividerText = tw.div`leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform -translate-y-1/2 absolute inset-x-0 top-1/2 bg-transparent`;

const Form = tw.form`mx-auto max-w-xs`;
const SubmitButton = styled.button`
  ${tw`mt-5 tracking-wide font-semibold bg-primary-500 text-gray-100 w-full py-4 rounded-lg hover:bg-primary-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
  .icon {
    ${tw`w-6 h-6 -ml-2`}
  }
  .text {
    ${tw`ml-3`}
  }
`;
const IllustrationContainer = tw.div`sm:rounded-r-lg flex-1 bg-purple-100 text-center hidden lg:flex justify-center`;
const IllustrationImage = styled.div`
  ${props => `background-image: url("${props.imageSrc}");`}
  ${tw`m-12 xl:m-16 w-full max-w-lg bg-contain bg-center bg-no-repeat`}
`;

const SignUp = ({
  logoLinkUrl = "/",
  illustrationImageSrc = illustration,
  headingText = "Sign Up For Kathekon",
  submitButtonText = "Sign Up",
  SubmitButtonIcon = SignUpIcon,
  tosUrl = "#",
  privacyPolicyUrl = "#",
  signInUrl = "/login"
}) => (
  <React.Fragment>
    <Head>
      <title>Kathekon - Sign Up</title>
    </Head>
    <AnimationRevealPage>
    <Container>
      <Content>
        <MainContainer>
          <LogoLink href={logoLinkUrl}>
            <LogoImage style={{ cursor: 'pointer' }} src={'/images/kathekon-logo.svg'} alt="Kathekon logo" />
          </LogoLink>
          <MainContent>
            <Heading>{headingText}</Heading>
            <FormContainer>
              <DividerTextContainer>
                <DividerText>Sign up to apply for grants</DividerText>
              </DividerTextContainer>
              <Formik
                initialValues={{ email: "", firstName: "", lastName: "", password: "", phoneNumber: "" }}
                onSubmit={async (values, err) => {
                  try {
                    const request = await APIHelper.post('/auth/register', { ...values }, {});

                    Promise.resolve();
                    toast.success(`${request.data.message}`, {
                      position: "top-center",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                    });
                    return Router.push('/login');
                  } catch (error) {
                    let message = error.response?.data?.message;

                    if (!message) {
                      message = 'Something went wrong while processing your request';
                    }

                    return toast.error(`Error: ${message}`, {
                      position: "top-center",
                      autoClose: false,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                    });
                  }
                }}
                validationSchema={Yup.object().shape({
                  email: Yup.string()
                    .email("Please enter a valid email")
                    .required("Email is required"),
                  firstName: Yup.string().min(2, 'First name is too short').max(55, 'First name is too long').required("First name is required"),
                  lastName: Yup.string().min(2, 'Last name is too short').max(55, 'Last name is too long').required("Last name is required"),
                  password: Yup.string().min(2, 'Password is too short').max(55, 'Password is too long').required("Password is required"),
                  phoneNumber: Yup.string().min(10, 'Phone number cannot be less than 10 digits').max(10, 'Phone number cannot be more than 10 digits'),
                })}
              >
                {(props) => {
                  const { values, touched, errors, isSubmitting, handleChange, handleBlur, handleSubmit, handleReset } = props;

                  return (
                    <Form onSubmit={handleSubmit}>
                      <FormInput
                        type="text"
                        id="firstName"
                        name={"firstName"}
                        placeholder="First Name"
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        errors={errors}
                        touched={touched}
                        values={values}
                      />
                      <FormInput
                        type="text"
                        id="lastName"
                        name={"lastName"}
                        placeholder="Last Name"
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        errors={errors}
                        touched={touched}
                        values={values}
                      />
                      <FormInput
                        type="text"
                        id="email"
                        name={"email"}
                        placeholder="Email"
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        errors={errors}
                        touched={touched}
                        values={values}
                      />
                      <FormInput
                        type="text"
                        id="phoneNumber"
                        name={"phoneNumber"}
                        placeholder="Phone Number"
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        errors={errors}
                        touched={touched}
                        values={values}
                      />
                      <FormInput
                        type="password"
                        id="password"
                        name={"password"}
                        placeholder="Password"
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        errors={errors}
                        touched={touched}
                        values={values}
                      />
                      <SubmitButton disabled={isSubmitting} type="submit">
                        {
                          isSubmitting ? (
                            <React.Fragment>
                              <AlternatingLoader className="icon" />
                              <span className="text">Loading</span>
                            </React.Fragment>
                          ) : (
                            <React.Fragment>
                              <SubmitButtonIcon className="icon" />
                              <span className="text">{submitButtonText}</span>
                            </React.Fragment>
                          )
                        }
                      </SubmitButton>
                      <p tw="mt-6 text-xs text-gray-600 text-center">
                        I agree to abide by Kathekon's{" "}
                        <a href={tosUrl} tw="border-b border-gray-500 border-dotted">
                          Terms of Service
                        </a>{" "}
                        and its{" "}
                        <a href={privacyPolicyUrl} tw="border-b border-gray-500 border-dotted">
                          Privacy Policy
                        </a>
                      </p>

                      <p tw="mt-8 text-sm text-gray-600 text-center">
                        Already have an account?{" "}
                        <Link href={signInUrl}>
                          <a style={{ cursor: 'pointer' }} tw="border-b border-gray-500 border-dotted">
                            Sign In
                          </a>
                        </Link>
                      </p>
                    </Form>
                  )
                }}
              </Formik>
            </FormContainer>
          </MainContent>
        </MainContainer>
        <IllustrationContainer>
          <IllustrationImage imageSrc={'/images/signup-illustration.svg'} />
        </IllustrationContainer>
      </Content>
    </Container>
   </AnimationRevealPage>
  </React.Fragment>
);

export default SignUp;