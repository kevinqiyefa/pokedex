import CardListWrapper from './styles/CardListWrapper';
import PokemonCard from './PokemonCard';

const CardList = ({ pokemons, loading, setCurPokemon }) => {
	return (
		<CardListWrapper>
			{loading ? (
				<p>Loading...</p>
			) : (
				pokemons.map((p) => (
					<PokemonCard
						image={p.image}
						number={p.number}
						name={p.name}
						key={p.id}
						setCurPokemon={() => setCurPokemon(p)}
					/>
				))
			)}
		</CardListWrapper>
	);
};

export default CardList;
