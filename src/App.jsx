import React from 'react'
import About from './components/about/Index'
import Experience from './components/experience/Index'
import Footer from './components/footer/Index'
import Header from './components/header/Index'
import Nav from './components/nav/Index'
import Services from './components/services/Index'
import Contact from './components/contact/Index'

const App = () => {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Services/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App