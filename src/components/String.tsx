import { useState } from 'react'

function String({ value, parentOnClick }: { value: "1" | "2" | "3" | "4" | "5" | "6", parentOnClick: (rootString: "1" | "2" | "3" | "4" | "5" | "6", chordType: string) => void}) {
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

export default String
