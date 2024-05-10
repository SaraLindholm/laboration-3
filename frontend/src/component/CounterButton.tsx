import {useState} from 'react'

interface CounterButtonProps {
  value: number
}

function CounterButton(props: CounterButtonProps) {
  const [value, setValue] = useState(props.value)

  return (
    <input
      onClick={() => { setValue(value + 1) }}
      type="button"
      value={value}
    />
  )
}

export default CounterButton
