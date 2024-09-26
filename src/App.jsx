import { useState } from "react";
import './App.css'
import TextField from "@mui/material/TextField";

function App() {
  const [principle, setprinciple] = useState('')
  const [rate, setrate] = useState('')
  const [year, setyear] = useState('')
  const [interest, setinterest] = useState(0)
  const [isprinciple, setIsprinciple] = useState(true)
  const [israte, setIsrate] = useState(true)
  const [isyear, setIsyear] = useState(true)

  const validate = (e) => {
    if (!!e.target.value.match('^[0-9.]*$')) {
      if (e.target.name == 'principle') {
        setprinciple(e.target.value)
        setIsprinciple(true)

      } else if (e.target.name == 'rate') {
        setrate(e.target.value)
        setIsrate(true)
      } else {
        setyear(e.target.value)
        setIsyear(true)
      }


    }
    else {
      if (e.target.name == 'principle') {
        setprinciple(e.target.value)
        setIsprinciple(false)

      } else if (e.target.name == 'rate') {
        setrate(e.target.value)
        setIsrate(false)
      } else {
        setyear(e.target.value)
        setIsyear(false)
      }
    }


  }

  const handleReset = () => {
    setprinciple('')
    setrate('')
    setyear('')
    setIsprinciple(true)
    setIsrate(true)
    setIsyear(true)
    setinterest(0)
  }
  const calculate = () => {
    setinterest((principle * rate * year) / 100)
  }
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center mb-5">
          <div className="col-md-4 mt-5 text-dark p-4 rounded-3 bg-dark">
            <h1 className="text-light fs-3 text-center">Simple <span className="text-danger fs-1">Interest</span> App</h1>
            <h6 className="text-light text-center">Calculate your simple interest</h6>
            <div className="w-full bg-warning rounded d-flex justify-content-center align-items-center flex-column mt-2" style={{ height: "150px" }}>
              <h1>₹ {interest}</h1>
              <p>Total Simple Interest</p>
            </div>

            <TextField name='principle' id="filled-basic" label="Principle Amount(₹)" variant="filled" className='bg-light w-100 mt-3 rounded' onChange={(e) => { validate(e) }} />
            {!isprinciple && <span className="text-danger">Invalid Input!</span>}
            <TextField name='rate' id="filled-basic" label="Rate of Interest(%)" variant="filled" className='bg-light w-100 mt-3 rounded' onChange={(e) => { validate(e) }} />
            {!israte && <span className="text-danger">Invalid Input!</span>}
            <TextField name='year' id="filled-basic" label="Time Period(Year)" variant="filled" className='bg-light w-100 mt-3 rounded' onChange={(e) => { validate(e) }} />
            {!isyear && <span className="text-danger">Invalid Input!</span>}

            <div className="d-flex justify-content-between">
              <button style={{ width: "190px", height: "60px" }} className="btn btn-outline-success px-4 py-3 mt-4 rounded" disabled={isprinciple && israte && isyear ? false : true} onClick={calculate}>Calculate</button>

              <button style={{ width: "190px", height: "60px" }} className="btn btn-outline-primary px-4 py-3 mt-4 ms-2 rounded" onClick={handleReset}>Reset</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )

}

export default App