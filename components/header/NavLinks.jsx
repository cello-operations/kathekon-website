import * as React from 'react';
import Link from 'next/link';
import { NavLink, NavLinks, PrimaryLink } from './LightHeader.jsx';
import { PrimaryLink as PrimaryLinkBase } from "../misc/Links.jsx";

const buttonRoundedCss = false;

function NavItemLink({ href, name}) {
  return (
    <Link href={href}>
      <NavLink style={{ cursor: 'pointer' }}>{name}</NavLink>
    </Link>
  )
}
function NavItemLinkSolo({ href, name }) {
  return (
    <Link href={href}>
      <NavLink tw="lg:ml-12!" style={{ cursor: 'pointer' }}>{name}</NavLink>
    </Link>
  )
}

function PrimaryLinkItem({ href, name }) {
  return (
    <Link href={href}>
      <PrimaryLink css={buttonRoundedCss} style={{ cursor: 'pointer' }}>{name}</PrimaryLink>
    </Link>
  );
}

export function ForwardLink (props) {
  return (
    <Link href={props.href}>
      <PrimaryLinkBase>{props.children}</PrimaryLinkBase>
    </Link>
  );
};

export const PageNavLinks = [
  <NavLinks key={1}>
    <NavItemLink passHref href="/about" name="About" />
    <NavItemLink passHref href="/our-work" name="Our Work" />
    <NavItemLink passHref href="/blog" name="Blog" />
    <NavItemLink passHref href="/grants" name="Grants" />
  </NavLinks>,
  <NavLinks key={2}>
    <NavItemLinkSolo passHref name="Login" href="/login"/>   
    <PrimaryLinkItem passHref name={"Sign Up"} href="/sign-up" />
  </NavLinks>,
];
