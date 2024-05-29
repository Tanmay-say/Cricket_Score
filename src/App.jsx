import { useState } from 'react'
import './App.css'






const App = () => {
  const [allClicks, setAll] = useState([]);
  const [dot , setDot] = useState(0)
  const [wicket , setWicket] = useState(0)

  const handleDot = () => {
    setAll(allClicks.concat('*'))
    setDot(dot + 1)
  }

  const handleWicket = () => {
    setAll(allClicks.concat('W'))
    setWicket(wicket + 1)
  }


  return (
    <div>
      <Display allClicks={allClicks}/>
      <Button onClick={handleDot} text='Dot' />
      <Button onClick={handleWicket} text='Wicket' />
    </div>
  )
}


const Display = ({allClicks}) => {
  return (
    <div>
      <h1>Cricket Score Board</h1>
      <p>Over: {allClicks.join("  ")}</p>
      <h2>Total Score : </h2>
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
