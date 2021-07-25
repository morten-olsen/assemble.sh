import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Wrapper = styled.div``;

const Header: React.FC<{}> = () => (
  <Wrapper>
    <Link href="/">Home</Link>
  </Wrapper>
);

export default Header;
