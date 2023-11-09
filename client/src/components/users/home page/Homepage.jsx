import React from 'react'
import './style.css'
import Nav from './Navbar'
import Hero from './Hero'
import About from './About'
import Services from './Services'
import Footer from './Footer'


function Homepage(){
    return(
     <>   
        <Nav />
        <Hero />
        <Services />
        <About />
        <Footer />
     </>   

    )
}
export default Homepage;