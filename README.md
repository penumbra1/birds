Inspired by [this concept](https://dribbble.com/shots/2595295-Birds-of-Paradise-Encyclopedia).

All images and copy borrowed from various sources online (for purely noncommercial purposes 🧐) and edited by myself.

## Overview

- [CSS modules](https://glenmaddern.com/articles/css-modules) are great
- [Gatsby-plugin-react-css-modules](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-react-css-modules) allows to use style name shortcuts (but had to use a workaround and set it up in gatsby-node instead of gatsby-config due to babel version conflict: see https://github.com/gatsbyjs/gatsby/issues/8317)
- Typography.js handles all styles related to fonts
- Gatsby-plugin-react-svg inlines svg
- [require.context](https://webpack.js.org/guides/dependency-management/#require-context) imports an the entire icons folder ([examples](https://stackoverflow.com/questions/45754739/how-to-import-an-entire-folder-of-svg-images-or-how-to-load-them-dynamically-i))
- I used react-pose for animations

## Todo

- Animations
- -- Stagger ItemNav
- -- Spring for index link
- -- Border for header nav links
-
- TS
- Polyfills for IE/Edge?
