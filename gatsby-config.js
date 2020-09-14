module.exports = {
    pathPrefix: `/YirueiLuBlogGatsby`,
    siteMetadata: {
        title: `YirueiLuBlog`,
        description: `Some notes about web applications, machine learning and coding`,
        author: `@YirueiLu`,
        siteUrl: 'https://yirueilu-b.github.io/YirueiLuBlogGatsby/',
    },
    plugins: [
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/code.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
        // `gatsby-plugin-material-ui`,
        {
            resolve: `gatsby-plugin-material-ui`,
            options: {
                stylesProvider: {
                    injectFirst: true,
                },
            },
        },
    ],
};
