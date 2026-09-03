import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTop from './lib/ScrollToTop.jsx'

const Home = lazy(() => import('./pages/Home.jsx'))
const About = lazy(() => import('./pages/About.jsx'))
const Programmes = lazy(() => import('./pages/Programmes.jsx'))
const AlexandraProgramme = lazy(() => import('./pages/AlexandraProgramme.jsx'))
const EarlyChildhoodDevelopment = lazy(() => import('./pages/EarlyChildhoodDevelopment.jsx'))
const EducationAfterSchool = lazy(() => import('./pages/EducationAfterSchool.jsx'))
const SkillsAndYouthDevelopment = lazy(() => import('./pages/SkillsAndYouthDevelopment.jsx'))
const SocialAndCommunityDevelopment = lazy(() => import('./pages/SocialAndCommunityDevelopment.jsx'))
const GetInvolved = lazy(() => import('./pages/GetInvolved.jsx'))
const Impact = lazy(() => import('./pages/Impact.jsx'))
const News = lazy(() => import('./pages/News.jsx'))
const Contact = lazy(() => import('./pages/Contact.jsx'))
const NotFound = lazy(() => import('./pages/NotFound.jsx'))

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Suspense fallback={<div className="py-32 text-center text-muted">Loading…</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programmes" element={<Programmes />} />
            <Route path="/programmes/alexandra-learner-advancement" element={<AlexandraProgramme />} />
            <Route path="/programmes/early-childhood-development" element={<EarlyChildhoodDevelopment />} />
            <Route path="/programmes/education-after-school" element={<EducationAfterSchool />} />
            <Route path="/programmes/skills-and-youth-development" element={<SkillsAndYouthDevelopment />} />
            <Route path="/programmes/social-and-community-development" element={<SocialAndCommunityDevelopment />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
