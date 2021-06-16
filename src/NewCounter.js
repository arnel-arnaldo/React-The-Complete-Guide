import React, { useState } from 'react'

export default function NewCounter() {
  const [count, setCount] = useState(0)
  const [previousClicks, setPreviousClicks] = useState(0)

  const increase = () => {
    setCount(count + 1)
  }

  const inputChange = (e) => {
    setPreviousClicks(Number(e.target.value))
  }

  return (
    <div>
      <label>
        Previous clicks:
        <input type='text' value={previousClicks} onChange={inputChange} />
      </label>
      <p>You clicked {previousClicks + count} times</p>
      <button onClick={increase}>Click Me</button>
    </div>
  )
}
