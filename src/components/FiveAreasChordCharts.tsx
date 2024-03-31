import { ReactElement } from 'react'
import {fiveAreasMajorChords} from '../data/five-areas-major-chords'
import ChordChart from './ChordChart'
import './ChordCharts.css'

function EssentialChordsCharts({type} : {type: ChordType}) {
  const chordCharts: ReactElement[] = []
  let count = 0;
  if (type === "major") {
    fiveAreasMajorChords.forEach((chord) => {
      count++;
      chordCharts.push(<ChordChart key={count.toString()} chord={chord} />)
    })
  } else if (type === "minor") {
  }
  
  return (
    <div className='chord-charts'>
      {chordCharts}
    </div>
  )
}

export default EssentialChordsCharts;