import { AnimatePresence } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'

import { GlobalStyles } from './components/GlobalStyles'
import { Nav } from './components/Nav'
import { OneMovie } from './components/OneMovie'
import { AboutUs } from './pages/AboutUs'
import { ContactUs } from './pages/ContactUs'
import { OurWork } from './pages/OurWork'

function App() {
  const location = useLocation()
  return (
    <div>
      <GlobalStyles />
      <Nav />
      <AnimatePresence mode={'wait'}>
        <Routes location={location} key={location.pathname}>
          <Route path={'/*'} element={<AboutUs />} />
          <Route path={'works'} element={<OurWork />} />
          <Route path={`work/:id`} element={<OneMovie />} />
          <Route path={'/contact'} element={<ContactUs />} />
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App
