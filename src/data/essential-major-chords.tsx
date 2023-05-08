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
  2: [
    {
      // array of [string, fret, text | options]
      fingers: [
        [1, 1],
        [2, 2],
        [3, 1],
        [4, 3, { shape: Shape.PENTAGON }],
        [5, 4, { shape: Shape.PENTAGON }],
        [6, 1, { shape: Shape.PENTAGON }],
        [6, 4, { shape: Shape.PENTAGON }],
      ],
      barres: []
    },
    {
      fingers: [
        [1, 1, { shape: Shape.PENTAGON }],
        [1, 4, { shape: Shape.PENTAGON }],
        [2, 2],
        [3, 1],
        [4, 3],
        [5, 4, { shape: Shape.PENTAGON }],
        [6, 1, { shape: Shape.PENTAGON }],
        [6, 4, { shape: Shape.PENTAGON }],
      ],
      barres: []
    },
    {
      fingers: [
        [1, 1, { shape: Shape.PENTAGON }],
        [1, 4, { shape: Shape.PENTAGON }],
        [2, 2],
        [3, 1],
        [4, 3, { shape: Shape.PENTAGON }],
        [5, 4, { shape: Shape.PENTAGON }],
        [6, 1],
      ],
      barres: []
    },
    {
      fingers: [
        [1, 4],
        [2, 2],
        [3, 1, { shape: Shape.PENTAGON }],
        [4, 3],
        [5, 4, { shape: Shape.PENTAGON }],
        [6, 4, { shape: Shape.PENTAGON }],
      ],
      barres: []
    },
    {
      fingers: [
        [1, 3, { shape: Shape.PENTAGON }],
        [2, 1],
        [4, 2],
        [5, 3, { shape: Shape.PENTAGON }],
        [6, 3],
      ],
      barres: []
    },
  ],
  3: [
    {
      // array of [string, fret, text | options]
      fingers: [
        [1, 4, { shape: Shape.PENTAGON }],
        [2, 1, { shape: Shape.PENTAGON }],
        [2, 4, { shape: Shape.PENTAGON }],
        [3, 1],
        [4, 1],
        [5, 3],
        [6, 4, { shape: Shape.PENTAGON }],
      ],
      barres: []
    },
    {
      fingers: [
        [1, 4, { shape: Shape.PENTAGON }],
        [2, 1],
        [3, 1],
        [4, 1],
        [5, 3, { shape: Shape.PENTAGON }],
        [6, 4, { shape: Shape.PENTAGON }],
      ],
      barres: []
    },
    {
      fingers: [
        [1, 4, { shape: Shape.PENTAGON }],
        [2, 4],
        [3, 1],
        [4, 1, { shape: Shape.PENTAGON }],
        [5, 3],
        [6, 4, { shape: Shape.PENTAGON }],
      ],
      barres: []
    },
    {
      fingers: [
        [1, 1],
        [2, 3],
        [3, 3],
        [4, 3, { shape: Shape.PENTAGON }],
        [5, 1, { shape: Shape.PENTAGON }],
        [6, 1, { shape: Shape.PENTAGON }],
      ],
      barres: []
    },
    {
      fingers: [
        [2, 4, { shape: Shape.PENTAGON }],
        [3, 4],
        [4, 1],
        [5, 2, { shape: Shape.PENTAGON }],
        [6, 2],
      ],
      barres: []
    },
  ],
  4: [
    {
      // array of [string, fret, text | options]
      fingers: [
        [1, 1, { shape: Shape.PENTAGON }],
        [2, 1],
        [3, 2],
        [4, 3],
        [5, 3, { shape: Shape.PENTAGON }],
        [6, 1, { shape: Shape.PENTAGON }],
      ],
      barres: []
    },
    {
      fingers: [
        [1, 1, { shape: Shape.PENTAGON }],
        [2, 1, { shape: Shape.PENTAGON }],
        [3, 2],
        [4, 3],
        [5, 3],
        [6, 1, { shape: Shape.PENTAGON }],
      ],
      barres: []
    },
    {
      fingers: [
        [1, 3],
        [2, 4, { shape: Shape.PENTAGON }],
        [3, 3],
        [4, 1],
        [5, 1, { shape: Shape.PENTAGON }],
        [6, 3, { shape: Shape.PENTAGON }],
      ],
      barres: []
    },
    {
      fingers: [
        [1, 3, { shape: Shape.PENTAGON }],
        [2, 4, { shape: Shape.PENTAGON }],
        [3, 3],
        [4, 1],
        [5, 1, { shape: Shape.PENTAGON }],
        [6, 3],
      ],
      barres: []
    },
    {
      fingers: [
        [1, 3, { shape: Shape.PENTAGON }],
        [2, 4, { shape: Shape.PENTAGON }],
        [3, 3, { shape: Shape.PENTAGON }],
        [4, 1],
        [5, 1],
        [6, 3],
      ],
      barres: []
    },
  ],
  5: [
    {
      // array of [string, fret, text | options]
      fingers: [
        [1, 1, { shape: Shape.PENTAGON }],
        [2, 3],
        [3, 3, { shape: Shape.PENTAGON }],
        [4, 3],
        [5, 1],
        [6, 1, { shape: Shape.PENTAGON }],
      ],
      barres: []
    },
    {
      fingers: [
        [1, 4, { shape: Shape.PENTAGON }],
        [2, 2, { shape: Shape.PENTAGON }],
        [3, 1, { shape: Shape.PENTAGON }],
        [4, 3],
        [5, 4],
        [6, 4],
      ],
      barres: []
    },
    {
      fingers: [
        [1, 1, { shape: Shape.PENTAGON }],
        [2, 2, { shape: Shape.PENTAGON }],
        [3, 1],
        [4, 3],
        [5, 4],
        [6, 4, { shape: Shape.PENTAGON }],
      ],
      barres: []
    },
    {
      fingers: [
        [1, 1],
        [2, 2, { shape: Shape.PENTAGON }],
        [3, 1],
        [4, 3, { shape: Shape.PENTAGON }],
        [5, 4],
      ],
      barres: []
    },
  ],
  6: [
    {
      // array of [string, fret, text | options]
      fingers: [
        [1, 4, { shape: Shape.PENTAGON }],
        [2, 4, { shape: Shape.PENTAGON }],
        [2, 1, { shape: Shape.PENTAGON }],
        [3, 1, { shape: Shape.PENTAGON }],
        [4, 1],
        [5, 3],
        [6, 4],
      ],
      barres: []
    },
    {
      fingers: [
        [1, 4, { shape: Shape.PENTAGON }],
        [2, 1],
        [3, 1, { shape: Shape.PENTAGON }],
        [4, 1],
        [5, 3, { shape: Shape.PENTAGON }],
        [6, 4],
      ],
      barres: []
    },
    {
      fingers: [
        [3, 5],
        [4, 1],
        [5, 3, { shape: Shape.PENTAGON }],
        [6, 4],
      ],
      barres: []
    },
    {
      fingers: [
        [1, 1, { shape: Shape.PENTAGON }],
        [2, 1, { shape: Shape.PENTAGON }],
        [3, 2],
        [4, 3, { shape: Shape.PENTAGON }],
        [5, 3],
        [6, 1],
      ],
      barres: []
    },
  ]
} 
