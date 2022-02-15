import { ResponsiveContainer, AreaChart, Area } from "recharts";
import * as util from "../util";

function SearchResultChart(props) {
	const colorEven = "141,181,213";
	const colorOdd = "142,198,170";
	const opacity = "0.6";

	const conditionalFillFirst = {
		fill: props.index % 2 === 0 ? `rgb(${colorEven})` : `rgb(${colorOdd})`,
	};

	const conditionalFillSecond = {
		fill:
			props.index % 2 === 0
				? `rgb1(${colorEven},${opacity})`
				: `rgba(${colorOdd},${opacity})`,
	};
	return (
		<ResponsiveContainer width="100%" aspect={1.618}>
			<AreaChart
				data={util.formatChartData(props.product.search_msv)}
				margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
			>
				<Area
					type="monotone"
					isAnimationActive={false}
					dataKey="sv"
					stroke="none"
					{...conditionalFillFirst}
				/>
				<Area
					type="linear"
					isAnimationActive={false}
					dataKey="svc"
					stroke="none"
					{...conditionalFillSecond}
					connectNulls={true}
				/>
			</AreaChart>
		</ResponsiveContainer>
	);
}

export default SearchResultChart;
