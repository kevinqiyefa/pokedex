import styled from '@emotion/styled';

const NavLeft = styled.nav`
	& > ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
		display: flex;
	}

	& .page-item {
		background: #2d2f36;
		border-radius: 8px;
		font-size: 0.9rem;
		color: white;
		border: none;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
		width: 2rem;
		cursor: pointer;

		&:focus {
			outline: 0;
		}
		&:hover {
			box-shadow: 0 0 5px #f2c94c;
		}
	}
	& .page-item.active {
		box-shadow: 0 0 5px #f2c94c;
	}

	& li {
		margin: 0 0.2rem;
		&:first-of-type {
			margin-left: 0;
		}

		&:last-of-type {
			margin-right: 0;
		}
	}
`;

export default NavLeft;
