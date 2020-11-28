import React from "react";
import Link from 'next/link';
import styled from "styled-components";
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime';
import ReactHtmlParser from 'react-html-parser';
import { ReactComponent as FaceBookIcon } from "feather-icons/dist/icons/facebook.svg";
import { ReactComponent as EyeIcon } from "feather-icons/dist/icons/eye.svg";
import { Container, ContentWithPaddingXl } from "../misc/Layouts.jsx";
import {
  Row, Description, Title, Heading, Image, AuthorImage,
  AuthorInfo, AuthorName, AuthorNameAndProfession, AuthorProfile,
  RecentPostsContainer, Plan, PlanHeader, PopularPostsContainer, Post,
  PostsContainer, PostTextContainer, SocialLinksContainer,
} from '../../styles';

dayjs.extend(relativeTime);

const ResponsiveContentWithPaddingXl = styled(ContentWithPaddingXl)`
  @media(max-width: 640px) {
    padding: .65rem !important;
  }
`;

const PBody = styled.div`
    
  ::-moz-selection{background-color:#d4ecff;}
  ::selection{background-color:#d4ecff;}
  .ce-block a{cursor:pointer;text-decoration:underline;}
  .cdx-block{padding:.4em 0;}
  
  a{background-color:transparent;}
  p{margin:0;}
  *,::before,::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e2e8f0;}
  a{color:inherit;text-decoration:inherit;}
  
  .link-tool{position:relative;}
  .link-tool__content{display:block;padding:25px;border-radius:2px;box-shadow:0 0 0 2px #fff;color:initial!important;text-decoration:none!important;}
  .link-tool__content::after{content:"";clear:both;display:table;}
  .link-tool__content--rendered{background:#fff;border:1px solid rgba(201, 201, 204, 0.48);box-shadow:0 1px 3px rgba(0,0,0, .1);border-radius:6px;will-change:filter;animation:link-in 450ms 1 cubic-bezier(0.215, 0.61, 0.355, 1);}
  .link-tool__content--rendered:hover{box-shadow:0 0 3px rgba(0,0,0, .16);}
  .link-tool__image{background-position:center center;background-repeat:no-repeat;background-size:cover;margin:0 0 0 30px;width:65px;height:65px;border-radius:3px;float:right;}
  .link-tool__title{font-size:17px;font-weight:600;line-height:1.5em;margin:0 0 10px 0;}
  .link-tool__description{margin:0 0 20px 0;font-size:15px;line-height:1.55em;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;}
  .link-tool__anchor{display:block;font-size:15px;line-height:1em;color:#888!important;border:0!important;padding:0!important;}
  
  @keyframes link-in{from{filter:blur(5px);}to{filter:none;}}
  
    
  .codex-editor__redactor [contenteditable]:empty:after{content:"\\feff ";}
  ::-moz-selection{background-color:#d4ecff;}
  ::selection{background-color:#d4ecff;}
  .ce-block__content{position:relative;max-width:650px;margin:0 auto;-webkit-transition:background-color .15s ease;transition:background-color .15s ease;}
  .cdx-block{padding:.4em 0;}
  .cdx-input{border:1px solid rgba(201,201,204,.48);-webkit-box-shadow:inset 0 1px 2px 0 rgba(35,44,72,.06);box-shadow:inset 0 1px 2px 0 rgba(35,44,72,.06);border-radius:3px;padding:10px 12px;outline:none;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;}
  .cdx-input[data-placeholder]:before{position:static!important;display:inline-block;width:0;white-space:nowrap;pointer-events:none;}
  
  *,::before,::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e2e8f0;}
  iframe{display:block;vertical-align:middle;}
  
  .embed-tool__preloader{display:none;position:relative;height:200px;box-sizing:border-box;border-radius:5px;border:1px solid #e6e9eb;}
  .embed-tool__preloader::before{content:'';position:absolute;z-index:3;left:50%;top:50%;width:30px;height:30px;margin-top:-25px;margin-left:-15px;border-radius:50%;border:2px solid #cdd1e0;border-top-color:#388ae5;box-sizing:border-box;animation:embed-preloader-spin 2s infinite linear;}
  .embed-tool__url{position:absolute;bottom:20px;left:50%;transform:translateX(-50%);max-width:250px;color:#7b7e89;font-size:11px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
  .embed-tool__content{width:100%;}
  .embed-tool__caption{margin-top:7px;}
  .embed-tool__caption[contentEditable=true][data-placeholder]::before{position:absolute;content:attr(data-placeholder);color:#707684;font-weight:normal;opacity:0;}
  .embed-tool__caption[contentEditable=true][data-placeholder]:empty::before{opacity:1;}
  .embed-tool__caption[contentEditable=true][data-placeholder]:empty:focus::before{opacity:0;}
  
  @keyframes embed-preloader-spin{0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}}
`;

const BlogPostBody = ({ postObject, post, recentPosts }) => {
  const hostURL =
    process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF !== 'master'
      ? process.env.NEXT_PUBLIC_DEV_HOST_URL
      : process.env.NEXT_PUBLIC_HOST_URL

  return (
    <Container style={{ fontFamily: 'Poppins' }}>
      <div id="fb-root" />
      <script async defer={true} crossOrigin="anonymous" src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v8.0" nonce="drEjQ4iO"></script>
      <ResponsiveContentWithPaddingXl>
        <Row>
          <PopularPostsContainer>
            <Heading>{postObject.title}</Heading>
            <br />
            <Description><em>{postObject.description}</em></Description>
            <AuthorInfo>
                <AuthorImage src={postObject.author.avatar} alt={`${postObject.author.firstName} ${postObject.author.lastName} profile image`} />
                <AuthorNameAndProfession>
                <AuthorName>{postObject.author.firstName} {postObject.author.lastName}</AuthorName>
                <AuthorProfile style={{ fontSize: '13px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginRight: '.5rem', flexFlow: 'wrap' }}>
                  <div>
                    {dayjs(postObject.createdOn).fromNow()}   ·   {postObject.readTime < 1 ? 'A few minutes read' : `${postObject.readTime}-minute read`} |
                  </div>
                  <div style={{ fontSize: '13px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginLeft: '.5rem' }}>
                    <EyeIcon style={{ marginTop: '2.75px' }} width={13} height={13} /> <p style={{ marginLeft: '.5rem' }}>{postObject?.readCount}</p>
                  </div>
                </AuthorProfile>
              </AuthorNameAndProfession>
            </AuthorInfo>
            <PostsContainer>
            <Post>
              <div style={{
                maxWidth: '100%',
                lineHeight: '1.85rem', wordSpacing: '1px',
              }}>
                <PBody>
                  {ReactHtmlParser(post)}
                </PBody>

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
                    <span className="name">Love this article?</span>
                  </span>
                  <div style={{ borderTopWidth: '1px', marginTop: '1.5rem' }}/>
                  <p className="description">Share it with others</p>
                </PlanHeader>
                <SocialLinksContainer style={{ marginTop: '1.75rem' }}>
                  <div
                    className="fb-share-button"
                    data-href={`${hostURL}/blog/post/${postObject.slug}`}
                    data-layout="button"
                    data-lazy="true"
                    data-size="small">
                    <a target="_blank" href={`https://www.facebook.com/sharer/sharer.php?u=${hostURL}/blog/post/${postObject.slug}&amp;src=sdkpreparse`} className="fb-xfbml-parse-ignore">
                      <span style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <FaceBookIcon width={16} height={16} style={{ marginTop: '.33rem' }} />
                        <span style={{ fontSize: '14px', marginTop: '.3rem', marginLeft: '.19rem' }}>Share</span>
                      </span>
                    </a>
                  </div>
                  <div style={{ marginLeft: '1rem', marginTop: '4px' }}>
                    <a
                      target="_blank"
                      href="https://twitter.com/share?ref_src=twsrc%5Etfw"
                      className="twitter-share-button"
                      data-text={`${postObject.title} by ${postObject.author.firstName} ${postObject.author.lastName}`}
                      data-url={`${hostURL}/blog/post/${postObject.slug}`}
                      data-show-count="false">
                        Tweet
                      </a>
                  </div>
                  <div style={{ marginLeft: '1rem' }}>
                    <script src="https://platform.linkedin.com/in.js" type="text/javascript">{`lang: en_US`}</script>
                    <script type="IN/Share" data-url={`${hostURL}/blog/post/${postObject.slug}`}></script>
                  </div>
                    <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
                 
                  <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
                
              </SocialLinksContainer>
              </Plan>
              </>
              <>
                {/*<Plan style={{  marginBottom: '1.75rem' }}>*/}
                {/*  <PlanHeader>*/}
                {/*    <span className="nameAndFeaturedContainer">*/}
                {/*      <span className="name">Subscribe to our blog</span>*/}
                {/*    </span>*/}
                {/*    <div style={{ borderTopWidth: '1px', marginTop: '1.5rem' }}/>*/}
                {/*    <p className="description">Subscribe to get more content like this in your email</p>*/}
                {/*  </PlanHeader>*/}
                
                {/*</Plan>*/}
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
                    <Post className="group" style={{ width: '100%', paddingRight: 0 }}>
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
      </ResponsiveContentWithPaddingXl>
    </Container>
  );
};

export default BlogPostBody;
