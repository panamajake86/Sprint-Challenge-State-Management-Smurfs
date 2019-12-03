import React from 'react';
import { connect } from 'react-redux';
import { getTheSmurfs } from '../actions';
import axios from 'axios';

const SmurfData = props => {

    const [name, setName] = React.useState('');
    const [age, setAge] = React.useState('');
    const [height, setHeight] = React.useState('');

    const smurfy = {
        name: name,
        age: age,
        height: height
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
                onChange={e => setName(e.target.value)}
                value={name}
                placeholder="Name"
                 />
            <input
                onChange={e => setAge(e.target.value)}
                value={age}
                placeholder="Age"
                 />
            <input
                onChange={e => setHeight(e.target.value)}
                value={height}
                placeholder="Height"
                 />
            <button onClick={e => {
                e.preventDefault();
                axios
                    .post("http://localhost:3333/smurfs", smurfy)
                    .then(res => {
                        console.log('in post', res)
                    })
                    .catch(err => console.log(err));
                    setName('');
                    setAge('');
                    setHeight('');
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

export default connect(mapStateToProps, { getTheSmurfs })(SmurfData);