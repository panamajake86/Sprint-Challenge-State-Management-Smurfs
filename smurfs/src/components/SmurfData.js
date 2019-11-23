import React from 'react';
import { connect } from 'react-redux';
import { getTheSmurfs, addTheSmurf } from '../actions';

const SmurfData = props => {
    return (
        <>
            <button onClick={() => {
                props.getTheSmurfs();
            }}>Get The Smurfs</button>
            {props.smurfs.map(e => {
                return (
                    <div>
                        {console.log("inside map", e)}
                        <h1>{`Name: ${e.name}`}</h1>
                        <h3>{`Age: ${e.age}`}</h3>
                        <h3>{`Height: ${e.height}`}</h3>
                    </div>
                )
            })}
            <input />
            <input />
            <input />
            <button onClick={()=>{addTheSmurf()}}>Add Smurf</button>
        </>
    )
}

const mapStateToProps = state => {
    return {
        error: state.error,
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, { getTheSmurfs, addTheSmurf })(SmurfData);