/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Box } from 'theme-ui';
import styled from '@emotion/styled';
import Nav from 'components/Nav';
import Footer from 'components/Footer';

const HorizontalPaddings = styled.div``;

const Layout = ({ children }) => {
  return (
    <Box px={[3, 3, 4]}>
      <Nav />
      {children}
      <Footer />
    </Box>
  );
};

export default Layout;
