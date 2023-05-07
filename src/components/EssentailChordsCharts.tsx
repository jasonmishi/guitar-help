import { ReactElement } from 'react'
import {essentailMajorChords} from '../data/essential-major-chords'
import ChordChart from './ChordChart'

function EssentialChordsCharts({rootstring, type} : {rootstring: GuitarString, type: "major"}) {
  // TODO: Maybe consider a databse here

  const chordCharts: ReactElement[] = []
  let count: number = 0;
  if (type === "major") {
    essentailMajorChords[rootstring].forEach((chord) => {
      count++;
      chordCharts.push(<ChordChart key={count.toString()} chord={chord} />)
    })
  }
  
  return (
    <div>
      {chordCharts}
    </div>
  )
}

export default EssentialChordsCharts;