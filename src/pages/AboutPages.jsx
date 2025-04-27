import Navbar from "../components/Navbar"
import AboutHeader from "../components/AboutHeader"
import AboutLanyard from "../components/AboutLanyard"
import AboutCertif from "../components/AboutCertif"
import Footer from "../components/Footer"

export default function AboutPages() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <AboutHeader />
        <AboutLanyard />
        <AboutCertif />
      </main>
      <Footer />
    </div>
  )
}
