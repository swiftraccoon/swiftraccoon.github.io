import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const ContactPage = () => (
  <Layout>
    <div>
      <h1 style={{ 
        marginBottom: "var(--space-5)",
        position: "relative",
        display: "inline-block" 
      }}>
        Contact <span style={{ color: "var(--color-primary)" }}>Me</span>
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
            I'd love to hear from you! Whether you have a question, feedback, or just want to say hello,
            feel free to reach out using the form below.
          </p>
          
          <form 
            style={{ 
              marginTop: "var(--space-5)" 
            }}
            action="https://formspree.io/f/xwplkeyv"
            method="POST"
          >
            <div style={{ marginBottom: "var(--space-4)" }}>
              <label 
                htmlFor="name"
                style={{
                  display: "block",
                  marginBottom: "var(--space-2)",
                  color: "var(--color-blue-light)"
                }}
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                style={{
                  width: "100%",
                  padding: "var(--space-3)",
                  backgroundColor: "var(--color-background)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "var(--border-radius)",
                  color: "var(--color-text)",
                  fontSize: "var(--font-md)",
                  transition: "border-color 0.2s ease",
                  outline: "none"
                }}
                onFocus={(e) => e.target.style.borderColor = "var(--color-blue)"}
                onBlur={(e) => e.target.style.borderColor = "rgba(255, 255, 255, 0.1)"}
              />
            </div>
            
            <div style={{ marginBottom: "var(--space-4)" }}>
              <label 
                htmlFor="email"
                style={{
                  display: "block",
                  marginBottom: "var(--space-2)",
                  color: "var(--color-blue-light)"
                }}
              >
                Email
              </label>
              <input
                type="email"
                name="_replyto"
                id="email"
                required
                style={{
                  width: "100%",
                  padding: "var(--space-3)",
                  backgroundColor: "var(--color-background)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "var(--border-radius)",
                  color: "var(--color-text)",
                  fontSize: "var(--font-md)",
                  transition: "border-color 0.2s ease",
                  outline: "none"
                }}
                onFocus={(e) => e.target.style.borderColor = "var(--color-blue)"}
                onBlur={(e) => e.target.style.borderColor = "rgba(255, 255, 255, 0.1)"}
              />
            </div>
            
            <div style={{ marginBottom: "var(--space-4)" }}>
              <label 
                htmlFor="message"
                style={{
                  display: "block",
                  marginBottom: "var(--space-2)",
                  color: "var(--color-blue-light)"
                }}
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="5"
                required
                style={{
                  width: "100%",
                  padding: "var(--space-3)",
                  backgroundColor: "var(--color-background)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "var(--border-radius)",
                  color: "var(--color-text)",
                  fontSize: "var(--font-md)",
                  resize: "vertical",
                  transition: "border-color 0.2s ease",
                  outline: "none"
                }}
                onFocus={(e) => e.target.style.borderColor = "var(--color-blue)"}
                onBlur={(e) => e.target.style.borderColor = "rgba(255, 255, 255, 0.1)"}
              />
            </div>
            
            {/* Honeypot field to prevent spam */}
            <input type="text" name="_gotcha" style={{ display: "none" }} />
            
            <button
              type="submit"
              style={{
                background: "linear-gradient(90deg, var(--color-blue) 0%, var(--color-primary) 100%)",
                color: "white",
                padding: "var(--space-3) var(--space-5)",
                border: "none",
                borderRadius: "var(--border-radius)",
                fontSize: "var(--font-md)",
                cursor: "pointer",
                transition: "opacity 0.2s ease",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
              }}
              onMouseOver={(e) => e.target.style.opacity = "0.9"}
              onMouseOut={(e) => e.target.style.opacity = "1"}
              onFocus={(e) => e.target.style.opacity = "0.9"}
              onBlur={(e) => e.target.style.opacity = "1"}
            >
              Send Message
            </button>
          </form>
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

export const Head = () => <Seo title="Contact Me" description="Get in touch with me" />

export default ContactPage 