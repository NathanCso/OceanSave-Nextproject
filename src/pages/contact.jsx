import React from 'react'
import Contact from '../components/Contact'
import Hero from '../components/Hero'

const contact = () => {
  return (
    <div>
        <Hero heading='Contact' message='Si vous souhaiter contribuer à notre association merci de nous contactez sur cette page' />
        <Contact />
    </div>
  )
}

export default contact