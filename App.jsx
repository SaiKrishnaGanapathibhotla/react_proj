import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Navbar.jsx'
import Hero from './Hero.jsx'
import Work from './Work-options.jsx'
import Jobs from './Job-postings'
import ViewAll from './View-All'

function App() {

  return (
    <>
          <Navbar />
          <Hero />
          <Work />
          <Jobs />
          <ViewAll />
    </>
  )
}

export default App
