import * as React from "react";
import Head from 'next/head';
import styled from "styled-components";
import Link from 'next/link';
import tw from 'twin.macro';
import dayjs from "dayjs";
import { Formik } from 'formik';
import { toast } from 'react-toastify';
import * as Yup from 'yup'
import { ReactComponent as DownloadIcon } from "feather-icons/dist/icons/download.svg";
import { css } from "styled-components/macro"; //eslint-disable-line
import { isEmpty } from '../../helpers/truncateText';
import { PrimaryButton } from '../misc/Buttons';
import fileToBase64 from '../../utils/fileConverter';
import APIHelper from '../../helpers/APIHelpers';

import { Upload } from '../forms/Inputs';
import AlternatingLoader from '../loaders/AlternatingLoader';
import AuthContext from '../../context/AuthContext';

const StyledDiv = tw.div`font-display min-h-screen text-secondary-500 lg:p-8 overflow-hidden`;
const Container = tw.div`grid grid-cols-13`;

const ResponsiveStyledDiv = styled(StyledDiv)`
  @media(max-width: 414px) {
    padding: 0 !important;
  }
`;
const Form = tw.form`mx-auto`;

const MotionSection = styled.section`
  background: white;
  padding: 2rem;
  justify-self: center;
  align-self: center;
  width: 100%;
  max-width: 1080px;
  
  @media(min-width: 1440px) {
    margin-top: 1rem;
  }
  
  @media(max-width: 768px) {
    padding: 2rem;
  }
  
  @media(max-width: 414px) {
    padding: 1rem;
  }
`;

const CreateButton = styled(PrimaryButton)`
  ${(props) => props.shadowed ?
  tw`shadow-lg text-sm transition duration-300 transform focus:outline-none focus:shadow-outline hover:bg-gray-100 hover:text-primary-700 hocus:-translate-y-px hocus:shadow-xl`
  : tw`bg-blue-100 text-primary-700 text-sm transition duration-300 transform focus:outline-none focus:shadow-outline hocus:-translate-y-px`
}
  .icon {
    display: inline;
  }
  .text {
    ${tw`ml-3`}
  }
`;

// applicationStartDate: "2020-11-14T00:00:00.000Z"
// createdBy: {_id: "5fa6f1324ab3a590c62b4709", firstName: "Kathekon", lastName: "Admin"}
// createdOn: "2020-11-14T20:21:37.115Z"
// deleted: false
// description: "A grant is an amount of money that a government or other institution gives to an individual or to an organization for a particular purpose such as education or home improvements. They'd got a special grant to encourage research."
// expiryDate: "2021-11-14T00:00:00.000Z"
// grantId: "acfe3d5f-b40e-4397-a813-361f04f982c4"
// grantName: "New 2020 Grant Maestar"
// grantType: "grant"
// image: "https://res.cloudinary.com/tolulope-od/image/upload/v1605063040/cytonn-photography-vWchRczcQwM-unsplash_suwbc8.jpg"
// requirements: []
// status: "ACTIVE"
// thematicAreas: []
// updatedOn: "2020-11-14T20:21:37.115Z"
const SingleGrant = (props) => {
  const [grantDetailsModalOpen, setGrantDetailsModalOpen] = React.useState(false);
  const { state } = React.useContext(AuthContext);
  let formSubmitting = false;
  return (
    <React.Fragment>
      <Head>
        <title>Kathēkon {props.grant?.grantType === 'grant' ? 'Grant' : 'Scholarship'} : {props?.grant.grantName}</title>
        <meta name="description"
              content={props?.grant?.description} />
        <meta name="keywords"
              content={props?.grant?.description?.split(' ')}/>
        <meta name="og:title" property="og:title" content={`Kathēkon ${props.grant?.grantType === 'grant' ? 'Grant' : 'Scholarship'} : ${props?.grant.grantName}`}/>
        {/*Photo by Micheile Henderson on Unsplash */}
        <meta property="og:image"
              content="https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80"/>
        <meta property="og:description" content={props?.grant?.description} />
        <meta name="twitter:title" content={`Kathēkon ${props.grant?.grantType === 'grant' ? 'Grant' : 'Scholarship'} : ${props?.grant.grantName}`}/>
        <meta name="twitter:card" content="photo"/>
        <meta name="twitter:description"
              content={props?.grant?.description} />
        <meta name="twitter:image:src"
              content="https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80"/>
      </Head>
      <Container>
        <MotionSection>
          <ResponsiveStyledDiv>
            <div className="w-full flex justify-between">
              <div className="flex-1 min-w-0">
                <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                  {props?.grant.grantName}
                </h2>
                <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
                  <div className="mt-5 flex items-center text-sm text-gray-900">
                    <svg className="flex-shrink-0 mr-3 h-5 w-5 text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    Closing on {dayjs(props?.grant?.expiryDate).format('DD MMMM YYYY')}
                  </div>
                </div>
              </div>
              <div className="mt-5 flex lg:mt-0 lg:ml-4">
                {
                  !state.isAuthenticated && (
                    <span className="sm:ml-3">
                      <Link href="/login">
                        <a>
                          <p className="text-base underline font-semibold">Login to apply</p>
                        </a>
                      </Link>
                    </span>
                  )
                }
                {
                  state.isAuthenticated && state.user.userType === "REQUESTER" ? (
                    <span className="sm:ml-3">
                      <button onClick={() => setGrantDetailsModalOpen(true)} type="button" className="inline-flex items-center px-6 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-primary-700 bg-blue-200 hover:bg-primary-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Apply
                      </button>
                    </span>
                  ) : null
                }

              </div>
            </div>
            <div className="w-full">
              <div className="flex flex-wrap">
                <div className="w-full md:w-1/2 order-1 md:order-2">
                  <div className="max-w-md leading-loose tracking-tight">
                    <h1 className="font-bold my-12">Description</h1>
                    <p className="mb-8">{props?.grant?.description}</p>
                  </div>
                </div>
                <div className={`w-full md:w-1/2 order-2 md:order-${props?.grant?.grantTpe === 'grant' ? 4 : 2} md:float-right`}>
                  <div className="max-w-lg leading-loose tracking-tight">
                    <p className="font-bold my-4 md:my-12">Documents</p>
                    In addition to meeting the minimum requirements, you will need to download and fill the document below and submit it with your application.
                    <br />
                    <div style={{ marginTop: '1rem' }}>
                      <a href={props?.grant?.upload} download={`${props?.grant?.grantName} - Requirements`}>
                        <CreateButton type="submit" style={{ fontWeight: '500' }}>
                          <DownloadIcon className="icon w-5 h-5" />
                          <span className="text">Download Document</span>
                        </CreateButton>
                      </a>
                    </div>
                  </div>
                </div>
                <div className={`w-full md:w-1/2 order-2 md:order-${props?.grant?.grantTpe === 'grant' ? 2 : 4}`}>
                  {
                    props?.grant?.grantType === 'grant' ? (
                      <div className="max-w-md leading-loose tracking-tight mr-4">
                        <p className="font-bold my-4 md:my-10">Thematic Areas</p>
                        {props?.grant?.thematicAreas && props?.grant?.thematicAreas?.length > 0
                          ? (
                            <ul className="flex flex-wrap justify-between flex-col">
                              {
                                props?.grant?.thematicAreas?.map((thematicArea) => (
                                  <li className="pb-4" key={thematicArea}>
                                    <p>{thematicArea}</p>
                                  </li>
                                ))
                              }
                            </ul>
                          ) : (<h4>There are thematic areas for this grant</h4>)}
                      </div>
                    ) : null
                  }
                </div>
                <div className={`w-full md:w-1/2 order-2 md:order-${props?.grant?.grantTpe === 'grant' ? 4 : 2} md:float-right`}>
                  <div className="max-w-lg leading-loose tracking-tight">
                    <p className="font-bold my-4 md:my-12">Requirements</p>
                    <ul className="flex flex-wrap justify-between flex-row md:flex-col">
                      {
                        !isEmpty(props?.grant?.requirements)
                        ? props?.grant?.requirements.map((requirement) => (
                          <li className="pb-2" key={requirement}>
                            {requirement}
                          </li>
                        )) : (
                            <h4>
                              There is no requirement criteria at this time.
                            </h4>
                          )
                      }
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </ResponsiveStyledDiv>
        </MotionSection>

        <div className={`${grantDetailsModalOpen ? 'fixed z-20 inset-0 overflow-y-auto' : 'hidden'}`}>
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

              {/*Background overlay, show/hide based on modal state.*/}

              {/*Entering: "ease-out duration-300"*/}
              {/*  From: "opacity-0"*/}
              {/*  To: "opacity-100"*/}
              {/*Leaving: "ease-in duration-200"*/}
              {/*  From: "opacity-100"*/}
              {/*  To: "opacity-0"*/}
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"/>
            </div>

            {/*This element is to trick the browser into centering the modal contents*/}
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                    <svg className="h-6 w-6 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <circle cx="12" cy="12" r="2"/>
                      <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14" />
                    </svg>
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="font-bold text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                      {props?.grant?.grantName} Application
                    </h3>
                    <div className="my-2 py-4">
                      <Formik
                        initialValues={{ upload: null }}
                        onSubmit={async (values, err) => {
                          try {
                            // convert file to base64
                            const b64File = await fileToBase64(values.upload);

                            const response = await APIHelper.post(`/grants/application/${props?.grant?._id}`, {
                              applicationDocument: b64File,
                            });

                            toast.success(response.data.message);
                            setGrantDetailsModalOpen(false);
                            formSubmitting = false;
                          } catch (error) {
                            if (error.response && error.response.data.message === 'Validation error') {
                              formSubmitting = !formSubmitting;
                              return err.setErrors(error.response.data.error)
                            } else if (error.response && error.response.data.message !== 'Validation error') {
                              formSubmitting = !formSubmitting;
                              return toast.error(error.response.data.message);
                            } else {
                              formSubmitting = !formSubmitting;
                              return toast.error('Something went wrong! Please try again');
                            }
                          }
                        }}
                        validationSchema={Yup.object().shape({
                          upload: Yup.mixed().required("Please add the required document"),
                        })}
                      >
                        {(props) => {
                          const { values, touched, errors, isSubmitting, handleBlur, handleSubmit, setFieldValue } = props;
                          formSubmitting = isSubmitting;
                          return (
                            <Form id="application-form" onSubmit={handleSubmit} style={{ display: 'block' }}>
                              <div>
                                <Upload
                                  allow=".pdf"
                                  name={"upload"}
                                  placeholder="Application Document"
                                  handleChange={(event) => {
                                    setFieldValue("upload", event.currentTarget.files[0]);
                                  }}
                                  handleBlur={handleBlur}
                                  errors={errors}
                                  touched={touched}
                                  values={values}
                                  label={"Application Document"}
                                />
                              </div>
                            </Form>
                          )}}
                      </Formik>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                {
                  formSubmitting ? (
                    <AlternatingLoader className={"icon"}>
                      <span className="text">Loading</span>
                    </AlternatingLoader>
                  ) : (
                    <button disabled={formSubmitting}  form="application-form" type="submit" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm">
                      Submit
                    </button>
                  )
                }
                <button onClick={() => setGrantDetailsModalOpen(false)} type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </React.Fragment>
  )
};

export default SingleGrant;
