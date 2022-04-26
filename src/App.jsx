import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {CardBook} from './components/CardBook'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <CardBook />
      <CardBook />
      
    </div>
  )
}

export default App
