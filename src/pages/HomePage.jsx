

import React from 'react'
import HeroPage from './HeroPage'
import News from '../components/News'
import Achievement from '../components/Achivement'
import Success from '../components/Success'
import Testimonials from '../components/Testimonials'
import Sponsors from '../components/Sponsor'

const HomePage = () => {
  return (
    <div>
      <HeroPage />
      <News />
      <Achievement />
      <Success />
      <Testimonials />
      <Sponsors />
    </div>
  )
}

export default HomePage



