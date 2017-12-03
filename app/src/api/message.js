export const sendMessage = (startLoading, stopLoading, message) => {
	return async () => {
		startLoading()
		// Send Message and awaits
		console.log(message)
		setTimeout(() => stopLoading(), 2000)
	}
}