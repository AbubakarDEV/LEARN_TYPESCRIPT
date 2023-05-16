import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
let sales:number=12123;
let courses:string="Typescript"
let is_active:boolean=true

//array
let numbers:number[]=[]

//tuple
let user:[number,string,boolean,number]=[1,"abc",true,33]

//enum
const enum Size{Small=3,Medium,Large}
let mySize:Size=Size.Large
console.log("mysize",mySize)


//function
// function calculateTax(price:number,tax?:number):number{
function calculateTax(price:number,tax=300):number{
  if (tax>300) {
    return price
    
  }
  else{
    return 0;
  }
}

calculateTax(4000)



// objects

type Employee={
  readonly id:number,
  name:string,
  retire:(date:Date)=>void
}

let employee:Employee={
  id:1,
  name:"Moash",
  retire:(date:Date)=>{
    console.log(date)
  }
}


//union types

function kgtolb(weight:number|string):number {
  if (typeof weight==="number") {
    return weight*2.2    
  }
  else
  return parseInt(weight)*2.2
}

const value:any=kgtolb(22)
console.log("weight",value)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
