import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Tutoring from './components/Tutoring';
import HireInstructors from './components/HireInstructor';
import Footer from './components/Footer';
import Mission from './components/Mission';
import Services from './components/Services';
import Testimonial from './components/Testimonial';
import ContactForm from './components/Contact';
import Etutor from './components/Etutor';
import StudyAbroadPage from './components/StudyAbroadPage';

const App = () => {
  return (
    <Router>
      <main>
        <Navbar />
        <Routes>

          <Route path="/" element={
            <>
              <Hero />
              <Mission />
              <Stats />
              <Services />
              <Tutoring />
              <HireInstructors />
              <Testimonial />
              <ContactForm />
            </>
          } />

          <Route path="/etutor" element={<Etutor />} />
          <Route path="/business-career" element={<Tutoring />} />
          <Route path="/travel-abroad" element={<Tutoring />} />
          <Route path="/study-abroad" element={<StudyAbroadPage />} />

        </Routes>
        <Footer />
      </main>
    </Router>
  );
};

export default App;