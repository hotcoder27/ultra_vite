import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import Stats from './components/Stats';
import Tutoring from './components/Tutoring';
import HireInstructors from './components/HireInstructor';
import Footer from './components/Footer';
import Mission from './components/Mission';

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Mission />
      <Tutoring />
      <Stats />
      <HireInstructors />
      <Footer />
    </main>
  )
}

export default App