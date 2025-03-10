import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <div style={{ textAlign: "center", padding: "var(--space-6) 0" }}>
      <h1 style={{ marginBottom: "var(--space-4)" }}>
        <span style={{ color: "var(--color-primary)" }}>404:</span> Not Found
      </h1>
      
      <p style={{ maxWidth: "500px", margin: "0 auto", marginBottom: "var(--space-5)" }}>
        Oops! You've reached a page that doesn't exist. The path may have been moved or deleted.
      </p>
      
      <Link 
        to="/" 
        style={{
          backgroundColor: "var(--color-primary)",
          color: "white",
          padding: "var(--space-3) var(--space-5)",
          borderRadius: "var(--border-radius)",
          display: "inline-block",
          textDecoration: "none",
          fontSize: "var(--font-md)",
          transition: "background-color 0.2s ease"
        }}
      >
        Go Back Home
      </Link>
    </div>
  </Layout>
)

export const Head = () => <Seo title="404: Not Found" description="Page not found" />

export default NotFoundPage
