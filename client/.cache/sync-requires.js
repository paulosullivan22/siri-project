const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/paulosullivan/repos/practice/siri-project-gatsby/client/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/paulosullivan/repos/practice/siri-project-gatsby/client/src/pages/404.js"))),
  "component---src-pages-index-tsx": hot(preferDefault(require("/Users/paulosullivan/repos/practice/siri-project-gatsby/client/src/pages/index.tsx"))),
  "component---src-pages-interfaces-ts": hot(preferDefault(require("/Users/paulosullivan/repos/practice/siri-project-gatsby/client/src/pages/interfaces.ts")))
}

