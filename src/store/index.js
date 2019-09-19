//import axios from "axios";

const ACTION = "ACTION";

export const action = () => {
    return {type: ACTION}
}

export const reducer = (state, action) => {
    switch (action.type) {
        case ACTION: {
            return {...state, message: "Ahoy"};
        }
        default: {
            return state;
        }
    }
}