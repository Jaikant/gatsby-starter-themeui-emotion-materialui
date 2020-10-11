import React from 'react';
import styled from '@emotion/styled';
import { Flex } from 'theme-ui';

const FooterWrapper = styled.div`
  width: 100%;
`;

const Footer = () => {
  return (
    <Flex sx={{ justifyContent: 'space-between' }}>
      <div>Footer</div>
      <div> Social Icons </div>
    </Flex>
  );
};

export default Footer;
