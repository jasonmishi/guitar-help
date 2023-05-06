import { Chord, } from 'svguitar'
import { Shape } from 'svguitar'

interface Strings {
  "1": Chord[],
  "2": Chord[],
  "3": Chord[],
  "4": Chord[],
  "5": Chord[],
  "6": Chord[],
}

export const majorChords: Record<keyof Strings, Chord[]> = {
  1: [
    {
      // array of [string, fret, text | options]
      fingers: [
        [1, 2, '2'],

        [2, 3, { text: '3', color: '#F00', className: 'red' }],

        [3, 3, { shape: Shape.TRIANGLE }],
        [6, 'x'],
      ],
      barres: []
    },
    {
      fingers: [
        [1, 2, { shape: Shape.TRIANGLE }],

        [2, 3, { text: '3', color: '#F00', className: 'red', shape: Shape.TRIANGLE }],

        [3, 3, { shape: Shape.TRIANGLE }],
        [6, 'x'],
      ],
      barres: []
    }
  ],
  2: [],
  3: [],
  4: [],
  5: [],
  6: []
} 
