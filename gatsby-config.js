module.exports = {
  siteMetadata: {
    title: `FoodSense`,
    description: `All in one Gatsby web app - posts, portfolios, todos`,
    author: `@gsechibueze`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-sass`,
  ],
}
