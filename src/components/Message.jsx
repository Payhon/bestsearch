import { Alert } from "@mui/material";

function Message(props) {
	return <Alert severity={props.message.type}>{props.message.content}</Alert>;
}

export default Message;
