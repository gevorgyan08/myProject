import './App.css';
import { useState,useEffect} from 'react';
import MyButton from './components/MyButtons';

function App() {

  const [git, setGit] = useState([])

    useEffect(()=>{
      fetch("https://api.github.com/users")
      .then((p1)=>{
        return p1.json();
      })
      .then((p2)=>{
      setGit(p2)
      })
    })


  return (
    <div>
      {git.map((item,index)=><li key = {index}>
      {item.id}
      <img src = {item.avatar_url} height="50" width= "50"/>
      </li>)}
    </div>
  )
  }

export default App;