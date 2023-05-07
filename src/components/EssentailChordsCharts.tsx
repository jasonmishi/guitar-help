import { ReactElement } from 'react'
import {majorChords} from '../data/major-chords'
import ChordChart from './ChordChart'

function EssentialChordsCharts({rootstring, type} : {rootstring: GuitarString, type: "major"}) {
  // TODO: Maybe consider a databse here

  const chordCharts: ReactElement[] = []
  if (type === "major") {
    majorChords[rootstring].forEach((chord) => {
      chordCharts.push(<ChordChart chord={chord} />)
    })
  }
  
  return (
    <div>
      {chordCharts}
    </div>
  )
}

export default EssentialChordsCharts;