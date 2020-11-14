import * as React from 'react';
import BlogPosts from '../../components/blog/BlogPosts.jsx';
import APIHelper from '../../helpers/APIHelpers';

const BlogPostsPage = (props) => (
  <BlogPosts blogPosts={props.blogPosts} />
);

export const getStaticProps = async () => {
 try {
    // get blog posts
  const request = await APIHelper.get('/blogs');

  return {
    props: {
      blogPosts: request.data.data.posts,
    },
    revalidate: 1,
  }
 } catch (error) {
   if (error.response) {
     return {
       props: {
         blogPosts: [],
       },
       revalidate: 1,
     };
   }
 }
};

export default BlogPostsPage;
