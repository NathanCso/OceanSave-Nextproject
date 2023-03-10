import React from 'react'
import Contact from '../components/Contact'
import Hero from '../components/Hero'

const contact = () => {
  return (
    <div>
        <Hero heading='Contact' message='Si vous souhaiter contribuer a notre association merci de nous contacter sur cette page' />
        <Contact />
    </div>
  )
}

export default contact