import styled from '@emotion/styled';

const PokemonType = styled.div`
	background-color: ${({ bg }) => (bg ? bg : `#A8A77A`)};
	color: ${({ textColor }) => (textColor ? textColor : `#212121`)};
	border-radius: 3px;
	line-height: 18px;
	font-size: 1rem;
	padding: 5px 10px;
	margin: 5px;
`;

export default PokemonType;
