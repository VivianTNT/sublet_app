import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ListingsPage from './pages/ListingsPage';
import MatchPage from './pages/MatchPage';
import TenantPage from './pages/TenantPage';

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/listings" element={<ListingsPage />} />
          <Route path="/match" element={<MatchPage />} />
          <Route path="/tenant" element={<TenantPage />} />
        </Routes>
      </div>
    </Router>
  );
}
