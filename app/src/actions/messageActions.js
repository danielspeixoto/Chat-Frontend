import { 
	MESSAGE_STATUS,
	MESSAGE_SET
} from "../reducers/messageReducers";

export function startLoading() {
	return  {
		type: MESSAGE_STATUS,
		payload: {
			isLoading: true
		}
	}
}

export function stopLoading() {
	return {
		type: MESSAGE_STATUS,
		payload: {
			isLoading: false
		}
	}
}

export function setMessage(message) {
	return {
		type: MESSAGE_SET,
		payload: {
			message: message
		}
	}
}