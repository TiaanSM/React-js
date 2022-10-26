import Square from "./Square";
import Input from "./Input";
import { useState } from 'react';

function App() {
  const [colorValue, setColorValue] = useState('')
  const [hexValue, setHexValue] = useState('')

  return (
    <div classNAme="app">
      <Square 
        colorValue={colorValue}
        hexValue={hexValue}
        />
      <Input 
        colorValue={colorValue}
        setColorValue={setColorValue}
        setHexValue={setHexValue}
      />
    </div>
  )
}

export default App;
