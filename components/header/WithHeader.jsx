import styled from 'styled-components';
import Header from './LightHeader.jsx';
import tw from 'twin.macro';
import { Container } from '../misc/Layouts.jsx';
import * as React from 'react';

const AppHeader = styled(Header)`
  font-family: Raleway, sans-serif;
  ${tw`pt-2 max-w-none w-9/12`}
`;

function WithHeader({ children }) {
  return (
    <React.Fragment>
      <div>
        <Container>
          <AppHeader transparent={false}
                     logoUrl={'https://res.cloudinary.com/tolulope-od/image/upload/v1605094663/Kathekon-redesign-13-13_e9qpnx.png'}/>
        </Container>
      </div>
      {children}
    </React.Fragment>
  )
}

export default WithHeader;
