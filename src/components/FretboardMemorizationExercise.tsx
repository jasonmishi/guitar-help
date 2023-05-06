import { ReactElement, useState } from 'react'
import Note from './Note'

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

  return (
    <>
      <h1>
        {notesComponents}
      </h1>
      <h2>
        {randomStrings.map((string) => (" " + string))}
      </h2>
    </>
  )
}

export default FretboardMemorizationExercise