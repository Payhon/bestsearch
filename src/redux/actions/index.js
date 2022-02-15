import * as actions from "./types";
import { API } from "../../api";

export const updateKeyword = (e) => (dispatch) => {
	const actionMap = {
		input: actions.KEYWORD_INPUT,
		format: actions.KEYWORD_FORMAT,
		clear: actions.KEYWORD_CLEAR,
	};

	dispatch({
		type: actionMap[e.type],
		payload: {
			keyword: e.value,
		},
	});
};

export const searchTrends = (str) => (dispatch) => {
	if (str) {
		dispatch({
			type: actions.TRENDS_SEARCH_START,
		});
	} else {
		dispatch({
			type: actions.TRENDS_SEARCH_FAIL,
			payload: {
				message: {
					type: "info",
					content: "Please input search keywords.",
				},
			},
		});
	}
};

export const fetchTrends = (str) => async (dispatch) => {
	//todo:
	API.search(str)
		.then((res) => {
			dispatch({
				type: actions.TRENDS_SEARCH_FETCH,
				payload: {
					data: res.product_trends,
				},
			});
		})
		.catch((err) => {
			dispatch({
				type: actions.TRENDS_SEARCH_FAIL,
				payload: {
					message: {
						type: "error",
						content: err,
					},
				},
			});
		});
};
