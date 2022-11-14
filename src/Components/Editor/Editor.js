import React from 'react'
import AceEditor from 'react-ace';
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import './Editor.css'
import { useState } from 'react';
import { useParams } from "react-router-dom";

function Editor() {
    const [code, setCode] = useState("");
    const params = useParams();
    const id = params.id;
    function onChange(newValue) {
        setCode(newValue);
    }

    function submitCode(e){
        e.preventDefault();
        console.log(id, code);

        const data = {id, code};

    fetch("http://localhost:4000/submit",{
            method : 'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify(data)
        }).then((result)=>{
            console.log(result);
        })
    }
    
  return (
    
    <>
    <div className='container'>
        <div className='input-data'>
            <h2 className='my-3'>Feedback:</h2>
            <textarea  className="form-control my-4" placeholder='Enter Anything' rows="4" cols="50"/>
        </div>
        <h3>Code Editor:</h3>
        <form onSubmit={submitCode}>
            <div className='editor_space'>
                <AceEditor
                        mode="c_cpp"
                        theme="monokai" 
                        fontSize = {14}
                        height = '100%'
                        width = '100%'
                        value= {code}
                        onChange={onChange}
                        name="UNIQUE_ID_OF_DIV"
                        
                    />
            </div>
            <button type='submit' className='btn btn-success send'>Submit code</button>
        </form>
    </div>
        
    </>
    
  )
}

export default Editor