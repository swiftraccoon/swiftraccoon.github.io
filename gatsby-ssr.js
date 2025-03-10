/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */
export const onRenderBody = ({ setHtmlAttributes, setBodyAttributes }) => {
  setHtmlAttributes({ lang: `en` })
  setBodyAttributes({ className: `dark-theme` })
}

// Keep the same wrap page element function as gatsby-browser.js for consistency
export const wrapPageElement = ({ element }) => {
  return element;
}
