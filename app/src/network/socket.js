const createSocket = (address, onMessage, onOpen, onClose, onError) => {
	
	const webSocket = new WebSocket("ws://" + address)
	
	webSocket.onmessage = function(event) {
		onMessage(event.data)
	}
	
	webSocket.onopen = function() {
		onOpen()
	}
	
	webSocket.onclose = function() {
		onClose()
	}

	webSocket.onerror = function() {
		onError()
	}

	return webSocket
}

export default createSocket