import * as React from 'react';
import Skeleton from 'react-loading-skeleton';
import { Container, ContentWithPaddingXl } from "../misc/Layouts.jsx";
import {
  Row, Description, Title, Heading, Image, AuthorImage,
  AuthorInfo, AuthorName, AuthorNameAndProfession, AuthorProfile,
  RecentPostsContainer, Plan, PlanHeader, PopularPostsContainer, Post,
  PostsContainer, PostTextContainer, SocialLinksContainer,
} from '../../styles';

const PostLoading = () => (
  <Container>
    <ContentWithPaddingXl>
      <Row>
        <PopularPostsContainer style={{ padding: '3rem' }}>
          <Heading>
            <Skeleton />
          </Heading>
          <br/>
          <Description>
            <Skeleton />
          </Description>
          <AuthorInfo>
              <Skeleton circle={true} />
            <AuthorNameAndProfession>
              <AuthorName><Skeleton /></AuthorName>
              <AuthorProfile>
                <Skeleton />
              </AuthorProfile>
            </AuthorNameAndProfession>
          </AuthorInfo>
          <PostsContainer>
            <Post>
              <div style={{
                maxWidth: '100%', textAlign: 'justify', textJustify: 'inter-word',
                lineHeight: '2rem', wordSpacing: '2px',
              }}>
                <Skeleton count={7} />
              </div>
            </Post>
          </PostsContainer>
        </PopularPostsContainer>
        <RecentPostsContainer>
          <Heading />
          <PostsContainer>
            <>
              <Plan style={{  marginBottom: '1.75rem' }}>
                <PlanHeader>
                  <span className="nameAndFeaturedContainer">
                    <span className="name"><Skeleton /></span>
                  </span>
                  <div style={{ borderTopWidth: '1px', marginTop: '1.5rem' }}/>
                  <p className="description">
                    <Skeleton />
                  </p>
                </PlanHeader>
              </Plan>
              <Plan style={{  marginBottom: '1.75rem' }}>
                <PlanHeader>
                  <span className="nameAndFeaturedContainer">
                    <span className="name"><Skeleton /></span>
                  </span>
                  <div style={{ borderTopWidth: '1px', marginTop: '1.5rem' }}/>
                  <p className="description">
                    <Skeleton />
                  </p>
                </PlanHeader>
              </Plan>
              <Plan style={{  marginBottom: '1.75rem' }}>
                <PlanHeader>
                  <span className="nameAndFeaturedContainer">
                    <span className="name"><Skeleton /></span>
                  </span>
                  <div style={{ borderTopWidth: '1px', marginTop: '1.5rem' }}/>
                  <p className="description">
                    <Skeleton />
                  </p>
                </PlanHeader>
              </Plan>
            </>
          </PostsContainer>
        </RecentPostsContainer>
      </Row>
    </ContentWithPaddingXl>
  </Container>
);

export default PostLoading;
