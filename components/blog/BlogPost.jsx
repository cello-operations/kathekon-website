import React from "react";
import Head from 'next/head';
import tw from "twin.macro";
import { css } from "styled-components/macro";
import { generalHelpers } from '../../helpers/generalHelpers';
import parseEditorData from '../../utils/parseEditorData'
import BlogPostBody from "./BlogPostBody.jsx";

const Container = tw.div`grid grid-cols-13`;

const BlogPost = (props) => {
  
  const postObject = generalHelpers.isEmpty(props.post) ? {} : props.post;
  const recentPosts = generalHelpers.isEmpty(props.recentPosts) ? [] : props.recentPosts;
  const postBody = JSON.parse(postObject.body);
  
  const post = parseEditorData(postBody)

  const hostURL =
    process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF !== 'master'
      ? process.env.NEXT_PUBLIC_DEV_HOST_URL
      : process.env.NEXT_PUBLIC_HOST_URL


  return (
    <>
      <Head>
        <title>{postObject.title} - Kathekon Blog</title>
        <meta name="title" content={`${postObject.title} - Kathekon Blog`} />
        <meta name="description" content={postObject.description} />
        <meta name="author" content={`${postObject?.author?.firstName ?? ''} ${postObject?.author?.lastName ?? ''}`} />
        <meta name="keywords" content={`kathekon ${postObject.description}`} />
        <meta property="og:type" content="profile" />
        <meta property="og:title"         content={`${postObject.title} - Kathekon Blog`} />
        <meta property="og:url"           content={`${hostURL}/blog/post/${postObject.slug}`} />
        <meta property="og:image"         content={postObject.coverImage} />
        <meta property="og:description"   content={postObject.description} />
        <meta property="profile:first_name" content={postObject?.author?.firstName ?? ''} />
        <meta property="profile:last_name" content={postObject?.author?.lastName ?? ''} />
        <meta property='og:site_name' content='Kathekon' />
        <meta name="twitter:card" content="photo" />
        <meta name="twitter:image:src" content={postObject.coverImage} />
        <meta name="twitter:title" content={`${postObject.title} - Kathēkon Blog`} />
        <meta name="twitter:description" content={postObject.description} />
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
