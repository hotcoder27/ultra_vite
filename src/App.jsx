import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import Stats from './components/Stats';
import Tutoring from './components/Tutoring';
import HireInstructors from './components/HireInstructor';
import Footer from './components/Footer';
import Mission from './components/Mission';
import Services from './components/Services';
import Testimonial from './components/Testimonial';
import ContactForm from './components/Contact';

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Mission />
      <Stats />
      <Services />
      <Tutoring />
      <HireInstructors />
      <Testimonial />
      <ContactForm />
      <Footer />
    </main>
  )
}

export default App