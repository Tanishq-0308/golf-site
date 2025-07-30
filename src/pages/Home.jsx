
import Navbar from '../components/Navbar'
import Hero from '../components/HeroSection'
import Benifits from '../components/Benifits'
import FindCourse from '../components/FindCourse'
import CouponsDeals from '../components/CouponsSection'
import Gallery from '../components/Gallery'
import DownloadAppComponent from '../components/DownloadAppSection'
import FootterSection from '../components/FootterSection'
import MembershipPlansSection from '../components/MembershipsPlansSection'
import NewTable from '../components/NewTable'
import MembershipPlansCardComponent from '../components/MembershipPlansCardComponent'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Benifits />
        <FindCourse />
        <MembershipPlansCardComponent />
        {/* <MembershipPlansSection /> */}
        {/* <MembershipPlans /> */}
        {/* <PlansComparison /> */}
        {/* <TableComparisons /> */}
        {/* <NewTable /> */}
        <CouponsDeals />
        <Gallery />
        <DownloadAppComponent />
        <FootterSection />
      </div>
    </>
  )
}

export default App
