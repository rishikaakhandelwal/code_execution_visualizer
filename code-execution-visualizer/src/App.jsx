import React from 'react'
import CodeEditor from './components/CodeEditor'

const App = () => {
  return (
    <>
    <div className='flex justify-around mt-10'>

    <div id="left">
      <div className='mb-6' id='editor'>
        <CodeEditor/>
      </div>
      <button id='start' className='border-lime-400 border-4 m-3'>Start Visualization</button>
      <button id='next' className='border-lime-400 border-4'>Next Step</button>
    </div>

    <div id="right">
      <h3>Stack and Variables</h3>
      <div id='visualizer'>
      </div>
    </div>
    </div>
    </>
  )
}

export default App
