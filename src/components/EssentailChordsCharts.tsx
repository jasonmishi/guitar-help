import { ReactElement } from 'react'
import {essentialMajorChords} from '../data/essential-major-chords'
import {essentialMinorChords} from '../data/essential-minor-chords'
import ChordChart from './ChordChart'
import './ChordCharts.css'

function EssentialChordsCharts({rootstring, type} : {rootstring: GuitarString, type: ChordType}) {
  // TODO: Maybe consider a databse here

  const chordCharts: ReactElement[] = []
  let count = 0;
  if (type === "major") {
    essentialMajorChords[rootstring].forEach((chord) => {
      count++;
      chordCharts.push(<ChordChart key={count.toString()} chord={chord} />)
    })
  } else if (type === "minor") {
    essentialMinorChords[rootstring].forEach((chord) => {
      count++;
      chordCharts.push(<ChordChart key={count.toString()} chord={chord} />)
    })
  }
  
  return (
    <div className='chord-charts'>
      {chordCharts}
    </div>
  )
}

export default EssentialChordsCharts;