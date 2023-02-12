import React from 'react'

const Footer = ({dark}) => {
  return (
    <div className={`footer ${dark?"black":""}`}>
      © 2023 Walpic. Developed by Srijan Tripathi :)
    </div>
  )
}

export default Footer
