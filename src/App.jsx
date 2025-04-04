import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainChart from './components/MainChart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MainChart/>
    </>
  )
}

export default App
