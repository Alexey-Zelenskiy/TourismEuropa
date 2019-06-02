import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import photos from './photos'
import states from './states'

export default combineReducers({
    errors: errorReducer,
    auth: authReducer, photos,states
});