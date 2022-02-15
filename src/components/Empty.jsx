import { useParams } from "react-router-dom";

function Empty() {
	const { keyword } = useParams();
	return <div>There is no matching product of keyword '{keyword}'</div>;
}

export default Empty;
