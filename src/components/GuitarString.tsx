import { useState } from 'react'

interface StringButtonProps {
  value: GuitarString,
  parentOnClick: (rootString: GuitarString) => void
}

function StringButton({ value, parentOnClick }: StringButtonProps) {
  const [completionStatus, setCompletionStatus] = useState('todo');

  return (
    <button
      className={"string " + completionStatus}
      role="button"
      onClick={() => {
        parentOnClick(value)
        setCompletionStatus('complete')
      }}
    >
      {value}
    </button>
  )
}

export default StringButton
