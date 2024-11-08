import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>

      <h1 className='text-xl'>Welcome to Assignment 8</h1>
      <button className='btn '>Click Me</button>
   </>
  )
}

export default App
