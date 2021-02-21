import React from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import Link from 'next/link';
import Cookie from 'universal-cookie';
import { ReactComponent as Logout } from "feather-icons/dist/icons/log-out.svg";
import { css } from "styled-components/macro"; //eslint-disable-line

import useAnimatedNavToggler from "../../helpers/useAnimatedNavToggler.js";

import { ReactComponent as MenuIcon } from "feather-icons/dist/icons/menu.svg";
import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";
import AuthContext from "../../context/AuthContext";

const Header = tw.header`
  flex justify-between items-center
  max-w-screen-xl mx-auto w-3/4
`;

const ResponsiveHeader = styled(Header)`
  @media(max-width: 1024px) {
    width: 97.5% !important;
    padding: .75rem .3rem !important;
  }
`;

export const NavLinks = tw.div`inline-block`;

/* hocus: stands for "on hover or focus"
 * hocus:bg-primary-700 will apply the bg-primary-700 class on hover or focus
 */
export const NavLink = tw.a`
  text-lg my-2 lg:text-sm lg:mx-6 lg:my-0
  font-semibold tracking-wide transition duration-300
  pb-1 border-b-2 border-transparent hover:border-primary-500 hocus:text-primary-500
`;

export const PrimaryLink = tw(NavLink)`
  lg:mx-0
  px-8 py-3 rounded bg-primary-500 text-gray-100
  hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline
  border-b-0
`;

export const LogoLink = styled(NavLink)`
  ${tw`flex items-center font-black border-b-0 text-2xl! ml-0!`};

  img {
    ${tw`w-40 mr-0`}
  }
`;

const StyledLink = React.forwardRef((props, ref) => (
  <LogoLink {...props} ref={ref}>{props.children}</LogoLink>
))

export const MobileNavLinksContainer = tw.nav`flex flex-1 items-center justify-between`;
export const NavToggle = tw.button`
  lg:hidden z-20 focus:outline-none hocus:text-primary-500 transition duration-300
`;
export const MobileNavLinks = motion.custom(styled.div`
  ${tw`lg:hidden z-10 fixed top-0 inset-x-0 mx-4 my-6 p-8 border text-center rounded-lg text-gray-900 bg-white`}
  ${NavLinks} {
    ${tw`flex flex-col items-center`}
  }
`);

export const DesktopNavLinks = tw.nav`
  hidden lg:flex flex-1 justify-between items-center
`;

const UserInfo = tw.div`flex items-center`;
const UserImage = tw.img`w-12 h-12 rounded-full`;
const UserNameAndType = tw.div`ml-4`;
const UserName = tw.h6`font-semibold text-lg`;
const UserProfile = tw.p`text-secondary-100 text-sm`;

const SubmitButton = styled.button`
  margin-right: .5rem;
  ${tw`font-semibold text-gray-700 py-4 transition-all duration-300 ease-in-out flex items-center justify-center focus:outline-none focus:outline-none`}
  .icon {
    ${tw`w-6 h-6 -ml-2`}
  }
  .text {
    ${tw`ml-3`}
  }
`;

export const AuthLinks = ({
  firstName = "User",
  lastName = "Name",
  userType = "ADMIN",
  avatar = "",
  handleLogout,
}) => (
  <div style={{
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
    }}>
    <UserInfo>
      <UserImage
        alt={`${firstName} ${lastName} profile image on kathekon`}
        src={avatar}
      />
      <UserNameAndType>
        <UserName>{firstName}</UserName>
        <UserProfile>
            <span style={{ cursor: 'pointer' }} onClick={handleLogout} className="text">Logout</span>
        </UserProfile>
      </UserNameAndType>
    </UserInfo>
  </div>
);

const LightHeader = ({
  roundedHeaderButton = false,
  logoLink, links, className, collapseBreakpointClass = "xl",
  transparent = false,
  logoUrl = 'https://res.cloudinary.com/tolulope-od/image/upload/v1605094663/Kathekon-redesign-13-13_e9qpnx.png',
  firstName = "User",
  lastName = "Name",
  userType = "ADMIN",
  avatar = "",
}) => {
  /*
   * This header component accepts an optionals "links" prop that specifies the links to render in the navbar.
   * This links props should be an array of "NavLinks" components which is exported from this file.
   * Each "NavLinks" component can contain any amount of "NavLink" component, also exported from this file.
   * This allows this Header to be multi column.
   * So If you pass only a single item in the array with only one NavLinks component as root, you will get 2 column header.
   * Left part will be LogoLink, and the right part will be the the NavLinks component you
   * supplied.
   * Similarly if you pass 2 items in the links array, then you will get 3 columns, the left will be "LogoLink", the center will be the first "NavLinks" component in the array and the right will be the second "NavLinks" component in the links array.
   * You can also choose to directly modify the links here by not passing any links from the parent component and
   * changing the defaultLinks variable below below.
   * If you manipulate links here, all the styling on the links is already done for you. If you pass links yourself though, you are responsible for styling the links or use the helper styled components that are defined here (NavLink)
   */
  const { state, dispatch } = React.useContext(AuthContext);
  const buttonRounded = false;
  const buttonRoundedCss = buttonRounded && tw`rounded-full`;

  const defaultLinks = [
    <NavLinks key={1}>
      <NavLink href="/about">About</NavLink>
      <NavLink href="/our-work">Our Work</NavLink>
      <NavLink href="/blog">Blog</NavLink>
      <NavLink href="/grants">Grants</NavLink>
      <NavLink href="/scholarships">Scholarships</NavLink>
    </NavLinks>,
    <NavLinks key={2}>
      <NavLink href="/login" tw="lg:ml-12!">
        Login
      </NavLink>
      <PrimaryLink css={buttonRoundedCss} href="/login">
        Sign Up
      </PrimaryLink>
    </NavLinks>
  ];

function NavItemLink({ href, name}) {
  return (
    <Link passHref href={href}>
      <NavLink style={{ cursor: 'pointer' }}>{name}</NavLink>
    </Link>
  )
}
function NavItemLinkSolo({ href, name }) {
  return (
    <Link passHref href={href}>
      <NavLink tw="lg:ml-12!" style={{ cursor: 'pointer' }}>{name}</NavLink>
    </Link>
  )
}

function PrimaryLinkItem({ href, name }) {
  return (
    <Link passHref href={href}>
      <PrimaryLink css={buttonRoundedCss} style={{ cursor: 'pointer' }}>{name}</PrimaryLink>
    </Link>
  );
}

const PageNavLinks = [
  <NavLinks key={1}>
    <NavItemLink passHref href="/about" name="About" />
    <NavItemLink passHref href="/our-work" name="Our Work" />
    <NavItemLink passHref href="/blog" name="Blog" />
    <NavItemLink passHref href="/grants" name="Grants" />
    <NavItemLink passHref href="/scholarships" name="Scholarships" />
  </NavLinks>,
  <NavLinks key={2}>
    {
      state.isAuthenticated ? (
        <>
          <AuthLinks
            {...state.user}
            handleLogout={() => {
              const cookies = new Cookie()
              localStorage.clear();
              cookies.remove('kathekonToken');
              dispatch({ type: "logout" });
              if (window) {
                window.location.href = '/';
              }
            }}
          />
        </>
      ) : (
        <>
          <NavItemLinkSolo passHref name="Login" href="/login"/>
          <PrimaryLinkItem passHref name={"Sign Up"} href="/sign-up" />
        </>
      )
    }
  </NavLinks>,
];

  const { showNavLinks, animation, toggleNavbar } = useAnimatedNavToggler();
  const collapseBreakpointCss = collapseBreakPointCssMap[collapseBreakpointClass];

  const defaultLogoLink = (
    <div>
      <StyledLink href="/">
        <img style={{ marginTop: '0.75rem' }} src={logoUrl} alt="Kathekon Logo" />
      </StyledLink>
    </div>
  );

  logoLink = logoLink || defaultLogoLink;
  links = transparent ? defaultLinks : PageNavLinks;

  return (
    <ResponsiveHeader className={className || "header-light"}>
      <DesktopNavLinks css={collapseBreakpointCss.desktopNavLinks}>
        {logoLink}
        {links}
      </DesktopNavLinks>

      <MobileNavLinksContainer css={collapseBreakpointCss.mobileNavLinksContainer}>
        {logoLink}
        <MobileNavLinks initial={{ x: "150%", display: "none" }} animate={animation} css={collapseBreakpointCss.mobileNavLinks}>
          {links}
        </MobileNavLinks>
        <NavToggle onClick={toggleNavbar} className={showNavLinks ? "open" : "closed"}>
          {showNavLinks ? <CloseIcon tw="w-6 h-6" style={{ marginRight: '2rem' }} /> : <MenuIcon tw="w-6 h-6" />}
        </NavToggle>
      </MobileNavLinksContainer>
    </ResponsiveHeader>
  );
};

/* The below code is for generating dynamic break points for navbar.
 * Using this you can specify if you want to switch
 * to the toggleable mobile navbar at "sm", "md" or "lg" or "xl" above using the collapseBreakpointClass prop
 * Its written like this because we are using macros and we can not insert dynamic variables in macros
 */

const collapseBreakPointCssMap = {
  sm: {
    mobileNavLinks: tw`sm:hidden`,
    desktopNavLinks: tw`sm:flex`,
    mobileNavLinksContainer: tw`sm:hidden`
  },
  md: {
    mobileNavLinks: tw`md:hidden`,
    desktopNavLinks: tw`md:flex`,
    mobileNavLinksContainer: tw`md:hidden`
  },
  lg: {
    mobileNavLinks: tw`lg:hidden`,
    desktopNavLinks: tw`lg:flex`,
    mobileNavLinksContainer: tw`lg:hidden`
  },
  xl: {
    mobileNavLinks: tw`lg:hidden`,
    desktopNavLinks: tw`lg:flex`,
    mobileNavLinksContainer: tw`lg:hidden`
  }
};

export default LightHeader;

