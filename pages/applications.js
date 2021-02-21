import * as React from 'react';
import GrantsLoader from '../components/loaders/GrantsLoader';
import { useRouter } from 'next/router';
import WithHeader from '../components/header/WithHeader';
import APIHelper from '../helpers/APIHelpers';
import GrantApplications from '../components/grants/GrantApplications.jsx';

 const Applications = (props) => {
  const router = useRouter();
  
  if (router.isFallback) {
    return (
      <WithHeader>
        <GrantsLoader />
      </WithHeader>
    )
  }

  return (
    <WithHeader>
      <GrantApplications {...props} />
    </WithHeader>
  );
 }

export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1

  // Pass post data to the page via props
  return { props: {
      grant: {}
    },
    revalidate: 1,
  }
}

export default Applications;
