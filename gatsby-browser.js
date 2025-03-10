/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// You can delete this file if you're not using it

// Apply the dark theme to the entire site
export const onClientEntry = () => {
  // Add a class to the body for additional styling if needed
  if (typeof document !== 'undefined') {
    document.body.classList.add('dark-theme');
  }
}

// Wrap all pages with a component that provides the dark theme context
export const wrapPageElement = ({ element }) => {
  return element;
}
