import { gql } from '@apollo/client';

export const getPokemonsQuery = gql`
	query pokemons($first: Int!) {
		pokemons(first: $first) {
			id
			number
			name
			image
			classification
			types
			weight {
				minimum
				maximum
			}
			height {
				minimum
				maximum
			}
		}
	}
`;
