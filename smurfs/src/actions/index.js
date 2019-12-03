import axios from 'axios';

export const GRAB_SMURF = 'GRAB_SMURF';
export const SMURF_ERROR = 'SMURF_ERROR';

export const getTheSmurfs = () => dispatch => {
    axios
        .get("http://localhost:3333/smurfs")
        .then(res => {
            console.log('in actions', res.data)
            dispatch({
                type: GRAB_SMURF,
                payload: res.data
            })
        })
        .catch(err => console.log(err));
};