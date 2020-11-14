import React from "react";
import Link from 'next/link';
import tw from "twin.macro";
import styled from "styled-components";
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime';
import ReactHtmlParser from 'react-html-parser';
import { motion } from "framer-motion";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading } from "../misc/Headings.jsx";
import { Container, ContentWithPaddingXl } from "../misc/Layouts.jsx";
import FacebookIcon from "../../public/images/facebook-icon.svg";

dayjs.extend(relativeTime);

const Row = tw.div`flex flex-col lg:flex-row -mb-10`;
const Heading = tw(SectionHeading)`text-left text-gray-900 lg:text-4xl xl:text-5xl`;

const PopularPostsContainer = tw.div`lg:w-2/3`;
const PostsContainer = tw.div`mt-12`;
const Post = tw(motion.div)`block text-gray-800 cursor-pointer mb-16 last:mb-0 sm:mb-0 sm:odd:mr-8 lg:mr-8 xl:mr-16`;
const Image = styled(motion.div)(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`h-64 bg-cover bg-center rounded`
]);
const Title = tw.h5`mt-6 text-xl font-bold transition duration-300 group-hover:text-primary-500`;
const Description = tw.p`mt-2 text-secondary-100 leading-loose text-sm`;
const AuthorInfo = tw.div`mt-6 flex items-center`;
const AuthorImage = tw.img`w-12 h-12 rounded-full`;
const AuthorNameAndProfession = tw.div`ml-4`;
const AuthorName = tw.h6`font-semibold text-lg`;
const AuthorProfile = tw.p`text-secondary-100 text-sm`;
const Plan = styled.div`
  ${tw`w-full bg-white px-10 rounded-lg shadow-lg py-10 xl:p-10 flex flex-col justify-between mt-16 first:mt-0 lg:mt-0 shadow-md`}
`;
const PlanHeader = styled.div`
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

const RecentPostsContainer = styled.div`
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



const PostTextContainer = tw.div``

const SocialLinksContainer = tw.div`mt-8 md:mt-0 flex`;

const BlogPostBody = ({ postObject, post, recentPosts }) => {
  // This setting is for animating the post background image on hover
  const postBackgroundSizeAnimation = {
    rest: {
      backgroundSize: "100%"
    },
    hover: {
      backgroundSize: "110%"
    }
  };

  return (
    <Container style={{ fontFamily: 'Poppins' }}>
      <div id="fb-root"></div>
      <script async defer={true} crossOrigin="anonymous" src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v8.0" nonce="drEjQ4iO"></script>
      <ContentWithPaddingXl>
        <Row>
          <PopularPostsContainer>
            <Heading>{postObject.title}</Heading>
            <br />
            <Description><em>{postObject.description}</em></Description>
            <AuthorInfo>
                <AuthorImage src={postObject.author.avatar} alt={`${postObject.author.firstName} ${postObject.author.lastName} profile image`} />
                <AuthorNameAndProfession>
                <AuthorName>{postObject.author.firstName} {postObject.author.lastName}</AuthorName>
                <AuthorProfile>
                  {dayjs(postObject.createdOn).fromNow()}   ·   {postObject.readTime < 1 ? 'A few minutes read' : `${postObject.readTime}-minute read`}
                </AuthorProfile>
              </AuthorNameAndProfession>
            </AuthorInfo>
            <PostsContainer>
            <Post>
              <div style={{
                maxWidth: '100%', textAlign: 'justify', textJustify: 'inter-word',
                lineHeight: '2rem', wordSpacing: '2px'
              }}>
                {ReactHtmlParser(post)}
              </div>
            </Post>
            </PostsContainer>
          </PopularPostsContainer>
          <RecentPostsContainer style={{ paddingRight: '1.75rem', paddingLeft: '1.75rem' }}>
            <Heading />  
            <PostsContainer>
            <>
              <Plan style={{  marginBottom: '1.75rem' }}>
                <PlanHeader>
                  <span className="nameAndFeaturedContainer">
                    <span className="name">Love this article?</span>
                  </span>
                  <div style={{ borderTopWidth: '1px', marginTop: '1.5rem' }}/>
                  <p className="description">Share it with others</p>
                </PlanHeader>
                <SocialLinksContainer style={{ marginTop: '1.75rem' }}>
                  <div
                    className="fb-share-button"
                    data-href={`${process.env.NEXT_PUBLIC_HOST_URL}/blog/post/${postObject.slug}`}
                    data-layout="button"
                    data-lazy="true"
                    data-size="small">
                    <a target="_blank" href={`https://www.facebook.com/sharer/sharer.php?u=${process.env.NEXT_PUBLIC_HOST_URL}/blog/post/${postObject.slug}&amp;src=sdkpreparse`} className="fb-xfbml-parse-ignore">
                      Share
                    </a>
                  </div>
                  <div style={{ marginLeft: '1rem', marginTop: '4px' }}>
                    <a
                      target="_blank"
                      href="https://twitter.com/share?ref_src=twsrc%5Etfw"
                      className="twitter-share-button"
                      data-text={`${postObject.title} by ${postObject.author.firstName} ${postObject.author.lastName}`}
                      data-url={`${process.env.NEXT_PUBLIC_HOST_URL}/blog/post/${postObject.slug}`}
                      data-show-count="false">
                        Tweet
                      </a>
                  </div>
                    <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
                 
                  <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
                
              </SocialLinksContainer>
              </Plan>
              </>
              <>
                <Plan style={{  marginBottom: '1.75rem' }}>
                  <PlanHeader>
                    <span className="nameAndFeaturedContainer">
                      <span className="name">Subscribe to our blog</span>
                    </span>
                    <div style={{ borderTopWidth: '1px', marginTop: '1.5rem' }}/>
                    <p className="description">Subscribe to get more content like this in your email</p>
                  </PlanHeader>
                
                </Plan>
              </>
              <Plan>
                <PlanHeader>
                  <span className="nameAndFeaturedContainer">
                    <span className="name">Recent Posts</span>
                  </span>
                  <div style={{ borderTopWidth: '1px', marginTop: '1.5rem' }}/>
                  <p className="description" />
                </PlanHeader>
                {recentPosts.map((post, index) => (
                  <Link key={post._id} href={`/blog/post/${post.slug}`}>
                    <Post className="group">
                      <PostTextContainer>
                        <Title>{post.title}</Title>
                        <AuthorName>{post.author.firstName} {post.author.lastName}</AuthorName>
                      </PostTextContainer>
                      <Image imageSrc={post.coverImage} />
                    </Post>
                  </Link>
                ))}
              </Plan>
            </PostsContainer>
          </RecentPostsContainer>
        </Row>
      </ContentWithPaddingXl>
    </Container>
  );
};

export default BlogPostBody;
