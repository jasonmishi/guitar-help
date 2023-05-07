import { ReactElement, useState } from 'react'
import Note from './Note'
import String from './String'

interface FretboardMemorizationExerciseProps {
  notesInOrder: string[]
}

function FretboardMemorizationExercise({ notesInOrder }: FretboardMemorizationExerciseProps) {
  const [randomStrings, setRandomStrings] = useState(["1", "2", "3", "4", "5", "6"].sort(() => Math.random() - 0.5))

  const randomizeStrings = () => {
    setRandomStrings([...randomStrings.sort(() => Math.random() - 0.5)])
  }

  const notesComponents: ReactElement[] = []
  notesInOrder.forEach((note) => {
    notesComponents.push(<Note key={note} value={note} parentOnClick={randomizeStrings} />)
  })

  const stringsComponents: ReactElement[] = []
  randomStrings.forEach((note) => {
    stringsComponents.push(<String key={note} value={note} parentOnClick={randomizeStrings} />)
  })

  const showChords = () => {

  }

  return (
    <>
      <h1>
        {notesComponents}
      </h1>
      <h2>
        {stringsComponents}
      </h2>
    </>
  )
}

export default FretboardMemorizationExercise