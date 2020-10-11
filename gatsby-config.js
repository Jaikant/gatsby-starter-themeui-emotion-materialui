/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 *
 */
const path = require('path');

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Blissful Bites. Eggless & healthy home made cakes.`,
    siteUrl: `https://blissfulbites.in`,
    description: `We make the most delicious cakes. The best part being our cakes are eggless, wheat based and we only use brown sugar.`,
    instagram: '/social-media/instagram',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-material-ui',
      options: {
        webFontsConfig: {
          fonts: {
            google: [
              {
                family: `Montserrat`,
                variants: [`300`, `400`, `500`, `700`, `800`, `900`],
              },
              {
                family: `Homemade Apple`,
                variants: [`300`, `400`, `500`, `700`, `800`, `900`],
              },
            ],
          },
        },
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        components: path.join(__dirname, 'src/components'),
        pages: path.join(__dirname, 'src/pages'),
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout`),
      },
    },
    'gatsby-plugin-next-seo',
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-emotion',
  ],
};
