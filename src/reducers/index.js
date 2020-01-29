import characters from './characters_reducer';
import { combineReducers } from 'redux';
import heroes from './heroes_reducer'

const rootReducer = combineReducers({
    characters,
    heroes,
})

export default rootReducer;