import {React, useState} from 'react'
import CodeEditor from './editor/CodeEditor'
import { runCode } from "./execution/runCode";

const App = () => {
  const [code, setCode] = useState(`var a = 5;
var b = 10;
console.log(a + b);`);

  const [consoleOutput, setConsoleOutput] = useState([]);
  const [isRunning, setIsRunning] = useState(false);

  const handleRun = () => {
    setConsoleOutput([]);
    setIsRunning(true);

    runCode(code, {
      onStep: (interpreter) => {
        // For now just log step count
        console.log("Stepping...");
      },

      onConsoleLog: (text) => {
        setConsoleOutput(prev => [...prev, text]);
      },

      onComplete: () => {
        setIsRunning(false);
        console.log("Execution complete");
      }
    });
  };


  return (
    <>
    <div className='flex justify-around mt-10'>

    <div id="left">
      <div className='mb-6' >
        <CodeEditor value={code}
        onChange={(e) => setCode(e.target.value)}/>
      </div>
      <button id='start' className='border-lime-400 border-4 m-3' onClick={handleRun} disabled={isRunning}>Start Visualization</button>
      <button id='next' className='border-lime-400 border-4'>Next Step</button>
    </div>

    <div id="right">
      <h3>Stack and Variables</h3>
      <div id='visualizer'>
        <div id='console'>
          {consoleOutput.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default App
