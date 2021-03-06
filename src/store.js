import * as c from './constants';
import assign from 'lodash.assign';

const initialState = {
    values: {}
};

export default (initialState,action) => {
    switch(action.TYPE){
        case 'c.FORM_UPDATE_VALUE':
            return assign({}, state, {
                values: assign({}, state.values, {
                [action.name]: action.value
            })
        });
        
        case 'c.FORM_RESET':
            return initialState;

        default:
            return state;

    }

}