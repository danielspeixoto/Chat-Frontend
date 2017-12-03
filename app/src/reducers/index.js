import { combineReducers } from 'redux'
import { messageReducer } from './messageReducers'

export default combineReducers({
	message: messageReducer
})
