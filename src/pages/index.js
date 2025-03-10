import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const BlogPostCard = ({ post }) => (
  <div style={{
    padding: "var(--space-4)",
    marginBottom: "var(--space-5)",
    borderRadius: "var(--border-radius)",
    backgroundColor: "var(--color-surface)",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    border: "1px solid rgba(255, 255, 255, 0.05)",
    position: "relative",
    overflow: "hidden"
  }}>
    {/* Blue accent line at the top */}
    <div style={{
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: "3px",
      background: "linear-gradient(90deg, var(--color-blue) 0%, var(--color-secondary) 100%)"
    }} />
    
    <Link 
      to={`/blog/${post.frontmatter.slug}`}
      style={{ 
        textDecoration: "none",
        color: "inherit",
        display: "block",
        paddingTop: "var(--space-2)"
      }}
    >
      <h2 style={{ 
        color: "var(--color-primary)",
        marginBottom: "var(--space-2)"
      }}>
        {post.frontmatter.title}
      </h2>
      
      <p style={{ 
        fontSize: "var(--font-sm)",
        color: "var(--color-blue-light)",
        marginBottom: "var(--space-3)"
      }}>
        {post.frontmatter.date}
      </p>
      
      <p style={{ marginBottom: 0 }}>
        {post.frontmatter.description || post.excerpt}
      </p>
      
      <div style={{
        marginTop: "var(--space-3)",
        fontSize: "var(--font-sm)",
        color: "var(--color-blue)",
        fontWeight: "500",
        display: "inline-flex",
        alignItems: "center"
      }}>
        Read more
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: "4px" }}>
          <path d="M5 12h14"></path>
          <path d="M12 5l7 7-7 7"></path>
        </svg>
      </div>
    </Link>
  </div>
);

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes;

  return (
    <Layout>
      <div>
        <h1 style={{ marginBottom: "var(--space-5)" }}>
          <span style={{ 
            background: "linear-gradient(90deg, var(--color-blue) 0%, #FFD700 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            color: "transparent",
            display: "inline"
          }}>
            Ramblin' Swift
          </span>{" "}
          <span style={{ color: "var(--color-primary)" }}>Notes</span>{" "}
          <span style={{ 
            background: "linear-gradient(90deg, #FFD700 0%, var(--color-blue) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            color: "transparent",
            display: "inline"
          }}>
            of Raccoon
          </span>
        </h1>
        
        <p className={styles.intro} style={{
          position: "relative",
          paddingLeft: "var(--space-4)",
          borderLeft: "3px solid var(--color-blue)"
        }}>
          This is my personal blog where I share my thoughts on various topics. <br />
          Feel free to explore the posts below.
        </p>
        
        <h2 style={{ 
          marginTop: "var(--space-5)",
          marginBottom: "var(--space-4)",
          display: "flex",
          alignItems: "center"
        }}>
          <span 
            style={{ 
              display: "inline-block", 
              width: "8px", 
              height: "30px", 
              background: "linear-gradient(180deg, var(--color-blue) 0%, var(--color-primary) 100%)",
              marginRight: "var(--space-3)",
              borderRadius: "4px"
            }} 
          />
          Recent Posts
        </h2>
        
        {posts.length > 0 ? (
          posts.map(post => (
            <BlogPostCard key={post.id} post={post} />
          ))
        ) : (
          <p>No blog posts found. Start writing!</p>
        )}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        id
        excerpt(pruneLength: 160)
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          slug
          description
        }
      }
    }
  }
`;

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
