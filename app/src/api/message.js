import createSocket from '../network/socket'

const socket = createSocket(
	"192.168.0.22:8080/ws",
	(msg) => console.log(msg),
	() => console.log("Open"),
	() => console.log("closed"),
	() => console.log("error")
)

export const sendMessage = (props) => {
	return () => {
		props.startLoading()
		socket.send(props.messageStatus.message)
		// Stop Loafing when the message is received
		props.stopLoading()
	}
}