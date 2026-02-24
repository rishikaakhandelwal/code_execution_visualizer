// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


import React from 'react'
import CodeEditor from './CodeEditor'

const App = () => {
  return (
    <>
    <div className='flex justify-around mt-10'>

    <div id="left">
      <div className='mb-6'>
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
