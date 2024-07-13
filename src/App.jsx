import { useState } from "react";
import "./App.css";
import paragraph from "./paragraph.json";

function App() {
  let [num, setNum] = useState(0);
  let [para, setPara] = useState([]);

  function generate() {
    if (paragraph.length >= num) {
      let temp = [];
      for (let i = 0; i < num; i++) {
        temp.push(paragraph[i]);
      }
      console.log(temp);
      setPara(temp);
    }
    if(paragraph.length<num){
      alert("Ayyo ! you are demanding very much paragraph in one go, kindly take little litlle 😀")
    }
    if(num<0){
      alert('Ayyo ! you know that you wrote negative input 😵')
    }
  }

  return (
    <>
    <div className="para">
    <h1>TIRED OF BORING LOREM IPSUM?</h1>
      <div className="input">
      <span>Paragraphs:</span>
      <input
        type="number"
        placeholder={num}
        onChange={(e) => {
          setNum(e.target.value);
        }}
      />
      <button onClick={generate}>Generate</button>
      </div>
      {para.map((item, key) => (
        <p key={key}>
          <span>{key + 1}:</span>{item.text}
        </p>
      ))}
    </div>
    </>
  );
}

export default App;
