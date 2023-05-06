import { useEffect } from 'react';
import { SVGuitarChord, Chord, } from 'svguitar'

function ChordChart({ chord }: { chord: Chord }) {
  useEffect(() => {
    const chart = new SVGuitarChord('.chord-chart')
      .chord(
        chord
      )
      .configure({
        color: '#888',
      })

    chart.draw();

    return () => chart.remove();
  })

  return (
    <>
      <div className="chord-chart"></div>
    </>
  )
}

export default ChordChart;