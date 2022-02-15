import { Typography } from "@mui/material";
import SearchBox from "../components/SearchBox";
import { HOME_SEARCH_TITLE } from "../config";

const Index = () => {
	return (
		<>
			<Typography
				component="h2"
				variant="h4"
				align="center"
				sx={{
					fontSize: "2.5rem",
					fontWeight: 300,
					mt: "8rem",
					mb: "4rem",
				}}
			>
				{HOME_SEARCH_TITLE}
			</Typography>
			
			<SearchBox />
		</>
	);
};

export default Index;
