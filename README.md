A static bird encyclopedia inspired by [this concept](https://dribbble.com/shots/2595295-Birds-of-Paradise-Encyclopedia).

All images and copy borrowed from various sources online (for purely noncommercial purposes 🧐) and edited by myself.

## Tools

- [Gatsby](https://www.gatsbyjs.org/) for markdown and [image](https://www.gatsbyjs.org/packages/gatsby-plugin-sharp/) magic
- [CSS modules](https://glenmaddern.com/articles/css-modules) via [Gatsby-plugin-react-css-modules](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-react-css-modules) (set up in gatsby-node as a workaround for Babel 7: see https://github.com/gatsbyjs/gatsby/issues/8317)
- Typography.js for fonts
- [Gatsby-plugin-react-svg](https://www.npmjs.com/package/gatsby-plugin-react-svg) + [require.context](https://webpack.js.org/guides/dependency-management/#require-context) as "icon library" ([examples](https://stackoverflow.com/questions/45754739/how-to-import-an-entire-folder-of-svg-images-or-how-to-load-them-dynamically-i))
- [React-pose](https://popmotion.io/pose/api/posed/) for animations

## Todo

- Animations
  - Fix header title
  - Border for header nav links
- Prop-types or TS
- Gzip
- Polyfills
