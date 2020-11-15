import React, { useState } from "react";
import { motion } from "framer-motion";
import { Formik } from "formik";
import * as Yup from "yup";
import dayjs from "dayjs";
import { toast } from 'react-toastify';
import { ReactComponent as DownloadIcon } from "feather-icons/dist/icons/download.svg";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { Container } from "../misc/Layouts.jsx";
import { SectionHeading } from "../misc/Headings.jsx";
import { PrimaryButton, PrimaryLink } from "../misc/Buttons.jsx";
import {
  Post, PostContainer, Posts, Info,
  Title, CreationDate, Description,
  Category, Image,
} from '../blog/BlogPosts.jsx'
import Modal from '../modal/Modal.jsx';
import OpenModalButton from '../modal/OpenModalButton.jsx';
import {
  FormInput, TextArea, Select,
  Option, Upload
} from '../forms/Inputs.jsx';
import AlternatingLoader from '../loaders/AlternatingLoader.jsx';
import AuthContext from '../../context/AuthContext';
import APIHelper from "../../helpers/APIHelpers.js";
import fileToBase64 from '../../utils/fileConverter';
import { truncateText } from '../../helpers/truncateText';
import GrantApplications from '../grants/GrantApplications.jsx';

const HeaderRow = tw.div`flex justify-between items-center flex-col xl:flex-row`;
const Header = tw(SectionHeading)``;
const TabsControl = tw.div`flex flex-wrap bg-gray-200 px-2 py-2 rounded leading-none mt-12 xl:mt-0`;
// const PaddedBackground = tw.div`max-w-screen-xl mx-auto px-6 py-6 lg:px-8 lg:py-8`;
const ContentWithPaddingXl= tw.div`max-w-screen-xl mx-auto py-10 lg:py-12`;
const Form = tw.form`mx-auto`;

const TabControl = styled.div`
  ${tw`cursor-pointer px-6 py-3 mt-2 sm:mt-0 sm:mr-2 last:mr-0 text-gray-600 font-medium rounded-sm transition duration-300 text-sm sm:text-base w-1/2 sm:w-auto text-center`}
  &:hover {
    ${tw`bg-gray-300 text-gray-700`}
  }
  ${props => props.active && tw`bg-primary-500! text-gray-100!`}
  }
`;

const ModalHeading = styled.div`
  height: 20px;
  padding: 3rem;
  text-align: center;

  h4 {
    font-size: 28px;
    font-weight: bold;
  }
`;

const ModalContentWrapper = styled.div`
  padding: 3rem;
  width: 100%;
  form {
    display: grid;
    grid-template-columns: 1fr 1fr;

     > div {
       padding: 1rem;
     }
  }

  @media (max-width: 768px) {
    form {
      grid-template-columns: 1fr;
    }
  }
`;

const DetailWrapper = styled.div`
  padding: 1rem 0;
  h5 {
    font-weight: bold;
    padding: .5rem 0;
  }
`;

const SubmitButton = styled.button`
  ${tw`mt-5 tracking-wide font-semibold bg-primary-500 text-gray-100 w-full py-4 rounded-lg hover:bg-primary-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
  .icon {
    ${tw`w-6 h-6 -ml-2`}
  }
  .text {
    ${tw`ml-3`}
  }
`;

const TabContent = tw(motion.div)`mt-6 flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12`;

const CardHoverOverlay = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.5);
  ${tw`absolute inset-0 flex justify-center items-center`}
`;
const CreateButton = styled(PrimaryButton)`
  ${(props) => props.shadowed ?
    tw`shadow-lg uppercase text-sm transition duration-300 transform focus:outline-none focus:shadow-outline hover:bg-gray-100 hover:text-primary-700 hocus:-translate-y-px hocus:shadow-xl`
    : tw`bg-gray-100 text-primary-700 text-sm transition duration-300 transform focus:outline-none focus:shadow-outline hocus:-translate-y-px`
  }
  .icon {
    display: inline;
  }
  .text {
    ${tw`ml-3`}
  }
`;

const CardsWithTabSwitch = ({
  heading = "Available funding options",
  tabs = {
    All: [{
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Chicken Chilled",
        content: "Chicken Main Course",
        price: "$5.99",
        rating: "5.0",
        reviews: "87",
        url: "#",
        imageSrc:
          "https://images.unsplash.com/photo-1499678329028-101435549a4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80",
        category: "Grants",
        date: "April 21, 2020",
        title: "Introducing the Femi Falana Grant",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        url: "https://timerse.com",
        featured: true
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1582254465498-6bc70419b607?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Samsa Beef",
        content: "Fried Mexican Beef",
        price: "$3.99",
        rating: "4.5",
        reviews: "34",
        url: "#",
        imageSrc:
          "https://images.unsplash.com/photo-1499678329028-101435549a4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80",
        category: "Scholarships",
        date: "April 21, 2020",
        title: "Random Scholarship for you",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        url: "https://timerse.com",
        featured: true
      }],
    Grants: [
      {
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Chicken Chilled",
        content: "Chicken Main Course",
        price: "$5.99",
        rating: "5.0",
        reviews: "87",
        url: "#",
        imageSrc:
          "https://images.unsplash.com/photo-1499678329028-101435549a4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80",
        category: "Grants",
        date: "April 21, 2020",
        title: "Another Two",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        url: "https://timerse.com",
        featured: true
      }
    ],
    Scholarships: [
      {
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Secure you future",
        content: "Incredible Scholarships await you",
        price: "$5.99",
        rating: "5.0",
        reviews: "87",
        url: "#",
        imageSrc:
          "https://images.unsplash.com/photo-1499678329028-101435549a4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80",
        category: "Scholarships",
        date: "April 21, 2020",
        title: "Another One",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        url: "https://timerse.com",
        featured: true
      }
    ],
  }
}) => {
  /*
   * To customize the tabs, pass in data using the `tabs` prop. It should be an object which contains the name of the tab
   * as the key and value of the key will be its content (as an array of objects).
   * To see what attributes are configurable of each object inside this array see the example above for "Starters".
   */
  const tabsKeys = Object.keys(tabs);
  const [activeTab, setActiveTab] = useState(tabsKeys[0]);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [grantDetailsModalOpen, setGrantDetailsModalOpen] = React.useState(false);
  const [grantDetails, setGrantDetails] = React.useState({});
  const [userWindow, setUserWindow] = React.useState({});
  const [userGrantApplications, setUserGrantApplications] = React.useState([]);
  const [grantApplicationsCount, setGrantApplicationsCount] = React.useState({
    total: 0,
    current: 0,
  });
  const { state } = React.useContext(AuthContext);

  const handleOpenGrantDetails = (details) => {
    setGrantDetails(details);
    setGrantDetailsModalOpen(true);
  }

  const handleOpenModal = (open) => {
    setModalOpen(open);
  }

  const getGrantApplications = async () => {
    try {
      const request = await APIHelper.get('/grants/applications');
      const applications = request.data.data.grantApplications.length
        <= 0
        ? []
        : request.data.data.grantApplications.reduce((accumulator, grantApplication) => {
          accumulator.push(grantApplication.grantId);
          return accumulator;
        }, []);
      setUserGrantApplications(request.data.data.grantApplications);
      setGrantApplicationsCount({
        total: request.data.meta.totalCount,
        current: request.data.meta.currentCount,
      })
      state.isAuthenticated ? tabs.Applications = applications : delete tabs.Applications;
    } catch (error) {
      return error
    }
  }

  React.useEffect(() => {
    console.log(state);
    setUserWindow(window)
    if (state.isAuthenticated) {
      getGrantApplications();
    }

    if (!state.isAuthenticated) {
      delete tabs.Applications
    }
  }, [grantDetails])

  return (
    <Container style={{ fontFamily: 'Raleway' }}>
      <ContentWithPaddingXl>
        <HeaderRow style={{ fontFamily: 'Raleway' }}>
          <Header>{heading}</Header>
          <TabsControl>
            {Object.keys(tabs).map((tabName, index) => (
              <TabControl key={index} active={activeTab === tabName} onClick={() => setActiveTab(tabName)}>
                {tabName}
              </TabControl>
            ))}
          </TabsControl>
        </HeaderRow>
        <div style={{ marginTop: '2rem' }}>
        {
          state.isAuthenticated && state.user.userType === "ADMIN" || state.user.userType === "SUPER_ADMIN"
            ? (
            <OpenModalButton handleButtonClick={() => handleOpenModal(true)}>Create New Grant</OpenModalButton>
            ) : (
              <div />
            )
        }
        
        </div>
          <Modal isOpen={modalOpen} handleClose={() => handleOpenModal(false)}>
            <ModalHeading>
              <h4>Create Grant</h4>
              <p>Fill all required fields to create a new grant</p>
            </ModalHeading>
            <ModalContentWrapper>
            <Formik
                initialValues={{ grantName: "", description: "", status: "", expiryDate: "", applicationStartDate: "", grantType: "", upload: null }}
                onSubmit={async (values, err) => {
                  try {
                    // convert file to base64
                    const b64File = await fileToBase64(values.upload);
                    
                    const response = await APIHelper.post('/grants', {
                      ...values,
                      status: values.status.toUpperCase(),
                      grantType: values.grantType.toLowerCase(),
                      upload: b64File
                    });

                    toast.success(response.data.message);
                    setModalOpen(false);
                  } catch (error) {
                    if (error.response && error.response.data.message === 'Validation error') {
                      return err.setErrors(error.response.data.error)
                    } else if (error.response && error.response.data.message !== 'Validation error') {
                      return toast.error(error.response.data.message);
                    } else {
                      return toast.error('Something went wrong! Please try again');
                    }
                  }  
                }}
                validationSchema={Yup.object().shape({
                  grantName: Yup.string().required("Grant name is required"),
                  description: Yup.string().required("Grant description is required"),
                  status: Yup.string().required("Please select a status"),
                  expiryDate: Yup.date().required("Please input an expiry date"),
                  applicationStartDate: Yup.date().required("Please input a start date for application"),
                  grantType: Yup.string().required("Please select a grant type"),
                  upload: Yup.mixed().required("Please add a supporting document format"),
                })}
              >
                {(props) => {
                  const { values, touched, errors, isSubmitting, handleChange, handleBlur, handleSubmit, setFieldValue } = props;

                  return (
                    <Form onSubmit={handleSubmit}>
                      <div>
                        <FormInput
                          type="text"
                          id="grantName"
                          name={"grantName"}
                          placeholder="Grant Name"
                          handleChange={handleChange}
                          handleBlur={handleBlur}
                          errors={errors}
                          touched={touched}
                          values={values}
                          label={"Grant Name"}
                        />
                        <TextArea
                          type="text"
                          id="description"
                          name={"description"}
                          placeholder="Description"
                          handleChange={handleChange}
                          handleBlur={handleBlur}
                          errors={errors}
                          touched={touched}
                          values={values}
                          label={"Description"}
                        />
                        <Select
                          id="status"
                          name={"status"}
                          placeholder="Status"
                          handleChange={handleChange}
                          handleBlur={handleBlur}
                          errors={errors}
                          touched={touched}
                          values={values}
                          label={"Status"}
                        >
                          {
                            ['--Please select a value', 'Active', 'Closed', 'Evaluating', 'Expired', 'Archived'].map((value, index) => (
                              <Option key={value} value={index === 0 ? '' : value}>
                                {value}
                              </Option>
                            ))
                          }
                        </Select>
                        <Upload
                          name={"upload"}
                          placeholder="upload"
                          handleChange={(event) => {
                            setFieldValue("upload", event.currentTarget.files[0]);
                          }}
                          handleBlur={handleBlur}
                          errors={errors}
                          touched={touched}
                          values={values}
                          label={"Requirements"}
                        />
                      </div>
                      <div>
                      <FormInput
                          type="date"
                          id="applicationStartDate"
                          name={"applicationStartDate"}
                          placeholder="Application Start Date"
                          handleChange={handleChange}
                          handleBlur={handleBlur}
                          errors={errors}
                          touched={touched}
                          values={values}
                          label={"Application Start"}
                        />
                        <FormInput
                          type="date"
                          id="expiryDate"
                          name={"expiryDate"}
                          placeholder="Expiry Date"
                          handleChange={handleChange}
                          handleBlur={handleBlur}
                          errors={errors}
                          touched={touched}
                          values={values}
                          label={"Expiry"}
                        />
                        <br />
                        <br />
                        <Select
                          type="text"
                          id="grantType"
                          name={"grantType"}
                          placeholder="Grant Type"
                          handleChange={handleChange}
                          handleBlur={handleBlur}
                          errors={errors}
                          touched={touched}
                          values={values}
                          label={"Grant Type"}
                        >
                         {
                            ['--Please select a value', 'Grant', 'Scholarship'].map((value, index) => (
                              <Option key={value} value={index === 0 ? '' : value}>
                                {value}
                              </Option>
                            ))
                         } 
                        </Select>
                        <SubmitButton disabled={isSubmitting} type="submit">
                        {
                          isSubmitting ? (
                            <React.Fragment>
                              <AlternatingLoader className="icon" />
                              <span className="text">Loading</span>
                            </React.Fragment>
                          ) : (
                            <React.Fragment>
                              <span className="text">Create</span>
                            </React.Fragment>
                          )
                        }
                      </SubmitButton>
                      </div>
                    </Form>
                  )}}
                </Formik>
            </ModalContentWrapper>
          </Modal>
        {tabsKeys.map((tabKey, index) => (
          <TabContent
            key={index}
            variants={{
              current: {
                opacity: 1,
                scale:1,
                display: "flex",
              },
              hidden: {
                opacity: 0,
                scale:0.8,
                display: "none",
              }
            }}
            transition={{ duration: 0.4 }}
            initial={activeTab === tabKey ? "current" : "hidden"}
            animate={activeTab === tabKey ? "current" : "hidden"}
          >
            <Posts key={index}>
              {activeTab !== "Applications" && tabs[tabKey].map((post, index) => (
                <PostContainer key={index} featured={true}>
                  <Post className="group" as="a" onClick={() => handleOpenGrantDetails(post)}>
                    <Image imageSrc={post.image} />
                    <Info>
                      <Category>{post.grantType}</Category>
                      <CreationDate>{dayjs(post.createdOn).format('DD MMMM YYYY')}</CreationDate>
                      <Title>{post.grantName}</Title>
                      {post.description && <Description>{truncateText(post.description, 400)}</Description>}
                    </Info>
                  </Post>
                </PostContainer>
              ))}
            
            </Posts>
            <Posts style={{ width: '100%' }}>
             {
               activeTab === "Applications" && (<GrantApplications applications={userGrantApplications} grantsCount={grantApplicationsCount} />)
             }
            </Posts>
          </TabContent>
        ))}
         <Modal isOpen={grantDetailsModalOpen} handleClose={() => {
           setGrantDetailsModalOpen(false);
           setGrantDetails({});
          }}>
         <ModalHeading>
            <h4>{grantDetails.grantName}</h4>
          </ModalHeading>
          <ModalContentWrapper style={{ height: userWindow.innerHeight * 0.8 ?? '400px', overflow: 'auto' }}>
            <DetailWrapper>
              <h5>Type:</h5>
              {grantDetails.grantType && `${grantDetails?.grantType[0]?.toUpperCase()}${grantDetails?.grantType?.slice(1)}`}
            </DetailWrapper>
            <DetailWrapper>
              <h5>Description:</h5>
              {grantDetails.description}
            </DetailWrapper>
            <DetailWrapper>
              <h5>Application Requirement:</h5>
              You will be required to fulfill the requirements stated in the document which can be downloaded below, if required, you will also need to fill and submit the document also.
              
              <div style={{ marginTop: '1rem' }}>
                <a href={grantDetails.upload} download={`${grantDetails.grantName} - Requirements`}>
                  <CreateButton type="submit">
                    <DownloadIcon className="icon" />
                    <span className="text">Download Document</span>
                  </CreateButton>
                </a>
              </div>
            </DetailWrapper>
            <DetailWrapper>
              <h5>Applications Start:</h5>
              {dayjs(grantDetails.applicationStartDate).format('DD MMMM YYYY')}
            </DetailWrapper>
            <DetailWrapper>
              <h5>Applications Expire:</h5>
              {dayjs(grantDetails.expiryDate).format('DD MMMM YYYY')}
            </DetailWrapper>
            <DetailWrapper>
              <h5>Created On:</h5>
              {dayjs(grantDetails.createdOn).format('DD MMMM YYYY')}
            </DetailWrapper>
            {
              state.isAuthenticated && state.user.userType === "REQUESTER" ? (
              <Formik
                initialValues={{ upload: null }}
                onSubmit={async (values, err) => {
                  try {
                    // convert file to base64
                    const b64File = await fileToBase64(values.upload);
                    
                    const response = await APIHelper.post(`/grants/application/${grantDetails._id}`, {
                      applicationDocument: b64File,
                    });

                    toast.success(response.data.message);
                    setGrantDetailsModalOpen(false);
                  } catch (error) {
                    console.dir(error);
                    if (error.response && error.response.data.message === 'Validation error') {
                      return err.setErrors(error.response.data.error)
                    } else if (error.response && error.response.data.message !== 'Validation error') {
                      return toast.error(error.response.data.message);
                    } else {
                      return toast.error('Something went wrong! Please try again');
                    }
                  }  
                }}
                validationSchema={Yup.object().shape({
                  upload: Yup.mixed().required("Please add the required document"),
                })}
            >
                {(props) => {
                  const { values, touched, errors, isSubmitting, handleChange, handleBlur, handleSubmit, setFieldValue } = props;

                  return (
                    <Form onSubmit={handleSubmit} style={{ display: 'block' }}>
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
                      <SubmitButton disabled={isSubmitting} type="submit">
                        {
                          isSubmitting ? (
                            <React.Fragment>
                              <AlternatingLoader className="icon" />
                              <span className="text">Loading</span>
                            </React.Fragment>
                          ) : (
                            <React.Fragment>
                              Apply
                            </React.Fragment>
                          )
                        }
                      </SubmitButton>
                    </Form>
                  )}}
                </Formik>
              ) : (
                <div>
                  <center>
                    <h3 style={{ fontSize: '20px', fontWeight: 'bolder' }}>Login to apply</h3>
                  </center>
                </div>
              )
            }
          </ModalContentWrapper>
         </Modal>
      </ContentWithPaddingXl>
    </Container>
  );
};

export default CardsWithTabSwitch;