import React from "react";
import SmurfData from './SmurfData';
import "./App.css";

function App() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <SmurfData />
      </div>
    );
}

export default App;
