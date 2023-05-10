import { useEffect, useRef, useState } from 'react'
import './App.css'
import { Message } from './components/Message';

function App() {
  const [data, setData] = useState({
    name: '',
    count: 10,
    count1: 20,
    count2: 30
  })

  const myRef = useRef(null);
  const myRef2 = useRef(null);
  
  const { name, count, count1, count2 } = data;
  
  const increment = () => {
    // setData(count + 1)
    setData({
      ...data,
      count: count +1
    })
  }
  
  const decrement = () => {
    // setCount(count - 1)
    setData({
      ...data,
      count: count - 1
    })
  }

  const reset = () => {
    // setCount(initlaValue)
    setData({
      ...data,
      count: 0
    })
  }  
  
  const handleInput = ({target}) => {
    // console.log(target.value);
    setData({
      ...data,
      [target.name]: target.value
    })
  }
  
  useEffect(() => {
    console.log("componente montado", myRef.current.textContent);
  }, []);
  
  useEffect(() => {
    console.log("componente actualizado");
  }, [count, count1]);
  
  return (
    <>
      <h1>Clase 54</h1>
      <p> count is {count} </p>
      <p> name is {name} </p>
      <p ref={myRef}> count is {count2} </p>
      
      <input
        type="text"
        placeholder='ingrese clave'
        name='name'
        value={name}
        onChange={handleInput}
      />
      
      <button onClick={increment}>+1</button>
      <button onClick={reset}>reset</button>
      <button onClick={decrement}>-1</button>
      
      {
        (name === 'pepe') && <Message />
      }
    </>
  )
}

export default App
