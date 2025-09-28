import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Contact from './components/contact'
import Gallery from './components/gallery'
import Home from './components/home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Contact/>
      <Gallery/>
      <Home/>
    </>
  )
}

export default App
