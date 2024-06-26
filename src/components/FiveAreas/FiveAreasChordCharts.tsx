import { ReactElement } from 'react'
import {fiveAreasMajorChords} from '../../data/five-areas/five-areas-major-chords'
import { fiveAreasMinorChords } from '../../data/five-areas/five-areas-minor-chords'
import { fiveAreasDom7Chords } from '../../data/five-areas/five-areas-dom7-chords'
import ChordChart from '../ChordChart'

function EssentialChordsCharts({type} : {type: ChordType}) {
  const chordCharts: ReactElement[] = []
  let count = 0;
  if (type === "major") {
    fiveAreasMajorChords.forEach((chord) => {
      count++;
      chordCharts.push(<ChordChart key={count.toString()} chord={chord} />)
    })
  } else if (type === "minor") {
    fiveAreasMinorChords.forEach((chord) => {
      count++;
      chordCharts.push(<ChordChart key={count.toString()} chord={chord} />)
    })
  } else if (type === "dom7") {
    fiveAreasDom7Chords.forEach((chord) => {
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