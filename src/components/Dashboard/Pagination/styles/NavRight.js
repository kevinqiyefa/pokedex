import styled from '@emotion/styled';

const NavRight = styled.nav`
	& > input {
		background: #2d2f36;
		border-radius: 8px;
		font-size: 0.9rem;
		color: white;
		border: none;
		padding: 0.5rem 1rem;
		margin: 0.2rem;
		cursor: pointer;
		&:focus {
			outline: 0;
		}
		&:hover {
			box-shadow: 0 0 5px #f2c94c;
		}
	}

	& > input:last-of-type {
		margin-right: 0;
	}
`;

export default NavRight;
