import { createInterpreter } from "./interpreter";

export function runCode(code, { onStep, onConsoleLog, onComplete }) {

  const interpreter = createInterpreter(code, onConsoleLog);

  function step() {
    try {
      const hasMore = interpreter.step();

      if (hasMore) {
        onStep(interpreter);
        setTimeout(step, 300); // execution speed
      } else {
        onComplete?.();
      }

    } catch (err) {
      console.error("Execution Error:", err);
      onConsoleLog("Error: " + err.message);
      onComplete?.();
    }
  }

  step();
}
