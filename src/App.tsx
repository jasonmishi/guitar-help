import './App.css'
import FretboardMemorizationExercise from './components/FretboardMemorizationExercise'
import EssentialChordsCharts from './components/EssentailChordsCharts'


function App() {
  const notes = ["A", "Ab", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"]
  const randomNotes = notes.sort(() => Math.random() - 0.5)

  return (
    <div className="App">
      <FretboardMemorizationExercise notesInOrder={randomNotes} />
      <EssentialChordsCharts rootstring="1" type='major'/>
    </div>
  )
}

export default App
