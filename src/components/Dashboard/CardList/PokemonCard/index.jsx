import CardContainer from './styles/CardContainer';

const PokemonCard = ({ image, number, name, setCurPokemon }) => {
	return (
		<CardContainer onClick={setCurPokemon}>
			<span className="poke-img">
				<img src={image} alt="" />
			</span>
			<span className="poke-num">{number}</span>
			<span className="poke-name">{name}</span>
		</CardContainer>
	);
};

export default PokemonCard;
