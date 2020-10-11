/** @jsx jsx */
import { jsx } from 'theme-ui';
import styled from '@emotion/styled';
import SEO from 'components/SEO';
import Hero from 'components/Hero';

export default function Home() {
  return (
    <div>
      <SEO />
      <Hero />
    </div>
  );
}
