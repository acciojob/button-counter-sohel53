
import React, {useState} from "react";
import './../styles/App.css';

const App = () => {
  let [count, setCount] = useState("")

  return (
    <div>
        {/* Do not remove the main div */}
        <p>Button Clicked {count} times</p>

    </div>
  )
}

export default App
