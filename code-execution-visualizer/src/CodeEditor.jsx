// import { EditorView, basicSetup } from "codemirror";
// import { javascript } from "@codemirror/lang-javascript";

// const editor = new EditorView({
//   doc: "var x = 10;\nvar y = 20;\nvar sum = x + y;",
//   extensions: [basicSetup, javascript()],
//   parent: document.getElementById("editor-container")
// });
// ___________________
import { useEffect, useRef } from "react";
import { EditorView, basicSetup } from "codemirror";
import { javascript } from "@codemirror/lang-javascript";

function CodeEditor() {
  const editorRef = useRef(null);

  useEffect(() => {
    const view = new EditorView({
      doc: "console.log('Hello');",
      extensions: [basicSetup, javascript()],
      parent: editorRef.current,
    });

    return () => view.destroy();
  }, []);

  return <div ref={editorRef} />;
}

export default CodeEditor;