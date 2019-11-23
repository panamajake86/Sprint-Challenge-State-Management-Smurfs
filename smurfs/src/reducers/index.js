import { GRAB_SMURF } from "../actions";


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
        }
        default:
            return state;
    }
}

export default reducer;