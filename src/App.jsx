import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import {puppyList} from './data.js'
function App() {
  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setFeatPupId] = useState(null)

  // function clickPuppy() {
  //   console.log("puppy id =>", puppy.id)
  // }

  // console.log("puppies => ", puppies);

  const featuredPup = puppies.find((pup)=> pup.id === featPupId);
  // console.log(featuredPup);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        { 
          puppies.map((puppy) => {
            return <p onClick={()=>{setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p>
          })
        }
      {/* <p> Featured Puppy ID: {featPupId}</p> */}
      {/* {featPupId && <p>Featured Puppy ID: {featPupId}</p>} */}
      {featPupId && (
        <div id="featuredPup">
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
