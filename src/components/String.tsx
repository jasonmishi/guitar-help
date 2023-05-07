import { useState } from 'react'

function String({ value, parentOnClick }: { value: string, parentOnClick: () => void}) {
  const [completionStatus, setCompletionStatus] = useState('todo');

  return (
    <button
      className={"string " + completionStatus}
      role="button"
      onClick={() => {
        parentOnClick()
        setCompletionStatus('complete')
      }}
    >
      {value}
    </button>
  )
}

export default String
