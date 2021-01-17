import styled from '@emotion/styled';

const DetailHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1.2rem 2rem;
	border-bottom: 2px solid #2d2f36;

	& > h4 {
		font-weight: 600;
		font-size: 1.3rem;
		line-height: 44px;
		letter-spacing: 0.1em;
		margin: 0;
		&:first-of-type {
			color: #ededed;
		}
		&:last-of-type {
			color: #f2c94c;
		}
	}
`;

export default DetailHeader;
