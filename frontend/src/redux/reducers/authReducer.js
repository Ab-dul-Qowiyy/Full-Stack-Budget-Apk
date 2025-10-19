import {AUTH_TYPE} from '../type';

const initialState = {
    auth: []
};

export const auth = (state = initialState, action) => {
    switch(action.type){
        case AUTH_TYPE.USER_SIGNIN:
        case AUTH_TYPE.USER_SIGNUP:
            return {
                ...auth,
                auth: [action.paylaod, ...state.auth]
            };

        default:
            return state;
    }
};

