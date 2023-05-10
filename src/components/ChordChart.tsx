import { useEffect, useRef } from 'react';
import { SVGuitarChord, Chord, } from 'svguitar'

function ChordChart({ chord }: { chord: Chord }) {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    const chart = new SVGuitarChord(ref.current)
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
      <div ref={ref} className={"chord-chart"}></div>
    </>
  )
}

export default ChordChart;