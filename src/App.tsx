import './App.css'
import FretboardMemorizationExercise from './FretboardMemorizationExercise'
import ChordChart from './ChordChart'


function App() {
  const notes = ["A", "Ab", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"]
  const randomNotes = notes.sort(() => Math.random() - 0.5)

  return (
    <div className="App">
      <FretboardMemorizationExercise notesInOrder={randomNotes} />
      <ChordChart />
    </div>
  )
}

export default App
