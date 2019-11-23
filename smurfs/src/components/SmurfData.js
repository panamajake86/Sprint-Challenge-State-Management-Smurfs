import React from 'react';
import { connect } from 'react-redux';
import { getTheSmurfs, addTheSmurf } from '../actions';
import axios from 'axios';

const SmurfData = props => {

    const [smurf, setSmurf] = React.useState('');

    const smurfy = {
        name: smurf,
        age: smurf,
        height: smurf
    }

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
            <input
                onChange={e => setSmurf(e.target.value)}
                value={smurf.name} />
            <input
                onChange={e => setSmurf(e.target.value)}
                value={smurf.age} />
            <input
                onChange={e => setSmurf(e.target.value)}
                value={smurf.height} />
            <button onClick={e => {
                e.preventDefault();
                axios
                    .post("http://localhost:3333/smurfs", smurfy)
                    .then(res => {
                        console.log('in post', res)
                    })
                    .catch(err => console.log(err));
            }}>Add Smurf</button>
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