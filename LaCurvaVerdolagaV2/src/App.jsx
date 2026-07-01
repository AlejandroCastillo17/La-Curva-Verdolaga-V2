import { useState } from 'react'
import React from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from './Layouts/Layout.jsx'
import Inicio from './Pages/Inicio.jsx'
import Historia from './Pages/Historia.jsx'
import Leyendas from './Pages/Leyendas.jsx'

function App() {

  return (
    <>

      <Router>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path="/" element={<Inicio />} />
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/historia" element={<Historia />} />
            <Route path="/leyendas" element={<Leyendas />} />
          </Route>
        </Routes>
      </Router>

    </>
  )
}

export default App
