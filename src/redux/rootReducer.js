import { combineReducers } from 'redux';
import cakeReducers from './cake/cakeReducer';
import iceCreamReducers from './iceCream/iceCreamReducer';
import userReducer from './user/userReducer';

const rootReducer = combineReducers({
    cake: cakeReducers,
    iceCream: iceCreamReducers,
    user: userReducer
});

export default rootReducer;