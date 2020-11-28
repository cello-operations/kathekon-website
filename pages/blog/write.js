import * as React from 'react';
import dynamic from 'next/dynamic';
import WithHeader from '../../components/header/WithHeader';

const NewBlogPost = dynamic(() => import('../../components/blog/NewBlogPost.jsx'), { ssr: false });

const NewBlogPostPage = () => {
  return (
    <WithHeader>
      <NewBlogPost />
    </WithHeader>
  );
}

export default NewBlogPostPage;
