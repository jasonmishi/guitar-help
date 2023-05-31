interface Strings {
  "1": Chord[],
  "2": Chord[],
  "3": Chord[],
  "4": Chord[],
  "5": Chord[],
  "6": Chord[],
}

export const essentialMinorChords: Record<keyof Strings, Chord[]> = {
  1: [
    {
      // array of [string, fret, text | options]
      fingers: [
        [1, 4],
        [2, 4, { optional: true }],
        [3, 4],
        [4, 1],
        [5, 2, { optional: true }],
        [6, 4, { optional: true }],
      ],
      barres: []
    },
    {
      fingers: [
        [1, 3],
        [2, 3],
        [3, 3, { optional: true }],
        [5, 1],
      ],
      barres: []
    },
    {
      fingers: [
        [1, 1],
        [2, 1],
        [3, 1],
        [4, 3, { optional: true }],
        [5, 3, { optional: true }],
        [6, 1, { optional: true }],
        [6, 4, { optional: true }],
      ],
      barres: []
    },
    {
      fingers: [
        [1, 1],
        [2, 1, { optional: true }],
        [3, 1],
        [4, 3, { optional: true }],
        [5, 3],
        [6, 1, { optional: true }],
      ],
      barres: []
    },
  ],
  2: [],
  3: [],
  4: [],
  5: [],
  6: []
} 
