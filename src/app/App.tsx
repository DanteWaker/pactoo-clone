import { useState } from 'react'
import '../styles/global.css'
import { Button } from '@/components/ui/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <Button onClick={() => setCount((count) => count + 1)} 
      className='bg-green-400 text-white p-2 rounded-sm shadow-md transition-all duration-200 hover:bg-green-600'>
        count is {count}
      </Button>
    </>
  )
}

export default App
