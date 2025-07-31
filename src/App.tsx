
import './App.css'
import ContactMe from './components/ContactMe'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
import StickyContact from './components/StickyContact'
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
