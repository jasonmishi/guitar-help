interface ChordTypeSelectProps {
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

function ChordTypeSelect({onChange}: ChordTypeSelectProps) {

  return (
    <select name="chord-type" id="chord-type" onChange={onChange}>
      <option value="major">Major</option>
      <option value="minor">Minor</option>
    </select>
  )
}

export default ChordTypeSelect
