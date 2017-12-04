import { 
	MESSAGE_STATUS,
	MESSAGE_SET,
	MESSAGE_RECEIVED
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

export function onMessageReceived(message) {
	return {
		type: MESSAGE_RECEIVED,
		payload: {
			message: message
		}
	}
}