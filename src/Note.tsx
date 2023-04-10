import './Note.css'

interface NoteProps {
  value: string,
  parentOnClick: Function
}

function Note({ value, parentOnClick }: NoteProps) {
  return (
    <div className="note" onClick={() => {parentOnClick()}}>{value}</div>
  )
}

export default Note