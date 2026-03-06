// import { EditorView, basicSetup } from "codemirror";
// import { javascript } from "@codemirror/lang-javascript";

// const editor = new EditorView({
//   doc: "var x = 10;\nvar y = 20;\nvar sum = x + y;",
//   extensions: [basicSetup, javascript()],
//   parent: document.getElementById("editor-container")
// });
// ___________________
// import { useEffect, useRef } from "react";
// import { EditorView, basicSetup } from "codemirror";
// import { javascript } from "@codemirror/lang-javascript";

// function CodeEditor() {
//   const editorRef = useRef(null);

//   useEffect(() => {
//     const view = new EditorView({
//       doc: "console.log('Hello');",
//       extensions: [basicSetup, javascript()],
//       parent: editorRef.current,
//     });

//     return () => view.destroy();
//   }, []);

//   return <div ref={editorRef} />;
// }

// export default CodeEditor;
// ____________________________
// this is from basic example:

// import {basicSetup} from "codemirror"
// import {EditorView} from "@codemirror/view"

// const view = new EditorView({
//   doc: "Start document",
//   parent: document.body.getElementById("editor"),
//   extensions: [basicSetup]
// })
// ______________________
// i learnt how to implement this example code in my case as i am using react.

import React, { use, useRef, useEffect, useState } from 'react'
import { basicSetup } from "codemirror"
import { EditorView } from "@codemirror/view"

const CodeEditor = () => {
  const editorRef = useRef(null)
  const [code, setCode] = useState("");
  const viewRef = useRef(null)

  useEffect(() => {

    viewRef.current = new EditorView({
      doc: "// Start document",
      parent: editorRef.current,
      extensions: [basicSetup,
        EditorView.updateListener.of((update) => {
          if (update.docChanged) {
            setCode(update.state.doc.toString());
            console.log(code)
          }
        })
      ]
    })

    return () => {
      viewRef.current.destroy()
    }
  }, [])

  useEffect(() => {
    console.log(code)
  }, [code])

  // useEffect(() => {
  //   console.log(editorRef.current.view.state.doc.toString())

  // }, [editorRef.current])


  return (
    <div ref={editorRef}></div>
  )
}

export default CodeEditor
