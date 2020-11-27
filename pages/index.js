import * as React from 'react';
import Landing from '../components/landing/LandingPage.jsx';
import APIHelper from '../helpers/APIHelpers';

const Home = (props) => {
  return (
    <div>
      <Landing {...props} />
    </div>
  );
}

export const getStaticProps = async () => {
  try {
    // get blog posts
    const request = await APIHelper.get('/blogs?page=0&pageSize=2');

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

export default Home;
