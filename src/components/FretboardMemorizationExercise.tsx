import { ReactElement, useState } from 'react'
import Note from './Note'
import String from './String'
import EssentialChordsCharts from './EssentailChordsCharts'

interface FretboardMemorizationExerciseProps {
  notesInOrder: string[]
}

function FretboardMemorizationExercise({ notesInOrder }: FretboardMemorizationExerciseProps) {

  const shuffleArray = (array: GuitarStringArray): GuitarStringArray => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
  }

  const [randomStrings, setRandomStrings] = useState<GuitarStringArray>(shuffleArray(["1", "2", "3", "4", "5", "6"]))

  const randomizeStrings = () => {
    setRandomStrings(shuffleArray(randomStrings))
  }

  const notesComponents: ReactElement[] = []
  notesInOrder.forEach((note) => {
    notesComponents.push(<Note key={note} value={note} parentOnClick={randomizeStrings} />)
  })

  const [chosenString, chooseString] = useState(randomStrings[0])
  const showChords = (rootString: GuitarString, chordType="major") => {
    chooseString(rootString)
  }

  const stringsComponents: ReactElement[] = []
  randomStrings.forEach((string) => {
    stringsComponents.push(<String key={string} value={string} parentOnClick={showChords} />)
  })

  return (
    <>
      <h1>
        {notesComponents}
      </h1>
      <h2>
        {stringsComponents}
      </h2>
      <EssentialChordsCharts rootstring={chosenString} type='major'/>
    </>
  )
}

export default FretboardMemorizationExercise