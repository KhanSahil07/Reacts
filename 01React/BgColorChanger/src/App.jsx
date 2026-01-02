import { useState } from 'react'



function App() {
  const [count, setCount] = useState("olive")

  return (
    <>
     <div className='w-full h-screen bg-amber-500  duration-200'
      style={{background:count}}
     >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0'>
        <div className=" flex flex-wrap  justify-center p-1.5  bg-white  rounded-2xl  text-black-100 gap-5">
          <button onClick={() => setCount("grey") } className='  bg-gray-500 p-1 rounded-2xl shadow-2xl'>light Grey</button>
        
         <div>
          <button onClick={() => setCount("yellow") } className='bg-yellow-400 p-1 rounded-2xl shadow-2xl'>Yellow</button>
        </div>
         <div>
          <button onClick={() => setCount("red") } className='bg-red-700 p-1 rounded-xl shadow-xl'>red</button>
        </div>
         <div>
          <button onClick={() => setCount("blue") } className='bg-blue-700 p-1 rounded-2xl shadow-2xl'>blue</button>
        </div>
         <div>
          <button onClick={() => setCount("black") } className=' text-white bg-black p-1 rounded-2xl shadow-2xl'>Black</button>
        </div>
         <div>
          <button onClick={() => setCount("white") } className='bg-white-400 p-1 rounded-2xl shadow-2xl'> white</button>
        </div>
        </div>
        
      </div>
     </div>
    </>
  )
}

export default App
