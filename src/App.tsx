
import './App.css'
import messages from './messages'
import { useState } from 'react';

function App() {
  const btnStyle = {
    backgroundColor: "#7950f2",
    color: "#fff"
  }
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
    <button className='close' onClick={() => setIsOpen((isOpen: unknown) => (!isOpen))}>&times;</button>
    {isOpen && <div className='steps'>
      <div className='numbers'>
        <div className={step >= 1 ? `active` : ""}>1</div>
        <div className={step >= 2 ? `active` : ""}>2</div>
        <div className={step >= 3 ? `active` : ""}>3</div>
      </div>
      <p className='message'>
        Step {step}: {messages[step -1]}
      </p>
      <div className='buttons'>
        <button style={btnStyle} onClick={() => {if(step > 1) setStep(s => s - 1)}}>Previous</button>
        <button style={btnStyle} onClick={() => {if(step < 3) setStep(s => s + 1)}}>Next</button>
      </div>
    </div>}
    </>
  )
}

export default App
