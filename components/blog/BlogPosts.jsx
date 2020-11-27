import React, { useState } from "react";
import Head from 'next/head';
import dayjs from 'dayjs';
import Link from 'next/link';
import { motion } from 'framer-motion';
import AnimationRevealPage from "../../helpers/AnimationRevealPage.jsx";
import { Container, ContentWithPaddingXl } from "../misc/Layouts.jsx";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import { SectionHeading } from "../misc/Headings.jsx";
import { PrimaryButton } from "../misc/Buttons.jsx";
import AuthContext from '../../context/AuthContext';

const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-gray-900`;

const ResponsiveHeadingRow = styled(HeadingRow)`
  @media(min-width: 768px) {
    padding-left: inherit;
    padding-right: inherit;
    padding-top: .75rem;
  }
`;

const Row = styled(ResponsiveHeadingRow)`
  flex-direction: row;
  justify-content: space-between;
`;

const CreateButton = styled(PrimaryButton)`
  ${tw`shadow-lg uppercase text-sm transition duration-300 transform focus:outline-none focus:shadow-outline hover:bg-gray-100 hover:text-primary-700 hocus:-translate-y-px hocus:shadow-xl`}
`;

const MotionDiv = motion.div;
const ActionButtonContainer = styled.div`
  display: flex;
  align-content: center;
`;

export const Posts = tw.div`mt-6 sm:mr-0 flex flex-wrap`;
export const PostContainer = styled.div`
  ${tw`mt-10 w-full sm:w-1/2 lg:w-1/3 sm:pr-8`}
  ${props =>
    props.featured &&
    css`
      ${tw`w-full!`}
      ${Post} {
        ${tw`sm:flex-row! h-full sm:pr-4`}
      }
      ${Image} {
        ${tw`sm:h-96 sm:min-h-full sm:w-1/2 lg:w-2/3 sm:rounded-t-none sm:rounded-l-lg`}
      }
      ${Info} {
        ${tw`sm:-mr-4 sm:pl-8 sm:flex-1 sm:rounded-none sm:rounded-r-lg sm:border-t-2 sm:border-l-0`}
      }
      ${Description} {
        ${tw`text-sm mt-3 leading-loose text-gray-600 font-medium`}
      }
    `}
`;
export const Post = tw.div`cursor-pointer flex flex-col bg-gray-100 rounded-lg`;
export const Image = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`h-64 w-full bg-cover bg-center rounded-t-lg`}
`;
export const Info = tw.div`p-8 border-2 border-t-0 rounded-lg rounded-t-none`;
export const Category = tw.div`uppercase text-primary-500 text-xs font-bold tracking-widest leading-loose after:content after:block after:border-b-2 after:border-primary-500 after:w-8`;
export const CreationDate = tw.div`mt-4 uppercase text-gray-600 italic font-semibold text-xs`;
export const Title = tw.div`mt-1 font-black text-2xl text-gray-900 group-hover:text-primary-500 transition duration-300`;
export const Description = tw.div``;

const ButtonContainer = tw.div`flex justify-center`;
const LoadMoreButton = tw(PrimaryButton)`mt-16 mx-auto`;

const ResponsiveContentWithPaddingXl = styled(ContentWithPaddingXl)`
  padding-top: 0;
  width: 100% !important;
  @media(max-width: 414px) {
      padding: 0 !important;
    }
`;

function CreatePostLink({ href, name }) {
  return (
    <Link href={href}>
      <CreateButton style={{ cursor: 'pointer' }}>{name}</CreateButton>
    </Link>
  );
}

const BlogPosts = (props) => {
  const [visible, setVisible] = useState(20);
  const onLoadMoreClick = () => {
    setVisible(v => v + 6);
  };

  const headingText = "Blog Posts";
  const blogPosts = props.blogPosts || [];

  const { state } = React.useContext(AuthContext);

  return (
    <>
      <Head>
        <title>Kathēkon - Blog Posts</title>
        <meta name="description" content="Kathekon Blog, read enlightening artcules and personal discoveries by our team on the journey to transforming society for the better." />
        <meta name="keywords" content="kathekon kathēkon blog articles posts stories scholarships transforming nigeria education civil society social welfare investment africa" />
      </Head>
      <AnimationRevealPage>
        <Container>
          <ResponsiveContentWithPaddingXl>
            <Row>
              <Heading>{headingText}</Heading>
              <ActionButtonContainer style={{ display: 'flex', alignItems: 'center' }}>
                {
                  state.isAuthenticated && state.user.userType === "ADMIN" || state.user.userType === "SUPER_ADMIN"
                   ? (
                    <MotionDiv whileTap={{ scale: 0.9 }}>
                      <CreatePostLink name={'New Post'} href={'/blog/write'} />
                    </MotionDiv>
                   ) : (
                     <div />
                   )
                }
              </ActionButtonContainer>
            </Row>
            {
              blogPosts.length > 0 && (
                <Posts>
                  <PostContainer featured={true}>
                    <Post className="group" as="a" href={`/blog/post/${blogPosts[0].slug}`}>
                      <Image imageSrc={blogPosts[0].coverImage} />
                      <Info>
                        <Category>{`${blogPosts[0]?.author?.firstName} ${blogPosts[0]?.author?.lastName}.`}</Category>
                        <CreationDate>{dayjs(blogPosts[0].createdOn).format('MMMM DD, YYYY')}</CreationDate>
                        <Title>{blogPosts[0].title}</Title>
                        <Description>{blogPosts[0].description}</Description>
                        {blogPosts[0].featured && blogPosts[0].description && <Description>{blogPosts[0].description}</Description>}
                      </Info>
                    </Post>
                </PostContainer>
                </Posts>
              )
            }
            <Posts>
              {blogPosts.slice(1, visible).map((post, index) => (
                <PostContainer key={index} featured={post.featured}>
                  <Post className="group" as="a" href={`/blog/post/${post.slug}`}>
                    <Image imageSrc={post.coverImage} />
                    <Info>
                      <Category>{`${post.author?.firstName} ${post.author?.lastName[0]}.`}</Category>
                      <CreationDate>
                        {dayjs(post.createdOn).format('MMMM DD, YYYY')}
                      </CreationDate>
                      <Title>{post.title}</Title>
                      {post.featured && post.description && <Description>{post.description}</Description>}
                    </Info>
                  </Post>
                </PostContainer>
              ))}
            </Posts>
            {visible < blogPosts.length && (
              <ButtonContainer>
                <LoadMoreButton onClick={onLoadMoreClick}>Load More</LoadMoreButton>
              </ButtonContainer>
            )}
          </ResponsiveContentWithPaddingXl>
        </Container>
      </AnimationRevealPage>
    </>
  );
};

export default BlogPosts;
