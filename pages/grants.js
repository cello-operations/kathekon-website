import * as React from 'react';
import Grants from '../components/grants/Grants.jsx';
import APIHelper from '../helpers/APIHelpers';

const GrantsPage = (props) => (
  <Grants {...props} />
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
   })
 
   return {
     props: {
       grants,
     },
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
        },
      };
    }
  }
 };

export default GrantsPage;
