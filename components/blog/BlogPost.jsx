import React, { useState } from "react";
import Head from 'next/head';
import ReactHtmlParser from 'react-html-parser';
import dynamic from 'next/dynamic';
import AnimationRevealPage from "../../helpers/AnimationRevealPage.jsx";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import { PrimaryButton } from "../misc/Buttons.jsx";
import APIHelper from '../../helpers/APIHelpers';
import { generalHelpers } from '../../helpers/generalHelpers';
import parseEditorData from '../../utils/parseEditorData'
import BlogPostBody from "./BlogPostBody.jsx";

const Content = tw.div`max-w-screen-xl mx-auto pb-20 lg:pb-24`;
const Container = tw.div`grid grid-cols-13`;
const InputContainer = tw.div`relative mt-2`;
const Title = styled.p`text-align: center;
${tw`w-full bg-transparent text-4xl font-black tracking-wide border-b-0 hocus:border-red-0 focus:outline-none transition duration-200`};`

const Description = styled.p`text-align: center;
${tw`w-full bg-transparent font-light tracking-wide border-b-0 hocus:border-red-0 focus:outline-none transition duration-200`};`

const BlogPost = (props) => {
  
  const postObject = generalHelpers.isEmpty(props.post) ? {} : props.post;
  const recentPosts = generalHelpers.isEmpty(props.recentPosts) ? [] : props.recentPosts;
  const postBody = JSON.parse(postObject.body);
  
  const post = parseEditorData(postBody)

  return (
    <>
      <Head>
        <title>{postObject.title} - Kathekon</title>
        <meta name="title" content={`${postObject.title} - Kathekon`} />
        <meta name="description" content={postObject.description} />
        <meta name="keywords" content={`kathekon ${postObject.description}`} />
        <meta property="og:url"           content={`${process.env.NEXT_PUBLIC_HOST_URL}/blog/post/${postObject.slug}`} />
        <meta property="og:type"          content="website" />
        <meta property="og:title"         content={`${postObject.title} - Kathekon`} />
        <meta property="og:description"   content={postObject.description} />
        <meta property="og:image"         content={postObject.coverImage} />
      </Head>
        <Container>
          <BlogPostBody
            postObject={postObject}
            post={post}
            recentPosts={recentPosts}
          />
        </Container>
    </>
  )
};

export default BlogPost;
