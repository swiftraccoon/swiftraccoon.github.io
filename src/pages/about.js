import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = () => (
  <Layout>
    <div>
      <h1 style={{ 
        marginBottom: "var(--space-5)",
        position: "relative",
        display: "inline-block"
      }}>
        About <span style={{ color: "var(--color-primary)" }}>Me</span>
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
      
      <div style={{ 
        backgroundColor: "var(--color-surface)",
        padding: "var(--space-5)",
        borderRadius: "var(--border-radius)",
        marginBottom: "var(--space-6)",
        border: "1px solid rgba(255, 255, 255, 0.05)",
        position: "relative",
        overflow: "hidden"
      }}>
        {/* Blue accent bar */}
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "4px",
          height: "100%",
          backgroundColor: "var(--color-blue)"
        }} />
        
        <div style={{ paddingLeft: "var(--space-4)" }}>
          <p>
            Hello!
          </p>
          
          <p>
            TBD
          </p>
          
          <h2 style={{ 
            marginTop: "var(--space-5)", 
            marginBottom: "var(--space-3)",
            color: "var(--color-primary)",
            position: "relative",
            display: "inline-block",
            paddingBottom: "var(--space-2)"
          }}>
            My Background
            <div style={{
              position: "absolute",
              bottom: "0",
              left: "0",
              width: "50%",
              height: "2px",
              background: "linear-gradient(90deg, var(--color-blue) 0%, transparent 100%)",
              borderRadius: "2px"
            }} />
          </h2>
          
          <p>
            TBD
          </p>
          
          <h2 style={{ 
            marginTop: "var(--space-5)", 
            marginBottom: "var(--space-3)",
            color: "var(--color-primary)",
            position: "relative",
            display: "inline-block",
            paddingBottom: "var(--space-2)"
          }}>
            Connect With Me
            <div style={{
              position: "absolute",
              bottom: "0",
              left: "0",
              width: "50%",
              height: "2px",
              background: "linear-gradient(90deg, var(--color-blue) 0%, transparent 100%)",
              borderRadius: "2px"
            }} />
          </h2>
          
          <p>
            I'm always open to discussions, collaborations, or just a friendly chat.
            Feel free to reach out to me through my <Link to="/contact" style={{ color: "var(--color-blue)", textDecoration: "none", fontWeight: "500" }}>contact page</Link>.
          </p>
        </div>
      </div>
      
      <Link 
        to="/" 
        style={{
          color: "var(--color-blue)",
          textDecoration: "none",
          marginTop: "var(--space-4)",
          display: "inline-flex",
          alignItems: "center",
          fontSize: "var(--font-sm)",
          fontWeight: "500"
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: "var(--space-2)" }}>
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
        Back to Home
      </Link>
    </div>
  </Layout>
)

export const Head = () => <Seo title="About Me" description="Learn more about the author of this blog" />

export default AboutPage 