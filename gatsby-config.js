const isProduction = process.env.NODE_ENV === 'production'


module.exports = {
  siteMetadata: {
    title: `JRM.DEV`,
    description: `My personal blog.`,
    author: {
        name: `Joseph R Miles`,
        email: `joe@jrm.dev`,
    },
    siteUrl: `https://jrm.dev`,
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
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              showCaptions: true,
              markdownCaptions: true
            }
          },
          `gatsby-remark-numbered-footnotes`,
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              destinationDir: `images`,
              ignoreFileExtensions: [
                `.jpeg`,
                `.jpg`,
                `.png`
              ]
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-goatcounter`,
      options: {
        code: isProduction ? "jrm-dev" : "",
        head: true,
        pixel: true
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-remark-images`,
      options: {
        showCaptions: true,
        markdownCaptions: true
      }
    },
  ],
}