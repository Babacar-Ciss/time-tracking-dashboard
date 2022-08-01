import './App.css';
import Activities from './components/Activities/Activities';
import User from './components/User/User';
import { useState, useRef, useEffect} from "react"; 

function App() {
  const [frequency, SetFrequency] = useState("weekly")
  // const ref = useRef()
    
  const SelectedPeriodeHandler = (e) => {
    if(e.target.tagName === "DIV") {
      return frequency;
    } else {
      e.target.parentNode.childNodes.forEach(el => el.classList.remove('active'));
      e.target.classList.add("active")
      SetFrequency(e.target.textContent.toLowerCase());
    }
  }
  
  return (
    <div className="App">
      <User periode={SelectedPeriodeHandler}/>
      <Activities frequency = {frequency} />
    </div>
  );
}

export default App;
