/** @jsx jsx */
import { jsx } from 'theme-ui';
import styled from '@emotion/styled';

const GradientWrapper = styled.div`
  height: 100vh;
  background: ${(
    props
  ) => `linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%),
    ${props.theme.colors.primary}`};
`;

export default function Hero() {
  return <GradientWrapper>Hi</GradientWrapper>;
}
