import * as React from 'react';
import { useRouter } from 'next/router';
import SingleGrant from '../../components/grants/SingleGrant.jsx';
import WithHeader from '../../components/header/WithHeader';
import APIHelper from '../../helpers/APIHelpers';

const Scholarship = (props) => {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <WithHeader>
        Loading.....
      </WithHeader>
    )
  }

  return (
    <WithHeader>
      <SingleGrant {...props} />
    </WithHeader>
  )
}

export async function getStaticPaths() {
  // Call an external API endpoint to get grants
  const availableGrants = await APIHelper.get('/grants');
  // testing if generating static paths will us a fallback unavailable static pages.
  const grants = availableGrants.data.data.grants.splice(0, 2);

  // Get the paths we want to pre-render based on posts
  const paths = grants.map((grant) => ({
    params: { _id: grant._id },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: true }
}

export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const grant = await APIHelper.get(`/grants/${params._id}`);

  // Pass post data to the page via props
  return { props: {
      grant: grant?.data?.data?.grant,
    },
    revalidate: 1,
  }
}

export default Scholarship;
