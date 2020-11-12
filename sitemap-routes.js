import Router from 'next/router';
import Link from 'next/link'
import React from 'react';

export default (
  <Router>
    <Switch>
      <Link href="/" />
      <Link href="/about" />
      <Link href={"/sign-up"} />
      <Link href={"/login"} />
      <Link href={"/our-work"} />
      <Link href={"/contact-us"} />
    </Switch>
  </Router>
)
