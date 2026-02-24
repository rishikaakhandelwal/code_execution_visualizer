import Interpreter from "js-interpreter";

export function createInterpreter(code, onConsoleLog) {

  function initFunc(interpreter, globalObject) {
    
    // Create console object
    const consoleObj = interpreter.nativeToPseudo({});

    // Override console.log
    interpreter.setProperty(
      consoleObj,
      "log",
      interpreter.createNativeFunction(function (...args) {
        const output = args
          .map(arg => interpreter.pseudoToNative(arg))
          .join(" ");
        
        onConsoleLog(output);
      })
    );

    interpreter.setProperty(globalObject, "console", consoleObj);
  }

  const interpreter = new Interpreter(code, initFunc);

  return interpreter;
}
