interface ChordTypeSelectProps {
  onChange: (event: ChordType) => void
}

function ChordTypeSelect({onChange}: ChordTypeSelectProps) {

  const chordTypes: ChordType[] = ["major", "minor"]

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(chordTypes[event.target.selectedIndex])
  }

  return (
    <select name="chord-type" id="chord-type" onChange={handleChange}>
      {
        chordTypes.map((chordType) => (
          <option key={chordType} value={chordType}>{chordType}</option>
        ))
      }
    </select>
  )
}

export default ChordTypeSelect
