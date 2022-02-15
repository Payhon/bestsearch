import { Typography, Grid } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { connect } from "react-redux";
import { updateKeyword, fetchTrends, searchTrends } from "../redux/actions";

import Skeleton from "../components/Skeleton";
import SearchResult from "../components/SearchResult";
import Message from "../components/Message";

import { decodeKeyword } from "../util";

import { SEARCH_RESULT_TITLE } from "../config";

function Search(props) {
	const {
		isLoading,
		productTrends,
		updateKeyword,
		searchTrends,
		fetchTrends,
		message,
	} = props;

	const { keyword } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		searchTrends(keyword);
		const rawKeyword = keyword && decodeKeyword(keyword);

		if (rawKeyword) {
			if (rawKeyword !== keyword) {
				navigate(`/search/${rawKeyword}`);
			} else {
				fetchTrends(keyword);
				updateKeyword({
					type: "format",
					value: keyword,
				});
			}
		}
	}, [keyword, navigate, updateKeyword, searchTrends, fetchTrends]);

	return (
		<>
			{message || !keyword ? (
				<Message message={message} />
			) : (
				<>
					<Typography
						component="h2"
						variant="h6"
						sx={{
							fontWeight: 300,
							mb: "1rem",
						}}
					>
						{SEARCH_RESULT_TITLE}
					</Typography>

					<Grid container spacing={2}>
						{isLoading ? (
							<Skeleton />
						) : (
							<SearchResult
								keyword={keyword}
								productTrends={productTrends}
							/>
						)}
					</Grid>
				</>
			)}
		</>
	);
}

const mapStateToProps = (state) => ({
	isLoading: state.searchReducer.isLoading,
	productTrends: state.searchReducer.productTrends,
	message: state.searchReducer.message,
});

const mapDispatchToProps = (dispatch) => ({
	updateKeyword: (keyword) => dispatch(updateKeyword(keyword)),
	searchTrends: (keyword) => dispatch(searchTrends(keyword)),
	fetchTrends: (keyword) => dispatch(fetchTrends(keyword)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
