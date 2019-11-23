import React from "react";
import { connect } from 'react-redux';
import { getTheSmurfs } from '../actions';
import "./App.css";

function App(props) {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <button onClick={()=>{
          props.getTheSmurfs();
        }}>Get The Smurfs</button>
        {props.data.map(e => {
          return (
          <div>
            <h1>{`name: ${e.name}`}</h1>
            <h3>{`age: ${e.age}`}</h3>
            <h3>{`height: ${e.height}`}</h3>
          </div>
          )
        })}
      </div>
    );
}

const mapStateToProps = state => {
  return {
    error: state.error,
    smurfs: state.smurfs
  }
}

export default connect(mapStateToProps, { getTheSmurfs })(App);
