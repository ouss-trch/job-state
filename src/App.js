import './App.css';
import Job from './components/Job'
import Header from './components/header'
import data from './data.json'
import { useState } from "react"


function App() {
  // let index = 0

// add state to index of the job and initialise it to 0

  const [index , setIndex] = useState(0)

  //exemple 

  const  moins = ( ) => {
    if(index > 0 )setIndex(index - 1)
  }

  const  plus = ( ) => {
    if(index < data.length - 1)setIndex(index + 1)
  }

  return (
    <div className="App">
      <Header />
      {/* <Job /> */}
      <Job job={data[index]}/>
      <div>
        <button 
        className= "previous" 
        onClick={()=>{moins()}}> &#8249;</button>
        <button 
        className= "next" 
        onClick={()=>{plus()}}> &#8250;</button>
      </div>
    </div>
  );
}

export default App;