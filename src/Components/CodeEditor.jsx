import React, { useEffect } from 'react';
import CodeMirror from 'codemirror'

const CodeEditor = () => {

    useEffect(() => {
        async function init() {
            CodeMirror.fromTextArea(document.getElementById('realtimeEditor'), {
                mode: {
                    name: "javascript"
                    ,
                    json: true
                }
            })

        }
        init()
    })


    return (
        <textarea id='realtimeEditor'></textarea>
    )
}

export default CodeEditor
