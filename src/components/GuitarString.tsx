import './GuitarString.css'

interface StringButtonProps {
  value: GuitarString,
  status: "active" | "",
  parentOnClick: (rootString: GuitarString) => void
}

function StringButton({ value, parentOnClick, status }: StringButtonProps) {

  return (
    <button
      className={"string " + status}
      role="button"
      onClick={() => {
        parentOnClick(value)
      }}
    >
      {value}
    </button>
  )
}

export default StringButton
