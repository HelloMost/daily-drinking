import React from 'react'
import { useState } from 'react'

const Water = () => {
    const [Weight, setWeight] = useState<number>(0);
    const [Result, setResult] = useState<number>(0);
    const [showResult, setshowResult] = useState<boolean>(false);

    const onWeight = (event: React.ChangeEvent<HTMLInputElement>) => {
        setWeight(+event.target.value)
      }
      
      const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setResult(Weight*2.2*(30/2))
        setshowResult(true)
        console.log('Submitted')
      }
     

      return (
        <>
        <div>
          <form onSubmit={onSubmit}>
            <h1>ควรดื่มน้ำวันละเท่าไหร่ ?</h1>
            {showResult && <h1>{Result} มล.</h1>}
            <input type="text" id="Weight" name="name" placeholder="น้ำหนักของคุณ(กิโลกรัม)" onChange={onWeight}/>
            <br/>
            <br/>
            <button type="submit">Submit</button>
          </form>
        </div>
        </>
      )
    }

export default Water