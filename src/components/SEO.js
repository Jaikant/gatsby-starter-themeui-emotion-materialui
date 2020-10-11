import React from 'react';
import { GatsbySeo } from 'gatsby-plugin-next-seo';
import { siteMetadata } from '../../gatsby-config';
// import OGImage from '../assets/images/OGImage.jpg';
// import WhatsAppImg from '../assets/images/WhatsAppImg.jpg';

const SEO = (props) => {
  const {
    title = siteMetadata.title,
    description = siteMetadata.description,
    canonical = null,
    url = siteMetadata.siteUrl,
    image = null,
    absoluteUrl = false,
    pathname,
  } = props;

  return (
    <div>
      <GatsbySeo
        title={title}
        description={description}
        canonical={canonical ? canonical : url}
        // openGraph={{
        //   url,
        //   title,
        //   description,
        // images: [
        //   {
        //     url: `${url}${OGImage}`,
        //     width: 1200,
        //     height: 684,
        //     alt: 'Og Image'
        //   },
        //   {
        //     url: `${url}${WhatsAppImg}`,
        //     width: 800,
        //     height: 710,
        //     alt: 'WhatsApp Og Image'
        //   }
        // ],
        //   site_name: url,
        // }}
        twitter={{
          handle: '@jkntji',
          site: '@jkntji',
          cardType: 'summary_large_image',
        }}
      />
    </div>
  );
};

export default SEO;
