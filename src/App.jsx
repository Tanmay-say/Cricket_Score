import { useState } from 'react'
import './App.css'

const App = () => {
  const [allClicks, setAll] = useState([]);
  const [dot , setDot] = useState(0)
  const [wicket , setWicket] = useState(0)
  const [run , setRun] = useState(0)
  const [balls , setBall] = useState(0)
  const [isOverCompleted, setIsOverCompleted] = useState(false);



  const handleDot = () => {
    if (balls < 6) {
      setAll(allClicks.concat('*'));
      setDot(dot + 1);
      setBall(balls + 1);
    }
    if (balls + 1 === 6) {
      setIsOverCompleted(true);
    }
  };
  
  const handleWicket = () => {
    if (balls < 6) {
      setAll(allClicks.concat('W'));
      setWicket(wicket + 1);
      setBall(balls + 1);
    }
    if (balls + 1 === 6) {
      setIsOverCompleted(true);
    }
  };
  
  const handleRun = (runs) => {
    if (balls < 6) {
      setAll(allClicks.concat(runs));
      setRun(run + runs);
      setBall(balls + 1);
    }
    if (balls + 1 === 6) {
      setIsOverCompleted(true);
    }
  };
  
  const handleWide = () => {
    if (balls < 6) {
      setAll(allClicks.concat('Wd'));
      setRun(run + 1); // Stop increment balls for wide
    }
  };
  

  return (
    <div>
      <Display allClicks={allClicks} runs={run} ball={balls}/>
      <Button onClick={handleDot} text='Dot' disabled={isOverCompleted}/>
      <Button onClick={handleWicket} text='Wicket' disabled={isOverCompleted}/>
      <Button onClick={handleWide} text='Wd' disabled={isOverCompleted}/>
      <p>
      <Button onClick={() => handleRun(1)} text='1' disabled={isOverCompleted}/>
      <Button onClick={() => handleRun(2)} text='2' disabled={isOverCompleted}/>
      <Button onClick={() => handleRun(3)} text='3' disabled={isOverCompleted}/>
      <Button onClick={() => handleRun(4)} text='4' disabled={isOverCompleted}/>
      <Button onClick={() => handleRun(6)} text='6' disabled={isOverCompleted}/>
      </p>
    </div>
  )
}


const Display = ({allClicks , runs , ball}) => {
  if (ball === 6) {
    return (
      <div>
        <h1>Over Completed</h1>
        <History allClicks={allClicks} />
        <h2>Total Score : {runs} </h2>
      </div>
    )
  }
  return (
    <div>
      <h1>Cricket Score Board</h1>
      <History allClicks={allClicks} />
      <h2>Total Score : {runs} </h2>
    </div>
  )  
}

const History = ({ allClicks }) => {
  if (allClicks.length === 0) {
    return <div>The over is yet to be bowled</div>;
  }
  return <div>Over: {allClicks.join("  ")}</div>;
};

const Button = ({ onClick, text, disabled }) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {text}
    </button>
  )
}

export default App
