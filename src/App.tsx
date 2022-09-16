import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Button from './components/Button'
import Display from './components/Display'

function App() {

  const [displayValue, setdisplayValue] = useState<string>("")

  const insertDisplay = (e: any) => 
  {
    if(displayValue == '0')
    {
      setdisplayValue(e.target.innerText)
    }
    else
    {
      setdisplayValue(displayValue + e.target.innerText)
    }
    
  }

  const insertResult = (e: any) => 
  {
    setdisplayValue(eval(displayValue))
  } 

  return(
    <div className='Container'>
      <Display value={displayValue}/>
      <Button text="1" insertDisplay={insertDisplay}/>
      <Button text="2" insertDisplay={insertDisplay}/>
      <Button text="3" insertDisplay={insertDisplay}/>
      <Button text="4" insertDisplay={insertDisplay}/>
      <Button text="5" insertDisplay={insertDisplay}/>
      <Button text="6" insertDisplay={insertDisplay}/>
      <Button text="7" insertDisplay={insertDisplay}/>
      <Button text="8" insertDisplay={insertDisplay}/>
      <Button text="9" insertDisplay={insertDisplay}/>
      <Button text="0" insertDisplay={insertDisplay}/>
      <Button text="+" insertDisplay={insertDisplay}/>
      <Button text="-" insertDisplay={insertDisplay}/>
      <Button text="x" insertDisplay={insertDisplay}/>
      <Button text="/" insertDisplay={insertDisplay}/>
      <Button text="=" insertDisplay={insertResult}/>
    </div>
    
  );
}

export default App
