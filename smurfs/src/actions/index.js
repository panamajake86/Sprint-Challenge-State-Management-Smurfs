import axios from 'axios';

export const GRAB_SMURF = 'GRAB_SMURF';

export const getTheSmurfs = () => dispatch => {
    axios
        .get("http://localhost:3333/smurfs")
        .then(res => {
            console.log(res)
            dispatch({
                type: GRAB_SMURF,
                payload: {smurfs: res.data}
            })
        })
        .catch(err => console.log(err));
}