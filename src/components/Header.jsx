import { Link, useLocation } from "react-router-dom";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import SearchBox from "./SearchBox";
import {
	HEADER_WORD_LOGO_TXT,
	HEADER_FULL_LOGO_PRIMARY_TXT,
	HEADER_FULL_LOGO_SECONDARY_TXT,
} from "../config";

const useStyles = makeStyles((theme) => ({
	root: {
		background: `${theme.palette.background.default} !important`,
		borderBottom: `1px solid ${theme.palette.searchBarLineColor}`,

		[theme.breakpoints.up("md")]: {
			"& form": {
				maxWidth: "75%",
			},
		},
	},
	toolbar: {
		gap: "1em",
	},

	trimUnderline: {
		color: "inherit",
		textDecoration: "none",
	},

	fullLogo: {
		color: theme.palette.text.primary,
		fontWeight: 300,
		[theme.breakpoints.between("sm", "md")]: {
			fontSize: "1.1rem",
		},
		[theme.breakpoints.down("sm")]: {
			display: "none",
		},
	},

	wordLogo: {
		color: theme.palette.primary.contrastText,
		background: theme.palette.primary.dark,
		fontFamily: "serif",
		padding: "0.25em",
		lineHeight: 1,
		borderRadius: "3px",
		[theme.breakpoints.up("sm")]: {
			display: "none",
		},
	},

	fw500: {
		fontWeight: 500,
	},
}));

function Header() {
	const location = useLocation();
	const path = location.pathname;
	const classes = useStyles();
	return (
		<AppBar elevation={0} className={classes.root}>
			<Toolbar className={classes.toolbar}>
				<Typography component="h1" variant="h6">
					<Link to="/" className={classes.trimUnderline}>
						<Box className={classes.fullLogo}>
							<strong className={classes.fw500}>
								{HEADER_FULL_LOGO_PRIMARY_TXT}
							</strong>
							{HEADER_FULL_LOGO_SECONDARY_TXT}
						</Box>
						<Box className={classes.wordLogo}>
							{HEADER_WORD_LOGO_TXT}
						</Box>
					</Link>
				</Typography>
				{path.startsWith("/search") && <SearchBox />}
			</Toolbar>
		</AppBar>
	);
}

export default Header;
