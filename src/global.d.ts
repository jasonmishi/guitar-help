type GuitarString = 1 | 2 | 3 | 4 | 5 | 6;
type GuitarStringArray = GuitarString[];

type Chord = {
  fingers: [GuitarString, number, {optional: boolean}?][],
  barres: []
};
