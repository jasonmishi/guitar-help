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

export const essentailMajorChords: Record<keyof Strings, Chord[]> = {
  1: [
    {
      // array of [string, fret, text | options]
      fingers: [
        [1, 1],
        [2, 1, { shape: Shape.PENTAGON }],
        [3, 2],
        [4, 3, { shape: Shape.PENTAGON }],
        [5, 3],
        [6, 1, { shape: Shape.PENTAGON }],
      ],
      barres: []
    },
    {
      fingers: [
        [1, 1],
        [2, 1],
        [3, 2],
        [4, 3, { shape: Shape.PENTAGON }],
        [5, 3, { shape: Shape.PENTAGON }],
        [6, 1, { shape: Shape.PENTAGON }],
      ],
      barres: []
    },
    {
      fingers: [
        [1, 2],
        [2, 2],
        [3, 3, { shape: Shape.PENTAGON }],
        [5, 1],
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
