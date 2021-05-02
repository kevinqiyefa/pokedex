import { NavLeft, NavRight, PaginationWrap } from './styles';

const Pagination = ({ numPerPage, total, paginate, curPage, handleNext, handlePrev }) => {
	let maxPageNumDisplay = 5;
	const pageNumbers = [];
	let maxPageNum = Math.ceil(total / numPerPage);

	let endNum = maxPageNum > curPage ? curPage : maxPageNum;
	if (
		maxPageNum >= maxPageNumDisplay &&
		endNum < maxPageNumDisplay &&
		maxPageNum > endNum
	) {
		endNum = maxPageNumDisplay;
	}
	if (maxPageNum < maxPageNumDisplay) {
		endNum = maxPageNum;
	}
	let startNum = Math.max(endNum - maxPageNumDisplay + 1, 1);

	for (let i = startNum; i <= endNum; i++) {
		pageNumbers.push(i);
	}

	return (
		<PaginationWrap>
			<NavLeft>
				<ul>
					{pageNumbers.map((number) => (
						<li key={number}>
							<input
								type="button"
								value={number}
								onClick={() => paginate(number)}
								className={
									curPage === number ? `page-item active` : `page-item`
								}
							/>
						</li>
					))}
				</ul>
			</NavLeft>

			<NavRight>
				<input type="button" value="Prev" onClick={handlePrev} />
				<input type="button" value="Next" onClick={handleNext} />
			</NavRight>
		</PaginationWrap>
	);
};

export default Pagination;
