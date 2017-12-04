export const MESSAGE_STATUS = "MESSAGE_STATUS"
export const MESSAGE_SET = "MESSAGE_SET"
export const MESSAGE_RECEIVED = "MESSAGE_RECEIVED"

const socket = new WebSocket("ws://192.168.0.22:8080/ws")

export const messageReducer = (state = {
	message: "",
	isLoading: false,
	socket,
	messages: []
}, { payload, type }) => {

	console.log("here")
	switch(type) {
		case MESSAGE_STATUS:
			return {
				...state,
				isLoading: payload.isLoading
			}
		case MESSAGE_SET:
			return {
				...state,
				message: payload.message
			}
		case MESSAGE_RECEIVED:
			return {
				...state,
				messages: [...state.messages, payload.message]
			}
		default: // Return the same state
			return state;
	}
}