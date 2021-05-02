import styled from '@emotion/styled';

const DashboardWarpper = styled.div`
	background: #484d57;
	min-height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;

	& > div {
		display: flex;
		width: 100%;
		max-width: 900px;
		max-height: 1000px;
	}
`;

export default DashboardWarpper;
