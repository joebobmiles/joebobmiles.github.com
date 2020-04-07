module.exports = {
  siteMetadata: {
    title: `My Blog`,
    author: {
        name: `Full Name`,
    },
    siteUrl: `https://example.dev`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        allExtensions: true
      }
    }
  ],
}