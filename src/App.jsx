import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import Stats from './components/Stats';
import Tutoring from './components/Tutoring';
import HireInstructors from './components/HireInstructor';
import Footer from './components/Footer';

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <Tutoring />
      <HireInstructors />
      <Footer />
    </main>
  )
}

export default App