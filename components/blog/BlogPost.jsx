import React from "react";
import Head from 'next/head';
import tw from "twin.macro";
import EDJSParser from "editorjs-parser";
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
  const parser = new EDJSParser();
  const markup = parser.parse(postBody);

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
        <meta name="twitter:image:src" content={postObject.coverImage} />
        <meta name="twitter:title" content="Kathēkon: Transforming society through investments in education, social welfare, and civil society" />
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
