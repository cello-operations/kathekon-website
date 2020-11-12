import * as React from 'react';
import dynamic from 'next/dynamic';

const NewBlogPost = dynamic(() => import('../../components/blog/NewBlogPost.jsx'), { ssr: false });

const NewBlogPostPage = () => {
  return (
    <NewBlogPost />
  );
}

export default NewBlogPostPage;
