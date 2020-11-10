import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Head from 'next/head';
import Link from 'next/link';
import Router from 'next/router';
import { toast } from 'react-toastify';
import jwtDecode from "jwt-decode";
import fromUnixTime from "date-fns/fromUnixTime";
import Cookies from "universal-cookie";
import AnimationRevealPage from "../../helpers/AnimationRevealPage.jsx";
import { Container as ContainerBase } from "../misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import illustration from "../../public/images/login-illustration.svg";
import { ReactComponent as LoginIcon } from "feather-icons/dist/icons/log-in.svg";
import { FormInput } from '../forms/Inputs.jsx';
import AlternatingLoader from '../loaders/AlternatingLoader.jsx';
import AuthContext from '../../context/AuthContext';
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
  ${tw`m-12 xl:m-16 w-full max-w-sm bg-contain bg-center bg-no-repeat`}
`;

const Login = ({
  logoLinkUrl = "/",
  illustrationImageSrc = illustration,
  headingText = "Sign In To Kathekon",
  submitButtonText = "Sign In",
  SubmitButtonIcon = LoginIcon,
  forgotPasswordUrl = "#",
  signupUrl = "/sign-up",

}) => {
  const authContext = React.useContext(AuthContext);
  return (
    <React.Fragment>
      <Head>
        <title>Kathekon - Login</title>
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
                  <DividerText>Sign in track your requsts</DividerText>
                </DividerTextContainer>
                <Formik
                  initialValues={{ email: "", password: "" }}
                  onSubmit={async (values, err) => {
                    try {
                      const request = await APIHelper.post('/auth/login', { ...values }, {});
                      const kathekonToken = request.data.data.token;
                      const cookies = new Cookies();
                      cookies.set("kathekonToken", kathekonToken, { path: "/" });
                      if (localStorage) {
                        localStorage.setItem("kathekonToken", kathekonToken);
                      }
                      const userInfo = jwtDecode(kathekonToken);
                      cookies.set("expires", fromUnixTime(userInfo.exp));
                      cookies.set("SameSite", "Strict");

                      authContext.dispatch({ type: "authenticate", payload: { ...userInfo } });
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
                      return Router.push('/');
                    } catch (error) {
                      let message = error.response?.data?.message;
  
                      if (!message) {
                        message = 'Something went wrong while processing your request';
                      }
                      err.setErrors(error.response?.data?.error)
                      // err.setFieldError('email', message);
                      // err.setFieldError('password', message);
                    }
                  }}
                  validationSchema={Yup.object().shape({
                    email: Yup.string()
                      .email("Please enter a valid email")
                      .required("Email is required"),
                    password: Yup.string().required("Password is required"),
                  })}
                >
                {(props) => {
                  const { values, touched, errors, dirty, isSubmitting, handleChange, handleBlur, handleSubmit, handleReset } = props;
                  return (
                    <Form onSubmit={handleSubmit}>
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
                    </Form>
                  )
                }}
                </Formik>
                <p tw="mt-6 text-xs text-gray-600 text-center">
                  <a href={forgotPasswordUrl} tw="border-b border-gray-500 border-dotted">
                    Forgot Password ?
                  </a>
                </p>
                <p tw="mt-8 text-sm text-gray-600 text-center">
                  Dont have an account?{" "}
                  <Link href={signupUrl}>
                  <a style={{ cursor: 'pointer' }} tw="border-b border-gray-500 border-dotted">
                    Sign Up
                  </a>
                  </Link>
                </p>
              </FormContainer>
            </MainContent>
          </MainContainer>
          <IllustrationContainer>
            <IllustrationImage imageSrc={'/images/login-illustration.svg'} />
          </IllustrationContainer>
        </Content>
      </Container>
    </AnimationRevealPage>
    </React.Fragment>
  )
};

export default Login;