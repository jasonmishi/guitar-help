import { ReactElement, useState } from 'react'
import ChordTypeSelect from './ChordTypeSelect'
import Note from './Note'
import StringButton from './GuitarString'
import EssentialChordsCharts from './EssentailChordsCharts'

interface FretboardMemorizationExerciseProps {
  notesInOrder: string[]
}

function FretboardMemorizationExercise({ notesInOrder }: FretboardMemorizationExerciseProps) {

  // Durstenfeld shuffle
  const shuffleArray = (array: GuitarStringArray): GuitarStringArray => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
  }

  const [randomStrings, setRandomStrings] = useState<GuitarStringArray>(shuffleArray([1, 2, 3, 4, 5, 6]))

  const randomizeStrings = () => {
    setRandomStrings([...shuffleArray(randomStrings)])
  }

  const notesComponents: ReactElement[] = []
  notesInOrder.forEach((note) => {
    notesComponents.push(
      <Note 
        key={note} 
        value={note} 
        parentOnClick={
          () => {
            randomizeStrings()
            chooseString(null)
          }
        } 
      />
    )
  })

  const [chosenString, chooseString]= useState<null | GuitarString>(null)
  const showChords = (rootString: GuitarString) => {
    chooseString(rootString)
  }

  const [chordType, chooseChordType] = useState<ChordType>("major");

  const chordCharts = chosenString == null ? "" : <EssentialChordsCharts rootstring={chosenString} type={chordType}/>;

  const stringsComponents: ReactElement[] = []
  randomStrings.forEach((guitarString) => {
    const active = guitarString === chosenString ? "active" : "";
    stringsComponents.push(
      <StringButton key={guitarString} status={active} value={guitarString} parentOnClick={showChords} />
    )
  })

  return (
    <>
      <ChordTypeSelect onChange={(chordType) => {chooseChordType(chordType)}}/>
      <h1>
        {notesComponents}
      </h1>
      <h2>
        {stringsComponents}
      </h2>
      {chordCharts}
    </>
  )
}

export default FretboardMemorizationExercise