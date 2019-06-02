import {combineReducers} from 'redux'
import { pageReducer } from './page'
import { userReducer } from './user'
import photos from './photos'
import states from './states'

const reducers={photos,states};
const rootReducer = combineReducers({  page: pageReducer,
  user: userReducer,  photos,states});

export default rootReducer