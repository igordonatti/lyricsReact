import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Global } from './components/global';



function App() {
  const [typeResponse, setTypeResponse] = useState();

  useEffect(() => {
    fetch('https://data.typeracer.com/games')
    .then(response => response.json())
    .then(data => {
      setTypeResponse(data);
      console.log(typeResponse);
    })
  })

  return (
    <>
    <Header></Header>
    <Global/>
    </>
  )
}

export default App
