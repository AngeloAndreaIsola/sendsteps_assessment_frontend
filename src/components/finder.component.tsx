import React, { Component, useEffect } from 'react'
import { useState } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Result from './result.component'
import JSConfetti from 'js-confetti'




import '../App.css'


const jsConfetti = new JSConfetti()

function WordPatternComponent() {


  const [result, setResult] = useState<any>([]);


  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(e.target.word.value);
    console.log(e.target.root.value);
    console.log('Calling API...');

   const res = await fetch('http://localhost:8080/word-pattern/'+e.target.word.value+'/'+e.target.root.value+'/')
    
    if (res.status === 200) {

      e.target.reset();
      
      let resJson = await res.json();
      setResult(resJson)

      
      if (resJson.is_partial === false ) {
        console.log('trhowing confetti!');
        
        jsConfetti.addConfetti({
              emojis: ['🎉', '🎊', '✨', '💫', '🎈'],
              emojiSize: 100,
              confettiNumber: 300,
              confettiColors: [
                  "#ff0a54",
                  "#ff477e",
                  "#ff7096",
                  "#ff85a1",
                  "#fbb1bd",
                  "#f9bec7",
              ],
          })
      }
    }
  }


  let ResultElement;

  console.log(result);

  if (result.length !== 0) {
    ResultElement = <Result
      word={result.word} root={result.root} overlap_number={result.overlap_number} is_partial={result.is_partial} overlaping_charaters={result.overlaping_charaters}
    ></Result>;
  }



  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <h3>Word Pattern Finder</h3>

      <div className="mb-3">
        <label>Word</label>
        <input
          id='word'
          name='word'
          type="text"
          className="form-control"
          placeholder="Enter word"
          required
        />
      </div>

      <div className="mb-3">
        <label>Root</label>
        <input
          id='root'
          name='root'
          type="text"
          className="form-control"
          placeholder="Enter root"
          required
        />
      </div>


      <div className="d-grid">
        <button type="submit" className="btn" style={{ background: '#21003c', color: '#fff!important' }}>
          Submit
        </button>
      </div>


      {ResultElement}


    </form>
  )

}





export default WordPatternComponent


