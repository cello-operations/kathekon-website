import React, { useState } from "react";
import Head from 'next/head';
import Axios from 'axios';
import dynamic from 'next/dynamic';
import AnimationRevealPage from "../../helpers/AnimationRevealPage.jsx";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import { SectionHeading } from "../misc/Headings.jsx";
import { PrimaryButton } from "../misc/Buttons.jsx";
import { EDITOR_JS_TOOLS, Image } from '../../utils/tools';
import APIHelper from '../../helpers/APIHelpers';
import { generalHelpers } from '../../helpers/generalHelpers';

const EditorJS = dynamic(() => import('react-editor-js'), { ssr: false });

const Column = tw.div`flex flex-col`;
const InputContainer = tw.div`relative py-5 mt-2`;
// const SubmitButton = tw.button`w-full sm:w-32 mt-6 py-3 bg-primary-100 text-gray-100 rounded font-bold tracking-wide shadow-lg uppercase text-sm transition duration-300 transform focus:outline-none focus:shadow-outline hover:bg-gray-100 hover:text-primary-700 hocus:-translate-y-px hocus:shadow-xl`;
const SubmitButton = styled(PrimaryButton)`
  ${tw`shadow-lg uppercase text-sm transition duration-300 transform focus:outline-none focus:shadow-outline hover:bg-gray-100 hover:text-primary-700 hocus:-translate-y-px hocus:shadow-xl`}
`;

const FormContainer = styled.div`
  text-align: center;
  ${tw`rounded-lg relative`}
  #description {
    ${tw`text-lg text-gray-700`}
  }
  input,textarea, p {
    text-align: center;
    ${tw`w-3/6 bg-transparent text-4xl font-black tracking-wide border-b-0 hocus:border-red-0 focus:outline-none transition duration-200`};

    ::placeholder {
      ${tw`text-gray-500`}
    }
  }
  .editable:empty:before {
    content: attr(data-placeholder);
    color: #a0aec0;
  }
`;

const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const Container = tw.div`grid grid-cols-13`;

const NewBlogPost = () => {
  let editorInstance;
  const [data, setData] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [instance, setInstance] = React.useState(null);
  const [description, setDescription] = React.useState('');
  const defaultCoverImage = 'https://res.cloudinary.com/cello/image/upload/v1604774981/jess-bailey-q10VITrVYUM-unsplash_kcqo4m.jpg';
  // body, title, description, tags, status,
  //       coverImage,
  const handleSubmit = async () => {
    console.log(instance);
    if (!instance) {
      return alert('no editor instance')
    }
    const savedData = await instance.save();
    const images = generalHelpers.getCoverImage(savedData.blocks);

    const coverImage = images.length > 0 ? images[0].file.url : defaultCoverImage;

    console.log(savedData);
    const data = {
      title, description, coverImage, status: 'PUBLISHED',
      body: JSON.stringify(savedData),
    };
    try {
      const request = await APIHelper.post('/blogs', data);

      console.log(request)
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <Head>
        <title>Kathēkon - Blog Posts</title>
        <meta name="description" content="Kathekon Blog, read enlightening artcules and personal discoveries by our team on the journey to transforming society for the better." />
        <meta name="keywords" content="kathekon kathēkon blog articles posts stories scholarships transforming nigeria education civil society social welfare investment africa" />
      </Head>
      <AnimationRevealPage>
        <Container>
          <FormContainer>
            <center>
              <form action="#">
                {/* <center> */}
                  <Column>
                    <InputContainer>
                      <p
                        suppressContentEditableWarning={true}
                        data-placeholder={"Title..."}
                        className={"editable"}
                        onInput={(event) => {
                          setTitle(event.target.innerHTML)
                        }}
                        contentEditable={true}
                      >
                        
                      </p>
                    </InputContainer>
                    <InputContainer>
                      <p
                        suppressContentEditableWarning={true}
                        id="description"
                        data-placeholder={"Description..."}
                        className={"editable"}
                        onInput={(event) => setDescription(event.target.innerHTML)}
                        contentEditable={true}
                      >
                        
                        </p>
                    </InputContainer>
                  </Column>
                {/* </center> */}
              </form>
            </center>
          </FormContainer>
          <div id={"blogPost"}>
            <EditorJS
              instanceRef={(instance) => {
                console.log(editorInstance)
                editorInstance = instance;
                setInstance(instance);
              }}
              data={data}
              tools={{
                ...EDITOR_JS_TOOLS,
                image: {
                  class: Image,
                  config: {
                    endpoints: {
                      byFile: '/api/v1/upload-image', // Your backend file uploader endpoint
                      byUrl: '/api/v1/upload-image', // Your endpoint that provides uploading by Url
                    },
                    uploader: {
                      uploadByFile(file) {
                        const unsignedUploadPreset = 'klhmvqzf';
                        const formData = new FormData();
                        formData.append('upload_preset', unsignedUploadPreset);
                        formData.append('file', file);
                        return Axios.post('/api/v1/upload-image', formData).then((response) => {
                          return response.data;
                        })
                      }
                    },
                  },
                },
              }}
            />
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
              <SubmitButton
                onClick={() => handleSubmit()}
              >
                Publish
              </SubmitButton>
            </div>
          </div>
        </Container>
      </AnimationRevealPage>
    </>
  )
};

export default NewBlogPost;
