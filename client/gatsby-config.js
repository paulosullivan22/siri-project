require('dotenv').config({
  path: '.env'
})

module.exports = {
  siteMetadata: {
    title: 'siri-project'
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-google-gapi`,
      options: {
        apiKey: process.env.GATSBY_GOOGLE_API_KEY,
        clientId: process.env.GATSBY_GOOGLE_API_CLIENT_ID,
        discoveryURLs: ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'],
        scopes: [
          'https://www.googleapis.com/auth/cloud-platform https://www.googleapis.com/auth/devstorage.full_control'
        ]
      }
    }
  ]
}
