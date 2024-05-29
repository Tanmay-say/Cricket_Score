import { useState } from 'react'
import './App.css'






const App = () => {
  const [allClicks, setAll] = useState([]);
  const [dot , setDot] = useState(0)
  const [wicket , setWicket] = useState(0)
  const [run , setRun] = useState(0)
  const [wide , setWide] = useState(0)


  const handleDot = () => {
    setAll(allClicks.concat('*'))
    setDot(dot + 1)
  }

  const handleWicket = () => {
    setAll(allClicks.concat('W'))
    setWicket(wicket + 1)
  }

  const handleRun = (runs) => {
    setAll(allClicks.concat(runs))
    const newRun = run + runs
    setRun(newRun)
  }

  const handleWide = () => {
    setAll(allClicks.concat('Wd'))
    setRun(run + 1)
  }

  return (
    <div>
      <Display allClicks={allClicks} runs={run}/>
      <Button onClick={handleDot} text='Dot' />
      <Button onClick={handleWicket} text='Wicket' />
      <Button onClick={() => handleRun(1)} text='1' />
      <Button onClick={() => handleRun(2)} text='2' />
      <Button onClick={() => handleRun(3)} text='3' />
      <Button onClick={() => handleRun(4)} text='4' />
      <Button onClick={() => handleRun(6)} text='6' />
      <Button onClick={handleWide} text='Wd' />
    </div>
  )
}


const Display = ({allClicks , runs}) => {
  return (
    <div>
      <h1>Cricket Score Board</h1>
      <p>Over: {allClicks.join("  ")}</p>
      <h2>Total Score : {runs} </h2>
    </div>
  )  
}
const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

export default App
