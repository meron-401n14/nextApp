import React, { useState }  from 'react'

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick = {()=> setCount(count + 1)}>Click to increment</button>
      <button onClick = {()=> setCount(count - 1)}>Click to decrement</button>
  <p>{count}</p> 
    </div>
  )
}




export default Counter;