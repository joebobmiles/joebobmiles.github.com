const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  siteMetadata: {
    title: `JRM.DEV`,
    description: `My personal blog.`,
    author: {
        name: `Joseph R Miles`,
        email: `joe@jrm.dev`,
        twitter: `@joebobmiles`,
        github: `joebobmiles`,
        codepen: `joebobmiles`,
        dev: `joebobmiles`,
        medium: `joebobmiles`,
        linkedin: `josephrmiles`
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
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              showCaptions: true,
              markdownCaptions: true
            }
          },
          `gatsby-remark-twemoji`,
          `gatsby-remark-series`,
          `gatsby-remark-table-of-contents`,
          `gatsby-remark-autolink-headers`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              inlineCodeMarker: `>`
            }
          },
          {
            resolve: `gatsby-remark-external-links`,
            options: {
              target: "_blank",
              rel: "external nofollow noreferrer noopener"
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
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassOptions: {
          includePaths: [
            "./src/styles"
          ]
        },
        cssLoaderOptions: {
          camelCase: true,
        }
      }
    },
    {
      resolve: `gatsby-remark-images`,
      options: {
        showCaptions: true,
        markdownCaptions: true
      }
    },
    {
      resolve: `gatsby-transformer-markdown-references`,
      options: {
        types: [ "Mdx" ]
      }
    }
  ],
}