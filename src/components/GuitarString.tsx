import { useState } from 'react'

function StringButton({ value, parentOnClick }: { value: GuitarString, parentOnClick: (rootString: GuitarString, chordType: string) => void}) {
  const [completionStatus, setCompletionStatus] = useState('todo');

  return (
    <button
      className={"string " + completionStatus}
      role="button"
      onClick={() => {
        parentOnClick(value, "major")
        setCompletionStatus('complete')
      }}
    >
      {value}
    </button>
  )
}

export default StringButton
