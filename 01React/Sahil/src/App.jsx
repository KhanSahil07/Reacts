import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(1)

  return (
    <>
     
      <h1>counter is={count}</h1>
      
      
        <button onClick={() => setCount((count) => (count=count + 2 ))}>
          AddValue
        </button>
        <br />

        <button onClick={() =>{
          if (count > 0) {
            setCount(count - 1);
            console.log(count);
            
          } else {
            alert("Count cannot go below 0"); // optional feedback
          }
        
          setCount(count-1)

        }
        }> Remove value</button>
      
      
    </>
  )
}

export default App
