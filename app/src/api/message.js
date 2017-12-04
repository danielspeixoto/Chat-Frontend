export const sendMessage = (props) => {
	return () => {
		props.message.socket.send(props.message.message)
		props.setMessage("")
	}
}