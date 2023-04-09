import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const notes = ["A", "Ab", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"]
  const strings = ["1", "2", "3", "4", "5", "6"]
  const randomNotes = notes.sort(() => Math.random() - 0.5)
  const randomStrings = strings.sort(() => Math.random() - 0.5)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{randomNotes.map((note) => (" " + note))}</h1>
      <h2>{randomStrings.map((string) => (" " + string))}</h2>
    </div>
  )
}

export default App
