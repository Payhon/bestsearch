import { Grid, Skeleton as MuiSkeleton } from "@mui/material";

function Skeleton() {
	return [1, 2, 3, 4].map((item) => (
		<Grid item xs={12} sm={6} md={3} key={item}>
			<MuiSkeleton variant="text" width="75%" />
			<MuiSkeleton variant="text" width="40%" />
			<MuiSkeleton
				variant="rectangular"
				height={180}
				sx={{ mt: "0.5em" }}
			/>
		</Grid>
	));
}

export default Skeleton;
