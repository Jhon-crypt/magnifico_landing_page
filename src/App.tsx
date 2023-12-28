import './App.css'
import Header from './components/header/header'
import LandingHero from './components/hero/landingHero'
import SectionHero from './components/hero/sectionHero'
import SectionHeroTwo from './components/hero/sectionTwoHero'
import SectionThreeHero from './components/hero/sectionThreeHero'
import CallToActionSection from './components/section/callToHeroSection'
import Footer from './components/footer/footer'

function App() {

  return (
    <>
      <Header />
      <LandingHero />
      <div
        data-aos="zoom-in"
        data-aos-offset="300"
        data-aos-delay="20"
        data-aos-duration="1500"
        data-aos-easing="ease-out-sine"

      >
        <SectionHero />
      </div>
      <div
        data-aos="zoom-in-down"
        data-aos-offset="300"
        data-aos-delay="20"
        data-aos-duration="1500"
        data-aos-easing="ease-out-sine"

      >
        <SectionHeroTwo />
      </div>
      <div
        data-aos="zoom-out"
        data-aos-offset="300"
        data-aos-delay="20"
        data-aos-duration="1500"
        data-aos-easing="ease-out-sine"

      >
        <SectionThreeHero />
      </div>
      <div
        data-aos="flip-up"
        data-aos-offset="300"
        data-aos-delay="20"
        data-aos-duration="1500"
        data-aos-easing="ease-out-sine"

      >
        <CallToActionSection />
      </div>
      <Footer />
    </>
  )
}

export default App
