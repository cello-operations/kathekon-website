import * as React from 'react';
import WithHeader from '../../components/header/WithHeader';
import APIHelper from '../../helpers/APIHelpers';
import Scholarships from '../../components/scholarships/Scholarships';

const ScholarshipsPage = (props) => (
  <WithHeader>
    <Scholarships {...props} />
  </WithHeader>
);

export const getStaticProps = async () => {
  try {
    // get blog posts
    const request = await APIHelper.get('/grants');

    const grants = request.data.data.grants.reduce((accumulator, grant) => {
      accumulator.All.push(grant);

      if (grant.grantType === "grant") {
        accumulator.Grants.push(grant);
      }

      if (grant.grantType === "scholarship") {
        accumulator.Scholarships.push(grant);
      }

      return accumulator;
    }, {
      All: [],
      Scholarships: [],
      Grants: [],
      Applications: [],
    })

    return {
      props: {
        grants,
      },
      revalidate: 1,
    }
  } catch (error) {
    if (error.response) {
      return {
        props: {
          grants: {
            All: [],
            Scholarships: [],
            Grants: [],
          },
          revalidate: 1,
        },
      };
    }
  }
};

export default ScholarshipsPage;
