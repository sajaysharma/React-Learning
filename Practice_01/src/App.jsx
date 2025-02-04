
import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')
  
  const [count, setCount] = useState(0)

  function addValue() {
    setCount(1 + count)
  }
  function removeValue() {
    setCount(count - 1)
  }

  return (
    <>
      <div className='flex w-full h-screen ' style={{ backgroundColor: color }} >
        <div className=' w-1/2 inset-x-1'>
          <div className='grid  fixed flex-wrap bg-gray-500 p-4  rounded-xl gap-5'>
            <button
              onClick={() => setColor('red')}
              className='bg-red-700 text-white rounded-3xl p-3 text-xl font-bold'
              style={{ backgroundColor: 'red' }}
            >
              Red
            </button>
            <button
              onClick={() => setColor('green')}
              className='bg-red-700 text-white rounded-3xl p-3 text-xl font-bold'
              style={{ backgroundColor: 'green' }}
            >
              Green
            </button>
            <button
              onClick={() => setColor('blue')}
              className='bg-red-700 text-white rounded-3xl p-3 text-xl font-bold'
              style={{ backgroundColor: 'blue' }}
            >
              Blue
            </button>
            <button
              onClick={() => setColor('black')}
              className='bg-red-700 text-white rounded-3xl p-3 text-xl font-bold'
              style={{ backgroundColor: 'black' }}
            >
              Black
            </button>
            <button
              onClick={() => setColor('yellow')}
              className='bg-red-700 text-white rounded-3xl p-3 text-xl font-bold'
              style={{ backgroundColor: 'yellow' }}
            >
              Yellow
            </button>
            <button
              onClick={() => setColor('pink')}
              className='bg-red-700 text-white rounded-3xl p-3 text-xl font-bold'
              style={{ backgroundColor: 'pink' }}
            >
              Pink
            </button>
          </div>
        </div>
      <div className='w-1/2 h-screen  bg-gray-500'>
        <div className=' bottom-12 px-2 inset-x-0'>
        <div className='  '>
          <button 
            className='mt-50 bg-white rounded-xl p-3 font-bold'
            onClick={addValue}
          >
            Increase Value :  {count}
          </button>
        </div>
        <br /><br />
        <div >
          <button 
            className='mt-50 bg-white rounded-xl p-3 font-bold'
            onClick={removeValue}
          >
            Decrease Value: {count}
          </button>
        </div>
        </div>
      </div>
      </div>

    </>
  )
}

export default App
