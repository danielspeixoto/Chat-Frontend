export const MESSAGE_STATUS = "MESSAGE_STATUS"
export const MESSAGE_SET = "MESSAGE_SET"

export const messageReducer = (state = {
	message: "",
	isLoading: false
}, { payload, type }) => {
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
		default: // Return the same state
			return state;
	}
}