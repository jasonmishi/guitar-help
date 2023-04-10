import './Note.css'

interface NoteProps {
  value: string,
  parentOnClick: Function
}

function Note({ value, parentOnClick }: NoteProps) {
  return (
    <button className="note" role='button' onClick={() => {parentOnClick()}}>{value}</button>
  )
}

export default Note