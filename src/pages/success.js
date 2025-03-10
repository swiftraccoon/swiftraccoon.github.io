import * as React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SuccessPage = () => (
  <Layout>
    <div style={{ textAlign: "center", padding: "var(--space-6) 0" }}>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="64" 
        height="64" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="var(--color-primary)" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        style={{ marginBottom: "var(--space-4)" }}
      >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
      
      <h1 style={{ marginBottom: "var(--space-4)" }}>
        Message <span style={{ color: "var(--color-accent)" }}>Received!</span>
      </h1>
      
      <p style={{ maxWidth: "500px", margin: "0 auto", marginBottom: "var(--space-5)" }}>
        Thank you for reaching out. I've received your message and will get back to you as soon as possible.
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
        Return to Home
      </Link>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Message Received" description="Thank you for your message" />

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default SuccessPage 