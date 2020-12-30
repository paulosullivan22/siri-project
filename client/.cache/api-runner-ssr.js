var plugins = [{
      plugin: require('/Users/paulosullivan/repos/practice/siri-project-gatsby/client/node_modules/gatsby-plugin-google-gapi/gatsby-ssr'),
      options: {"plugins":[],"apiKey":"AIzaSyAPwtEQx1JWpo0XLdm0PWlpabNroCxfLN8","clientId":"77512555615-6ut3mfpt4u2hb4duj6br0in2oe2tjnqr.apps.googleusercontent.com","discoveryURLs":["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"],"scopes":["https://www.googleapis.com/auth/cloud-platform https://www.googleapis.com/auth/devstorage.full_control"]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
