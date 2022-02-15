import { Typography, Paper, Grid, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import SearchResultChart from "./SearchResultChart";
import Empty from './Empty';
import * as util from "../util";
import Moment from "react-moment";
import { DATE_FORMAT, DATE_CONNECTOR } from "../config";

const useStyles = makeStyles((theme) => ({
	paper: {
		position: "relative",
	},
	header: {
		position: "absolute",
		width: "100%",
		padding: "1em",
	},
	title: {
		fontWeight: "300 !important",
	},
	subtitle: {
		color: theme.palette.text.caption,
		fontSize: "0.85rem !important",
		marginTop: "0.5rem !important",
	},
	chart: {
		marginTop: "5rem",
	},
	footer: {
		color: theme.palette.text.caption,
		textAlign: "center",
		fontSize: "0.85rem !important",
		padding: "0.5rem",
	},
}));
function SearchResult(props) {
	const classes = useStyles();
	return (props.productTrends && props.productTrends.length > 0) ? (
		props.productTrends.map((product, index) => (
			<Grid item xs={12} sm={6} md={3} key={index}>
				<Paper variant="outlined" className={classes.paper}>
					<Box className={classes.header}>
						<Typography
							component="h3"
							variant="h6"
							className={classes.title}
						>
							{util.highlightSearchKeyword(
								product.name,
								props.keyword
							)}
						</Typography>
						<Typography className={classes.subtitle}>
							{`Growth ${util.calcGrowthRate(product)}%`}
						</Typography>
					</Box>

					<Box className={classes.chart}>
						<SearchResultChart product={product} index={index} />
					</Box>

					<Typography className={classes.footer}>
						<Moment
							date={util.formatDate(product.search_msv[0].date)}
							format={DATE_FORMAT}
						/>
						{DATE_CONNECTOR}
						<Moment
							date={util.formatDate(
								product.search_msv[
									product.search_msv.length - 1
								].date
							)}
							format={DATE_FORMAT}
						/>
					</Typography>
				</Paper>
			</Grid>
		))
	) : (
		<Empty />
	);
}

export default SearchResult;
