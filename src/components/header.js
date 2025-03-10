import * as React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
      borderBottom: `1px solid rgba(255, 255, 255, 0.1)`,
      backgroundColor: `var(--color-surface)`,
      position: `relative`,
    }}
  >
    {/* Blue/Purple Gradient Line */}
    <div 
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: "2px",
        background: "linear-gradient(90deg, var(--color-blue) 0%, var(--color-primary) 50%, var(--color-secondary) 100%)"
      }}
    />
    
    <Link
      to="/"
      style={{
        fontSize: `var(--font-md)`,
        fontWeight: `600`,
        textDecoration: `none`,
        background: `linear-gradient(90deg, var(--color-blue) 0%, var(--color-primary) 100%)`,
        WebkitBackgroundClip: `text`,
        WebkitTextFillColor: `transparent`,
        letterSpacing: `0.5px`,
      }}
    >
      {siteTitle}
    </Link>
    <nav>
      <Link
        to="/"
        style={{
          fontSize: `var(--font-sm)`,
          textDecoration: `none`,
          marginRight: `var(--space-4)`,
          color: `var(--color-text)`,
          transition: `color 0.2s ease`,
        }}
        activeStyle={{
          color: `var(--color-blue)`,
        }}
      >
        Home
      </Link>
      <Link
        to="/about"
        style={{
          fontSize: `var(--font-sm)`,
          textDecoration: `none`,
          marginRight: `var(--space-4)`,
          color: `var(--color-text)`,
          transition: `color 0.2s ease`,
        }}
        activeStyle={{
          color: `var(--color-blue)`,
        }}
      >
        About
      </Link>
      <Link
        to="/contact"
        style={{
          fontSize: `var(--font-sm)`,
          textDecoration: `none`,
          color: `var(--color-text)`,
          transition: `color 0.2s ease`,
        }}
        activeStyle={{
          color: `var(--color-blue)`,
        }}
      >
        Contact
      </Link>
    </nav>
  </header>
)

export default Header
