import { ReactElement, useState } from 'react'
import Note from './Note'

function FretboardMemorizationExercise() {
  const notes = ["A", "Ab", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"]
  const randomNotes = notes.sort(() => Math.random() - 0.5)
  const strings = ["1", "2", "3", "4", "5", "6"]
  const [randomStrings, setRandomStrings] = useState(strings.sort(() => Math.random() - 0.5))
  const randomizeStrings = () => {
    setRandomStrings([...randomStrings.sort(() => Math.random() - 0.5)])
  }

  const notesComponents: ReactElement[] = []
  randomNotes.forEach((note) => {
    notesComponents.push(<Note key={ note } value = { note } parentOnClick = { randomizeStrings } />)
  })

  return (
    <>
      <h1>
        { notesComponents }
      </h1>
      <h2>
        { randomStrings.map((string) => (" " + string)) }
      </h2>
    </>
    )
}

export default FretboardMemorizationExercise