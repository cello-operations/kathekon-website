import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { ReactComponent as InstagramIcon } from 'feather-icons/dist/icons/instagram.svg';
import Link from 'next/link';
import { css } from "styled-components/macro"; //eslint-disable-line
import { PrimaryButton } from "../misc/Buttons.jsx";

import FacebookIcon from "../../public/images/facebook-icon.svg";


const Container = tw.div`relative bg-gray-200 text-gray-700 -mb-8 px-8 py-20 lg:py-24`;
const Content = tw.div`max-w-screen-xl mx-auto relative z-10`;
const SixColumns = tw.div`flex flex-wrap text-center sm:text-left justify-center sm:justify-start md:justify-between -mt-12`;

const Column = tw.div`px-4 sm:px-0 sm:w-1/4 md:w-auto mt-12`;

const ColumnHeading = tw.h5`uppercase font-bold`;

const LinkList = tw.ul`mt-6 text-sm font-medium`;
const LinkListItem = tw.li`mt-3`;
const NavLink = tw.a`border-b-2 border-transparent hocus:border-gray-700 pb-1 transition duration-300`;

const SubscribeNewsletterColumn = tw(Column)`text-center lg:text-left w-full! lg:w-auto! mt-20 lg:mt-12`;
const SubscribeNewsletterContainer = tw.div`max-w-sm mx-auto lg:mx-0`;
const SubscribeText = tw.p`mt-2 lg:mt-6 text-sm font-medium text-gray-600`;
const SubscribeForm = tw.form`mt-4 lg:mt-6 text-sm sm:flex max-w-xs sm:max-w-none mx-auto sm:mx-0`;
const Input = tw.input`bg-gray-300 px-6 py-3 rounded sm:rounded-r-none border-2 sm:border-r-0 border-gray-400 hover:border-primary-500 focus:outline-none transition duration-300 w-full`;
const SubscribeButton = tw(PrimaryButton)`mt-4 sm:mt-0 w-full sm:w-auto rounded sm:rounded-l-none px-8 py-3`;

const Divider = tw.div`my-16 border-b-2 border-gray-300 w-full`;

const ThreeColRow = tw.div`flex flex-col md:flex-row items-center justify-between`;

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-40 mr-0`;

const CopywrightNotice = tw.p`text-center text-sm sm:text-base mt-8 md:mt-0 font-medium text-gray-500`;

const SocialLinksContainer = tw.div`mt-8 md:mt-0 flex`;
const SocialLink = styled.a`
  ${tw`cursor-pointer p-2 rounded-full bg-gray-900 text-gray-100 hover:bg-gray-700 transition duration-300 mr-4 last:mr-0`}
  svg {
    ${tw`w-4 h-4`}
  }
`;

const TwitterSVGWrapper = tw.svg``;
const SVGWrapper = tw.svg``

const Footer = () => {
  function NavItemLink({ href, name }) {
    return (
      <Link href={href}>
        <NavLink style={{ cursor: 'pointer' }}>{name}</NavLink>
      </Link>
    );
  }
  return (
    <Container style={{ fontFamily: 'Poppins, sans-serif' }}>
      <Content>
        <SixColumns>
          <Column>
            <ColumnHeading>Main</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <NavItemLink passHref href="/about" name="About" />
              </LinkListItem>
              <LinkListItem>
                <NavItemLink passHref href="/our-work" name="Our Work" />
              </LinkListItem>
              <LinkListItem>
                <NavItemLink passHref href="/grants" name="Grants" />
              </LinkListItem>
              <LinkListItem>
                <NavItemLink passHref href="/blog" name="Blog" />
              </LinkListItem>
            </LinkList>
          </Column>
          <Column>
            <ColumnHeading>Press</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <NavItemLink passHref href="/contact-us" name="Contact Us" />
              </LinkListItem>
              <LinkListItem>
                <NavItemLink passHref href="#" name="Events" />
              </LinkListItem>
              <LinkListItem>
                <NavItemLink passHref href="#" name="Stories" />
              </LinkListItem>
              <LinkListItem>
                <NavItemLink passHref href="#" name="Office" />
              </LinkListItem>
            </LinkList>
          </Column>
          <Column>
            <ColumnHeading>Legal</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <NavItemLink passHref href="#" name="GDPR" />
              </LinkListItem>
              <LinkListItem>
                <NavItemLink passHref href="#" name="Privacy Polcy" />
              </LinkListItem>
              <LinkListItem>
                <NavItemLink passHref href="#" name="Terms of Service" />
              </LinkListItem>
              <LinkListItem>
                <NavItemLink passHref href="#" name="Disclaimer" />
              </LinkListItem>
            </LinkList>
          </Column>
          <SubscribeNewsletterColumn>
            <SubscribeNewsletterContainer>
              <ColumnHeading>Subscribe to our Newsletter (Coming Soon)</ColumnHeading>
              <SubscribeText>
                We deliver quality posts written by professionals.
              </SubscribeText>
              <SubscribeForm method="get" action="#">
                <Input type="email" placeholder="Your Email Address" />
                <SubscribeButton type="submit">Subscribe</SubscribeButton>
              </SubscribeForm>
            </SubscribeNewsletterContainer>
          </SubscribeNewsletterColumn>
        </SixColumns>
        <Divider />
        <ThreeColRow>
          <LogoContainer>
            <LogoImg src={'https://res.cloudinary.com/tolulope-od/image/upload/v1605094631/Kathekon-redesign-green-blue_izpgnc.png'} alt="Kathekon Logo" />
          </LogoContainer>
          <CopywrightNotice>
            &copy; {new Date().getFullYear()} Kathēkon. All Rights Reserved.
          </CopywrightNotice>
          <SocialLinksContainer>
            <SocialLink target={'_blank'} href="https://web.facebook.com/kathek0n">
              <FacebookIcon />
            </SocialLink>
            <SocialLink target={'_blank'} href="https://twitter.com/Kathekon2?s=08">
              <TwitterSVGWrapper fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.162 5.656a8.384 8.384 0 01-2.402.658A4.196 4.196 0 0021.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 00-7.126 3.814 11.874 11.874 0 01-8.62-4.37 4.168 4.168 0 00-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 01-1.894-.523v.052a4.185 4.185 0 003.355 4.101 4.21 4.21 0 01-1.89.072A4.185 4.185 0 007.97 16.65a8.394 8.394 0 01-6.191 1.732 11.83 11.83 0 006.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 002.087-2.165z"/>
              </TwitterSVGWrapper>
            </SocialLink>
            <SocialLink target={'_blank'} href="https://www.linkedin.com/company/kathekon">
              <SVGWrapper fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77
    0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z" fill="currentColor"/>
              </SVGWrapper>
            </SocialLink>
            <SocialLink target={'_blank'} href="https://www.instagram.com/kathek0n">
              <InstagramIcon />
            </SocialLink>
            {/* <SocialLink target={'_blank'} href="https://twitter.com">
              <TwitterIcon />
            </SocialLink>
            <SocialLink href="https://youtube.com">
              <YoutubeIcon />
            </SocialLink> */}
          </SocialLinksContainer>
        </ThreeColRow>
      </Content>
    </Container>
  );
};

export default Footer;
