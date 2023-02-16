import React from 'react';

// Pages
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import PortfolioPage from './pages/PortfolioPage';
import ProjectPage from './pages/ProjectsPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LayoutPage from './pages/LayoutPage';
import StorePage from './pages/StorePage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutPage />}>
            <Route index element={<HomePage />} />
            <Route path='contact' element={<ContactPage />} />
            <Route path="portfolio" element={<PortfolioPage />} />
            <Route path="projects" element={<ProjectPage />} />
            <Route path="store" element={<StorePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;