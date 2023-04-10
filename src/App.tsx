import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FretboardMemorizationExercise from './FretboardMemorizationExercise'


function App() {
  const notes = ["A", "Ab", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"]
  const randomNotes = notes.sort(() => Math.random() - 0.5)

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
      <FretboardMemorizationExercise notesInOrder={randomNotes} />
    </div>
  )
}

export default App
