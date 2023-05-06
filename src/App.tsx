import './App.css'
import FretboardMemorizationExercise from './FretboardMemorizationExercise'
import ChordChart from './ChordChart'
import { Shape } from 'svguitar'


function App() {
  const notes = ["A", "Ab", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"]
  const randomNotes = notes.sort(() => Math.random() - 0.5)

  return (
    <div className="App">
      <FretboardMemorizationExercise notesInOrder={randomNotes} />
      <ChordChart chord={{
            // array of [string, fret, text | options]
            fingers: [
              // finger at string 1, fret 2, with text '2'
              [1, 2, '2'],

              // finger at string 2, fret 3, with text '3', colored red and has class '.red'
              [2, 3, { text: '3', color: '#F00', className: 'red' }],

              // finger is triangle shaped
              [3, 3, { shape: Shape.TRIANGLE }],
              [6, 'x'],
            ],
            barres: []
          }
        }/>
    </div>
  )
}

export default App
