import './App.css'
import GolfCourses from './components/GolfCourses'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import TournamentSchedulePage from './pages/TournamentSchedulePage'
import EventsPage from './components/EventsPage'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/golfcourses" element={<GolfCourses />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/events/TournamentSchedulePage" element={<TournamentSchedulePage />} />
        <Route path="/events/results" element={<EventsPage />} />

      </Routes>
    </>
  )
}

export default App
