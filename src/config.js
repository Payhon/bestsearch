import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		background: {
			default: "#f9f4e8",
		},
		primary: {
			main: "#212121",
			light: "#484848",
			dark: "#000",
			contrastText: "#fff",
		},
		text: {
			caption: "rgba(0, 0, 0, 0.5)",
		},
		searchBarLineColor: "#212121"
	},
});

export { theme };

export const LOGIN_TOKEN = "INTERVIEW_SIMPLY2021";
export const SEARCH_API_BASE_URL = "/interview";
export const HOME_SEARCH_TITLE = "Search Trends";
export const HOME_SEARCH_PLACEHOLDER = "Search for new products in 961K stores";
export const SEARCH_RESULT_TITLE = 'Related product trends';
export const DATE_FORMAT = "MMM YYYY";
export const DATE_CONNECTOR = " - ";
