import { useParams } from "react-router-dom";

function Empty() {
	const { keyword } = useParams();
	return <div>There is no matching product of keyword '{keyword}',try 'hat'?</div>;
}

export default Empty;
