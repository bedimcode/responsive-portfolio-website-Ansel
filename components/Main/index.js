import { Fragment } from 'react'

import Home from './Home'
import About from './About'
import Skills from './Skills'
import Services from './Services'
import Works from './Works'
import Contact from './Contact'

const index = () => {
  return (
    <Fragment>
      <main className="main">
        <Home />
        <About />
        <Skills />
        {/* <Services /> */}
        <Works />
        <Contact />
      </main>
    </Fragment>
  )
}

export default index
