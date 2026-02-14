import { Routes, Route, NavLink } from 'react-router-dom'
import './App.css'
import { ResumePage } from './pages/ResumePage.tsx'
import { PortfolioPage } from './pages/PortfolioPage.tsx'
import { ContactPage } from './pages/ContactPage.tsx'

function App() {
  return (
    <div className="site">
      <header className="site-header">
        <nav className="nav">
          <NavLink className="nav-link" to="/">Resume</NavLink>
          <NavLink className="nav-link" to="/portfolio">Portfolio</NavLink>
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </nav>
      </header>
      <main className="site-main">
        <Routes>
          <Route path="/" element={<ResumePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Zachary Gonzales</p>
      </footer>
    </div>
  )
}

export default App
