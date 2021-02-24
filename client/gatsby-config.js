require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    title: 'siri-project'
  },
  plugins: [
    'gatsby-plugin-sass'
  ]
}
