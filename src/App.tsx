import './App.css'
import { useEffect } from 'react';
import { SVGuitarChord } from 'svguitar'
import FretboardMemorizationExercise from './FretboardMemorizationExercise'


function App() {
  const notes = ["A", "Ab", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"]
  const randomNotes = notes.sort(() => Math.random() - 0.5)

  useEffect(() => {
      let chart = new SVGuitarChord('#test')
      .chord({
        // array of [string, fret, text | options]
        fingers: [
          // finger at string 1, fret 2, with text '2'
          [1, 2, '2'],

          // finger at string 2, fret 3, with text '3', colored red and has class '.red'
          [2, 3, { text: '3', color: '#F00', className: 'red' }],

          // finger is triangle shaped
          [3, 3, { shape: 'triangle' }],
          [6, 'x'],
        ],

        // optional: barres for barre chords
        barres: [
          {
            fromString: 5,
            toString: 1,
            fret: 1,
            text: '1',
            color: '#0F0',
            textColor: '#F00',
            className: 'my-barre-chord',
          },
        ],

        // title of the chart (optional)
        title: 'F# minor',

        // position (defaults to 1)
        position: 2,
      })
      .configure({
        // Customizations (all optional, defaults shown)

        /**
         * Orientation of the chord diagram. Chose between 'vertical' or 'horizontal'
         */
        orientation: 'vertical',

        /**
         * Select between 'normal' and 'handdrawn'
         */
        style: 'normal',

        /**
         * The number of strings
         */
        strings: 6,

        /**
         * The number of frets
         */
        frets: 4,

        /**
         * Default position if no positon is provided (first fret is 1)
         */
        position: 1,

        /**
         * These are the labels under the strings. Can be any string.
         */
        tuning: ['E', 'A', 'D', 'G', 'B', 'E'],

        /**
         * The position of the fret label (eg. "3fr")
         */
        fretLabelPosition: 'right',

        /**
         * The font size of the fret label
         */
        fretLabelFontSize: 38,

        /**
         * The font size of the string labels
         */
        tuningsFontSize: 28,

        /**
         * Size of a finger or barre relative to the string spacing
         */
        fingerSize: 0.65,

        /**
         * Color of a finger or barre
         */
        fingerColor: '#000',

        /**
         * The color of text inside fingers and barres
         */
        fingerTextColor: '#FFF',

        /**
         * The size of text inside fingers and barres
         */
        fingerTextSize: 22,

        /**
         * stroke color of a finger or barre. Defaults to the finger color if not set
         */
        fingerStrokeColor: '#000000',

        /**
         * stroke width of a finger or barre
         */
        fingerStrokeWidth: 0,

        /**
         * stroke color of a barre chord. Defaults to the finger color if not set
         */
        barreChordStrokeColor: '#000000',

        /**
         * stroke width of a barre chord
         */
        barreChordStrokeWidth: 0,

        /**
         * Height of a fret, relative to the space between two strings
         */
        fretSize: 1.5,

        /**
         * The minimum side padding (from the guitar to the edge of the SVG) relative to the whole width.
         * This is only applied if it's larger than the letters inside of the padding (eg the starting fret)
         */
        sidePadding: 0.2,

        /**
         * The font family used for all letters and numbers
         */
        fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',

        /**
         * Default title of the chart if no title is provided
         */
        title: 'F# minor',

        /**
         * Font size of the title. This is only the initial font size. If the title doesn't fit, the title
         * is automatically scaled so that it fits.
         */
        titleFontSize: 48,

        /**
         * Space between the title and the chart
         */
        titleBottomMargin: 0,

        /**
         * Global color of the whole chart. Can be overridden with more specifig color settings such as
         * @link titleColor or @link stringColor etc.
         */
        color: '#000000',

        /**
         * The background color of the chord diagram. By default the background is transparent. To set the background to transparent either set this to 'none' or undefined
         */
        backgroundColor: 'none',

        /**
         * Barre chord rectangle border radius relative to the fingerSize (eg. 1 means completely round endges, 0 means not rounded at all)
         */
        barreChordRadius: 0.25,

        /**
         * Size of the Xs and Os above empty strings relative to the space between two strings
         */
        emptyStringIndicatorSize: 0.6,

        /**
         * Global stroke width
         */
        strokeWidth: 2,

        /**
         * The width of the nut (only used if position is 1)
         */
        nutWidth: 10,

        /**
         * If this is set to `true`, the starting fret (eg. 3fr) will not be shown. If the position is 1 the
         * nut will have the same width as all other frets.
         */
        noPosition: false,

        /**
         * The color of the title (overrides color)
         */
        titleColor: '#000000',

        /**
         * The color of the strings (overrides color)
         */
        stringColor: '#000000',

        /**
         * The color of the fret position (overrides color)
         */
        fretLabelColor: '#000000',

        /**
         * The color of the tunings (overrides color)
         */
        tuningsColor: '#000000',

        /**
         * The color of the frets (overrides color)
         */
        fretColor: '#000000',

        /**
         * When set to true the distance between the chord diagram and the top of the SVG stayes the same,
         * no matter if a title is defined or not.
         */
        fixedDiagramPosition: false,

        /**
         * Text of the watermark (text on the bottom of the chart)
         */
        watermark: 'some watermark',

        /**
         * Font size of the watermark
         */
        watermarkFontSize: 12,

        /**
         * Color of the watermark (overrides color)
         */
        watermarkColor: '#000000',

        /**
         * Font-family of the watermark (overrides fontFamily)
         */
        watermarkFontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',

        /**
         * The title of the SVG. This is not visible in the SVG, but can be used for accessibility.
         */
        svgTitle: 'Guitar chord diagram of F# minor',
      })

      chart.draw();

      return () => chart.remove();
  })

  return (
    <div className="App">
      <div id="test"></div>
      <FretboardMemorizationExercise notesInOrder={randomNotes} />
    </div>
  )
}

export default App
