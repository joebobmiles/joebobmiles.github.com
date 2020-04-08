module.exports = {
  siteMetadata: {
    title: `Notes2Self`,
    author: {
        name: `Joseph Miles`,
        email: `joe@notes2self.dev`,
    },
    siteUrl: `https://notes2self.dev`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        allExtensions: true
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: "./src/components/Layout.tsx"
        }
      }
    }
  ],
}