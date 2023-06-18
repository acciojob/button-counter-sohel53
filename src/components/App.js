
import React, {useState} from "react";
import './../styles/App.css';

const App = () => {
  let [count, setCount] = useState("")

  function incrCount() {
    setCount(count+1);
  }

  return (
    <div>
        {/* Do not remove the main div */}
        <p>Button Clicked {count} times</p>
        <button onClick={incrCount}>Click me</button>

    </div>
  )
}

export default App
