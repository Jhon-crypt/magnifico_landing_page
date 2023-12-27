import './App.css'
import Header from './components/header/header'
import LandingHero from './components/hero/landingHero'
import SectionHero from './components/hero/sectionHero'
import SectionHeroTwo from './components/hero/sectionTwoHero'
import SectionThreeHero from './components/hero/sectionThreeHero'
import CallToActionSection from './components/section/callToHeroSection'

function App() {

  return (
    <>  
      <Header />
      <LandingHero />
      <SectionHero />
      <SectionHeroTwo />
      <SectionThreeHero />
      <CallToActionSection />
    </>
  )
}

export default App
