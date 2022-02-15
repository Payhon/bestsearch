//关键词格式化
export const decodeKeyword = (keyword) =>
	keyword
		.split("+")
		.map((word) => word.replace(/%2B/g, "+"))
		.join(" ")
		.trim();
//将空格转换成+
export const encodeKeyword = (str) =>
	str.trim().replace(/\+/g, "%2B").split(/\s+/).join("+");

//格式化图表数据
export const formatChartData = (array) => {
	const arrResult = array.slice();
	const copyField = (index, df, sf) =>
		(arrResult[index][df] = arrResult[index][sf]);
	copyField(0, "svc", "sv");
	copyField(arrResult.length - 1, "svc", "sv");
	return arrResult;
};
//高亮搜索结果关键词
export const highlightSearchKeyword = (title, keyword) =>
  title
    .split(' ')
    .map((word, index) =>
      keyword
        .split('+')
        .map((word) => word.replace(/%2B/g, '+'))
        .includes(word) ? (
        <span style={{ fontWeight: '400' }} key={index}>
          {word}
        </span>
      ) : (
        word
      )
    )
    .reduce((prev, curr) => [prev, ' ', curr])
//计算产品增长率
export const calcGrowthRate = (product) => {
    const start = product.search_msv[0].sv
    const final = product.search_msv[product.search_msv.length - 1].sv
  
    return (((final - start) / start) * 100).toFixed(0)
  }
//格式化日期
export const formatDate = (date) =>
  date.length !== 7 ? [date.slice(0, 5), 0, date.slice(5)].join('') : date