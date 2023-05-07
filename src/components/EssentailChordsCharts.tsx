import { ReactElement } from 'react'
import {essentailMajorChords} from '../data/essential-major-chords'
import ChordChart from './ChordChart'

function EssentialChordsCharts({rootstring, type} : {rootstring: GuitarString, type: "major"}) {
  // TODO: Maybe consider a databse here

  const chordCharts: ReactElement[] = []
  if (type === "major") {
    essentailMajorChords[rootstring].forEach((chord) => {
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