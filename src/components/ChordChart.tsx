import { useEffect, useRef } from 'react';
import { SVGuitarChord, Shape, Chord as SVGChord } from 'svguitar'

function chordToSVGuitarChord(chord: Chord): SVGChord {
  let svgChord: SVGChord = {
    fingers: [],
    barres: []
  };

  chord.fingers.forEach(finger => {
    const string = finger[0];
    const fret = finger[1];
    const optional = finger[2];

    svgChord.fingers.push([string, fret]);
    if (optional) {
      svgChord.fingers[svgChord.fingers.length - 1][2] = {shape : Shape.PENTAGON};
    }
  })

  return svgChord;
}

function ChordChart({ chord }: { chord: Chord }) {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    const chart = new SVGuitarChord(ref.current)
      .chord(
        chordToSVGuitarChord(chord)
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