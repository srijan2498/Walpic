import React from 'react'

const Footer = ({dark}) => {
  const year = new Date().getFullYear()
  return (
    <div className={`footer ${dark?"black":""}`}>
      © {year} Walpic. Developed by Srijan :)
    </div>
  )
}

export default Footer
