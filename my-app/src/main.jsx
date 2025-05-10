import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ListingsBoardPage from './pages/ListingsBoardPage.jsx'
import AddListingPage from './pages/AddListingPage.jsx'
import EditListingPage from './pages/EditListingPage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/listings" element={<ListingsBoardPage />} />
        <Route path="/add" element={<AddListingPage />} />
        <Route path="/edit" element={<EditListingPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
