import tw from 'twin.macro';
import { SectionHeading } from '../components/misc/Headings.jsx';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Row = tw.div`flex flex-col lg:flex-row -mb-10`;
export const Heading = tw(SectionHeading)`text-left text-gray-900 lg:text-4xl xl:text-5xl`;

export const PopularPostsContainer = tw.div`lg:w-2/3`;
export const PostsContainer = tw.div`mt-12`;
export const Post = tw(motion.div)`block text-gray-800 cursor-pointer mb-16 last:mb-0 sm:mb-0 sm:odd:mr-8 lg:mr-8 xl:mr-16`;
export const Image = styled(motion.div)(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`h-64 bg-cover bg-center rounded`,
]);
export const Title = tw.h5`mt-6 text-xl font-bold transition duration-300 group-hover:text-primary-500`;
export const Description = tw.p`px-2 mt-2 text-secondary-100 leading-loose text-sm`;
export const AuthorInfo = tw.div`mt-6 flex items-center`;
export const AuthorImage = tw.img`w-12 h-12 rounded-full`;
export const AuthorNameAndProfession = tw.div`ml-4`;
export const AuthorName = tw.h6`font-semibold text-lg`;
export const AuthorProfile = tw.p`text-secondary-100 text-sm`;
export const Plan = styled.div`
  ${tw`w-full bg-white px-10 rounded-lg shadow-lg py-10 xl:p-10 flex flex-col justify-between mt-16 first:mt-0 lg:mt-0 shadow-md`}
`;
export const PlanHeader = styled.div`
  .nameAndFeaturedContainer {
    ${tw`flex flex-wrap flex-col sm:flex-row justify-between items-center`}
  }
  .name {
    ${tw`lg:text-lg xl:text-xl font-bold uppercase tracking-wider mr-3`}
  }
  .featuredText {
    ${tw`text-xs font-bold px-3 rounded py-2 uppercase bg-green-300 text-green-900 leading-none mt-4 sm:mt-0 w-full sm:w-auto text-center`}
  }
  .pricingContainer {
    ${tw`mt-6 flex items-end justify-between`}
    .currentPrice {
      ${tw`text-lg font-bold leading-none`}
      .bigText {
        ${tw`text-3xl font-bold`}
      }
    }
    .oldPrice {
      ${tw`text-gray-500 text-lg line-through hidden sm:block`}
    }
  }
  .description {
    ${tw`mt-8 font-medium text-gray-700 lg:text-sm xl:text-base`}
  }
`;

export const RecentPostsContainer = styled.div`
  ${tw`mt-24 lg:mt-0 lg:w-1/3`}
  ${PostsContainer} {
    ${tw`flex flex-wrap lg:flex-col`}
  }
  ${Post} {
    ${tw`flex justify-between mb-10 max-w-none w-full sm:w-1/2 lg:w-auto sm:odd:pr-12 lg:odd:pr-0 mr-0`}
  }
  ${Title} {
    ${tw`text-base xl:text-lg mt-0 mr-4 lg:max-w-xs`}
  }
  ${AuthorName} {
    ${tw`mt-3 text-sm text-secondary-100 font-normal leading-none`}
  }
  ${Image} {
    ${tw`h-20 w-20 flex-shrink-0`}
  }
`;



export const PostTextContainer = tw.div``

export const SocialLinksContainer = tw.div`mt-8 md:mt-0 flex`;
