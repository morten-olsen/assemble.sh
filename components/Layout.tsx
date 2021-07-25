import React, { ReactNode } from 'react';
import Head from 'next/head'
import styled, { createGlobalStyle } from 'styled-components';
import Header from './Header';

interface Props {
  title: string;
  children: ReactNode;
}
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
    line-height: 1.8em;
    letter-spacing: 0.5px;
  }

  a {
    text-decoration: none;
    font-weight: 700;
    color: red;
  }
`;

const Content = styled.div`
  width: 100%;
  max-width: 900px;
  margin: auto;
`;

const Layout: React.FC<Props> = ({ title, children }) => (
  <>
    <GlobalStyle />
    <Head>
      <title>{title}</title>
    </Head>
    <Header />
    <Content>
      {children}
    </Content>
  </>
);

export default Layout;
