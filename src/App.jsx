 
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import Friends from './Friends'

function App() {
 const [data, setData] = useState([])
 useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res=>res.json())
  .then(data=>setData(data))
 },[])

  return (
    <div>
      <Friends/>
      <h1>Loaded Data {data.length}</h1>
      {data.map(e=><li key={e.id}>{e.name}</li>)}
    </div>
  )
     
}

export default App
