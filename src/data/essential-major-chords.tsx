interface Strings {
  "1": Chord[],
  "2": Chord[],
  "3": Chord[],
  "4": Chord[],
  "5": Chord[],
  "6": Chord[],
}

export const essentialMajorChords: Record<keyof Strings, Chord[]> = {
  1: [
    {
      // array of [string, fret, text | options]
      fingers: [
        [1, 1],
        [2, 1, { optional: true }],
        [3, 2],
        [4, 3, { optional: true }],
        [5, 3],
        [6, 1, { optional: true }],
      ],
    },
    {
      fingers: [
        [1, 1],
        [2, 1],
        [3, 2],
        [4, 3, { optional: true }],
        [5, 3, { optional: true }],
        [6, 1, { optional: true }],
      ],
    },
    {
      fingers: [
        [1, 2],
        [2, 2],
        [3, 3, { optional: true }],
        [5, 1],
      ],
    }
  ],
  2: [
    {
      // array of [string, fret, text | options]
      fingers: [
        [1, 1],
        [2, 2],
        [3, 1],
        [4, 3, { optional: true }],
        [5, 4, { optional: true }],
        [6, 1, { optional: true }],
        [6, 4, { optional: true }],
      ],
    },
    {
      fingers: [
        [1, 1, { optional: true }],
        [1, 4, { optional: true }],
        [2, 2],
        [3, 1],
        [4, 3],
        [5, 4, { optional: true }],
        [6, 1, { optional: true }],
        [6, 4, { optional: true }],
      ],
    },
    {
      fingers: [
        [1, 1, { optional: true }],
        [1, 4, { optional: true }],
        [2, 2],
        [3, 1],
        [4, 3, { optional: true }],
        [5, 4, { optional: true }],
        [6, 1],
      ],
    },
    {
      fingers: [
        [1, 4],
        [2, 2],
        [3, 1, { optional: true }],
        [4, 3],
        [5, 4, { optional: true }],
        [6, 4, { optional: true }],
      ],
    },
    {
      fingers: [
        [1, 3, { optional: true }],
        [2, 1],
        [4, 2],
        [5, 3, { optional: true }],
        [6, 3],
      ],
    },
  ],
  3: [
    {
      // array of [string, fret, text | options]
      fingers: [
        [1, 4, { optional: true }],
        [2, 1, { optional: true }],
        [2, 4, { optional: true }],
        [3, 1],
        [4, 1],
        [5, 3],
        [6, 4, { optional: true }],
      ],
    },
    {
      fingers: [
        [1, 4, { optional: true }],
        [2, 1],
        [3, 1],
        [4, 1],
        [5, 3, { optional: true }],
        [6, 4, { optional: true }],
      ],
    },
    {
      fingers: [
        [1, 4, { optional: true }],
        [2, 4],
        [3, 1],
        [4, 1, { optional: true }],
        [5, 3],
        [6, 4, { optional: true }],
      ],
    },
    {
      fingers: [
        [1, 1],
        [2, 3],
        [3, 3],
        [4, 3, { optional: true }],
        [5, 1, { optional: true }],
        [6, 1, { optional: true }],
      ],
    },
    {
      fingers: [
        [2, 4, { optional: true }],
        [3, 4],
        [4, 1],
        [5, 2, { optional: true }],
        [6, 2],
      ],
    },
  ],
  4: [
    {
      // array of [string, fret, text | options]
      fingers: [
        [1, 1, { optional: true }],
        [2, 1],
        [3, 2],
        [4, 3],
        [5, 3, { optional: true }],
        [6, 1, { optional: true }],
      ],
    },
    {
      fingers: [
        [1, 1, { optional: true }],
        [2, 1, { optional: true }],
        [3, 2],
        [4, 3],
        [5, 3],
        [6, 1, { optional: true }],
      ],
    },
    {
      fingers: [
        [1, 3],
        [2, 4, { optional: true }],
        [3, 3],
        [4, 1],
        [5, 1, { optional: true }],
        [6, 3, { optional: true }],
      ],
    },
    {
      fingers: [
        [1, 3, { optional: true }],
        [2, 4, { optional: true }],
        [3, 3],
        [4, 1],
        [5, 1, { optional: true }],
        [6, 3],
      ],
    },
    {
      fingers: [
        [1, 3, { optional: true }],
        [2, 4, { optional: true }],
        [3, 3, { optional: true }],
        [4, 1],
        [5, 1],
        [6, 3],
      ],
    },
  ],
  5: [
    {
      // array of [string, fret, text | options]
      fingers: [
        [1, 1, { optional: true }],
        [2, 3],
        [3, 3, { optional: true }],
        [4, 3],
        [5, 1],
        [6, 1, { optional: true }],
      ],
    },
    {
      fingers: [
        [1, 4, { optional: true }],
        [2, 2, { optional: true }],
        [3, 1, { optional: true }],
        [4, 3],
        [5, 4],
        [6, 4],
      ],
    },
    {
      fingers: [
        [1, 1, { optional: true }],
        [2, 2, { optional: true }],
        [3, 1],
        [4, 3],
        [5, 4],
        [6, 4, { optional: true }],
      ],
    },
    {
      fingers: [
        [1, 1],
        [2, 2, { optional: true }],
        [3, 1],
        [4, 3, { optional: true }],
        [5, 4],
      ],
    },
  ],
  6: [
    {
      // array of [string, fret, text | options]
      fingers: [
        [1, 4, { optional: true }],
        [2, 4, { optional: true }],
        [2, 1, { optional: true }],
        [3, 1, { optional: true }],
        [4, 1],
        [5, 3],
        [6, 4],
      ],
    },
    {
      fingers: [
        [1, 4, { optional: true }],
        [2, 1],
        [3, 1, { optional: true }],
        [4, 1],
        [5, 3, { optional: true }],
        [6, 4],
      ],
    },
    {
      fingers: [
        [3, 5],
        [4, 1],
        [5, 3, { optional: true }],
        [6, 4],
      ],
    },
    {
      fingers: [
        [1, 1, { optional: true }],
        [2, 1, { optional: true }],
        [3, 2],
        [4, 3, { optional: true }],
        [5, 3],
        [6, 1],
      ],
    },
  ]
} 
