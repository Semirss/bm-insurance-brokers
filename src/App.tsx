
import './App.css'
import ContactMe from './components/ContactMe'
// import FAQ from './components/FAQ'
import Footer from './components/Footer'
// import HeroSection from './components/HeroSection'
// import Insurance from './components/InsuranceSolutions'
import HomePage from './components/HomePage'
// import Sponsors from './components/Sponsors'
import StickyContact from './components/StickyContact'
// import Team from './components/Team'
import TeamSection from './components/TeamSection'
import InsuranceSection from './components/InsuranceSection'
import Claims from './components/Claims'
import InsurancePolicies from './components/InsurancePolicies'
function App() {
  

  return (
    <>
    <StickyContact/>
    <HomePage />
    <TeamSection />
   <InsuranceSection />
   <InsurancePolicies />
   <Claims />
   <ContactMe />
   <Footer />
    </>
  )
}

export default App
