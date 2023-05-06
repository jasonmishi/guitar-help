import { useState } from 'react'
import './Note.css'

interface NoteProps {
  value: string,
  parentOnClick: () => void
}

function Note({ value, parentOnClick }: NoteProps) {
  const [completionStatus, setCompletionStatus] = useState('todo');

  return (
    <button
      className={"note " + completionStatus}
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

export default Note