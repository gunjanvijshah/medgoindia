import Image from 'next/image'
import HeroSection from './components/Home/HeroSection'
import MedicalTourism from './components/Home/MedicalTourism'
import MedicalTreatments from './components/Home/MedicalTreatments'
import WhyChooseUs from './components/Home/WhyChooseUs'
import ImportantInformation from './components/Home/ImportantInformation'
import ClientCommendation from './components/Home/ClientCommendation'
import Faq from './components/Home/Faq'

export default function HomePage() {
  return (
    < >
    <HeroSection />
      <MedicalTourism />
      <MedicalTreatments />
      <WhyChooseUs />
      <ImportantInformation />
      <ClientCommendation />
      <Faq />
    </>
  )
}
