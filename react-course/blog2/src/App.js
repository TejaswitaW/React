import { useState } from 'react';
import './App.css';
// alert("Hello")

function App() {
  let data = "My Website"
  let reactData = "React State data";
  function Apple() {
    data = "Tom Hanks"
    alert("This is function call");
    alert(data)
  }
  function updateData() {
    reactData = "React State data updated";
    alert(reactData)
  }
  console.warn("_______________________________________")
  return (
    <div className="App">
      <h1>Hello this is {data}</h1>
      <button onClick={Apple}> Click Here</button>
      <br></br>
      <h3>If sure please click next</h3>
      <button onClick={() => alert("Are you sure to do this")}> Click Here</button>
      <br></br>
      <h3>If sure please click next</h3>
      <button onClick={() => Apple()}> Click Here</button>
      <br></br>
      <h3>{reactData}</h3>
      <button onClick={updateData}> Update data</button>
      <ToCheckState />
    </div>
  );
}
// function to check state 

function ToCheckState() {
  const [data, setData] = useState("Tejas")
  function updateData() {
    setData("Vaibhavi")

  }
  return (
    <>
      <h1>{data}</h1>
      <button onClick={updateData}>Update Data Here</button>
    </>
  )

}

export default App;
