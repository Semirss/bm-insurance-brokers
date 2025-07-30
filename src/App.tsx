
import './App.css'
import ContactMe from './components/ContactMe'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
// import HeroSection from './components/HeroSection'
import Insurance from './components/Insurance'
import LandingPage from './components/LandingPage'
import Sponsors from './components/Sponsors'
import StickyContact from './components/StickyContact'
// import Team from './components/Team'
import TeamSection from './components/TeamSection'
function App() {
  

  return (
    <>
    <StickyContact/>
    <LandingPage />
    <TeamSection />
   {/* <HeroSection /> */}
   {/* <Team/> */}
   <Sponsors />
   <Insurance />
   <FAQ />
   <ContactMe />
   <Footer />
    </>
  )
}

export default App
