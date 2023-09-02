import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import { DashBoard, ShowDishes, Results, Login } from './components'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <Router>
      <Toaster position='top-right' />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<DashBoard />} />
        <Route path='/list' element={<ShowDishes />} />
        <Route path='/list/results' element={<Results />} />
      </Routes>
    </Router>
  )
}

export default App
