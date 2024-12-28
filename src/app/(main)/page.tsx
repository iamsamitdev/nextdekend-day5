// rfc
import AboutUs from '@/components/frontend/AboutUs'
import CompanyLogos from '@/components/frontend/CompanyLogos'
import Hero from '@/components/frontend/Hero'
import NewsUpdate from '@/components/frontend/NewsUpdate'
import Resume from '@/components/frontend/Resume'
import React from 'react'

export default function App() {
  return (
    <main>
      <Hero />
      <CompanyLogos />
      <AboutUs />
      <NewsUpdate />
      <Resume />
    </main>
  )
}
