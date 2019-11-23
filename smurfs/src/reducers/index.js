import { GRAB_SMURF, SMURF_ERROR, ADD_SMURF } from "../actions";


const initialState = {
    error: '',
    smurfs: [
        {
            name: '', age: 0, height: '', id: 0
        }
    ]
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GRAB_SMURF:
        return {
            ...state,
            smurfs: action.payload
        };
        case SMURF_ERROR:
        return {
            ...state,
            error: action.payload
        };
        default:
            return state;
    }
}

export default reducer