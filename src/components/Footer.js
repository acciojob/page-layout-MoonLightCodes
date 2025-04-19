import React from 'react'

export const Footer = () => {
    const currentYear = new Date().getFullYear();
    // console.log(date.getFullYear())
  return (
    <h3>&copy; {currentYear} My Website. All rights reserved.</h3>
  )
}
