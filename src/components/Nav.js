/** @jsx jsx */
import { jsx } from 'theme-ui';
import styled from '@emotion/styled';
import { Flex } from 'theme-ui';

const NavWrapper = styled.nav`
  width: 100%;
`;

const Nav = () => {
  return (
    <Flex sx={{ justifyContent: 'space-between' }}>
      <div>Logo</div>
      <div> Contact Us </div>
    </Flex>
  );
};

export default Nav;
