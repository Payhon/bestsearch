import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Box, OutlinedInput, Button } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { connect } from "react-redux";
import { updateKeyword } from "../redux/actions";
import * as util from "../util";
import { HOME_SEARCH_PLACEHOLDER } from "../config";

function SearchBox({ keyword, updateKeyword }) {
	const navigate = useNavigate();
	const location = useLocation();
	const path = location.pathname;

	const searchHandle = (e) => {
		const key = e.target.value;
		updateKeyword({
			type: "input",
			value: key,
		});
	};

	const submitHandle = (e) => {
		e.preventDefault();
		const data = new FormData(e.target)
		const keyword = util.encodeKeyword(data.get("keyword"));
		if (!keyword) return;
		navigate(`/search/${keyword}`);
	};

	useEffect(() => {
		if ("/" === path) {
			updateKeyword({
				type: "clear",
				value: "",
			});
		}
	}, [path, updateKeyword]);

	return (
		<Box
			component="form"
			onSubmit={submitHandle}
			sx={{
				display: "flex",
				gap: "0.5em",
				flexGrow: "1",
			}}
		>
			<OutlinedInput
				name="keyword"
				value={keyword}
				onChange={searchHandle}
				placeholder={HOME_SEARCH_PLACEHOLDER}
				sx={{
					flexGrow: 1,
					"& .MuiOutlinedInput-input": { padding: "0.5em 1em" },
				}}
			/>
			<Button
				type="submit"
				variant="outlined"
				sx={{
					color: "rgba(0,0,0,0.55)",
					borderColor: "rgba(0,0,0,0.22)",
				}}
			>
				<SearchIcon />
			</Button>
		</Box>
	);
}

const mapStateToProps = (state) => ({
	keyword: state.searchReducer.keyword,
});

const mapDispatchToProps = (dispatch) => ({
	updateKeyword: (keyword) => dispatch(updateKeyword(keyword)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
