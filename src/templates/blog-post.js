import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark
  
  return (
    <Layout>
      <article className="blog-post">
        <header>
          <h1 style={{ 
            color: "var(--color-primary)",
            marginBottom: "var(--space-3)",
            position: "relative",
            display: "inline-block"
          }}>
            {post.frontmatter.title}
            <div style={{
              position: "absolute",
              bottom: "-5px",
              left: "0",
              width: "100%",
              height: "2px",
              background: "linear-gradient(90deg, var(--color-blue) 0%, var(--color-primary) 100%)",
              borderRadius: "2px"
            }} />
          </h1>
          <p style={{ 
            color: "var(--color-blue-light)",
            fontSize: "var(--font-sm)",
            marginBottom: "var(--space-4)"
          }}>
            {post.frontmatter.date}
          </p>
        </header>
        
        <div style={{
          padding: "var(--space-4)",
          backgroundColor: "var(--color-surface)",
          borderRadius: "var(--border-radius)",
          marginBottom: "var(--space-5)",
          border: "1px solid rgba(255, 255, 255, 0.05)",
          position: "relative",
          overflow: "hidden"
        }}>
          {/* Blue accent bar */}
          <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "4px",
            height: "100%",
            backgroundColor: "var(--color-blue)"
          }} />
          
          <section 
            className="blog-post-content"
            style={{ 
              lineHeight: "var(--line-height-loose)",
              paddingLeft: "var(--space-4)"
            }}
            dangerouslySetInnerHTML={{ __html: post.html }} 
          />
        </div>
        
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "var(--space-5)"
        }}>
          <Link 
            to="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              color: "var(--color-blue)",
              textDecoration: "none",
              fontSize: "var(--font-sm)",
              fontWeight: "500"
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: "var(--space-2)" }}>
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back to all posts
          </Link>
          
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{
              display: "inline-flex",
              alignItems: "center",
              color: "var(--color-primary)",
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "var(--font-sm)",
              fontWeight: "500"
            }}
          >
            Back to top
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: "var(--space-2)" }}>
              <path d="M18 15l-6-6-6 6"/>
            </svg>
          </button>
        </div>
      </article>
    </Layout>
  )
}

export const Head = ({ data }) => {
  const post = data.markdownRemark
  return <Seo title={post.frontmatter.title} description={post.frontmatter.description || post.excerpt} />
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        slug
      }
    }
  }
`

export default BlogPostTemplate 