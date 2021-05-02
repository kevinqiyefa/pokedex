import styled from '@emotion/styled';

const CardListWrapper = styled.div`
	margin: 0.6rem 2rem;
	background: #3f414b;
	border-radius: 6px;
	text-align: left;
	padding: 0.8rem 1.3rem;
	display: flex;
	align-items: center;
	cursor: pointer;

	&:hover {
		box-shadow: 0 0 5px #f2c94c;
	}

	& > .poke-img {
		display: flex;
		align-items: center;
	}

	& img {
		width: 44px;
		height: 44px;
		border-radius: 50%;
		object-fit: cover;
	}

	& > .poke-num {
		color: #f2c94c;
		font-weight: bold;
		font-size: 1.1rem;
		line-height: 25px;
		margin-left: 2rem;
		margin-right: 1rem;
	}

	& > .poke-name {
		color: #ededed;
		font-weight: 600;
		font-size: 18px;
		line-height: 25px;
	}
`;

export default CardListWrapper;
