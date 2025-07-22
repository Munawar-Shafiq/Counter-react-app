import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {

  const [counter, setcounter] = useState(0);

  function IncrementCounter() {
    setcounter(counter + 1);
  }

  function DecrementCounter() {
    setcounter(counter - 1);
  }

  return (
    <div className="p-3">
  <Button variant="primary" onClick={IncrementCounter} size="lg">
    Increment
  </Button>
  <Button variant="secondary" onClick={DecrementCounter} size="lg">
    Decrement
  </Button>
  <h1 className='heading'> Counter : {counter}</h1>
</div>

    
  );
}

export default App;
