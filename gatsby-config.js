/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config()
module.exports = {
  siteMetadata: {
    title: "Sohaib Ahmed",
    description: "Sohaib's Portfolio",
    author: "Sohaib Ahmed",
    twitterUsername: "@sohaib",
    image: "/yellow-metal-design-decoration.jpg",
    siteUrl: "https://thesohaibahmed.github.io/sohaib.github.io/",
  },
  pathPrefix: "/sohaib.github.io",
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `logos`,
        path: `${__dirname}/src/images/logos`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://thesohaibahmed.github.io/sohaib.github.io",
        sitemap:
          "https://thesohaibahmed.github.io/sohaib.github.io/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    `gatsby-plugin-playground`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-transition-link`,
  ],
}
