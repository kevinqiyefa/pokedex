import {
	ContentDetails,
	DetailHeader,
	ImageWrapper,
	PokemonTypes,
	PokemonType
} from './styles';

const colorTypes = {
	Normal: { bg: '#A8A77A', textColor: '#212121' },
	Fire: { bg: '#EE8130', textColor: '#212121' },
	Water: { bg: '#6390F0', textColor: '#FFFFFF' },
	Electric: { bg: '#F7D02C', textColor: '#212121' },
	Grass: { bg: '#7AC74C', textColor: '#212121' },
	Ice: { bg: '#96D9D6', textColor: '#212121' },
	Fighting: { bg: '#C22E28', textColor: '#FFFFFF' },
	Poison: { bg: '#A33EA1', textColor: '#FFFFFF' },
	Ground: { bg: '#E2BF65', textColor: '#212121' },
	Flying: { bg: '#A98FF3', textColor: '#212121' },
	Psychic: { bg: '#F95587', textColor: '#212121' },
	Bug: { bg: '#A6B91A', textColor: '#212121' },
	Rock: { bg: '#B6A136', textColor: '#212121' },
	Ghost: { bg: '#735797', textColor: '#212121' },
	Dragon: { bg: '#6F35FC', textColor: '#212121' },
	Dark: { bg: '#705746', textColor: '#FFFFFF' },
	Steel: { bg: '#B7B7CE', textColor: '#212121' },
	Fairy: { bg: '#D685AD', textColor: '#212121' }
};
const PokemonDetails = ({ loading, curPokemon }) => {
	const { number, name, image, types } = curPokemon || {};
	return (
		<ContentDetails>
			{loading ? (
				<p>loading...</p>
			) : (
				<>
					<DetailHeader>
						<h4>{name}</h4>
						<h4>#{number}</h4>
					</DetailHeader>
					<ImageWrapper>
						<img src={image} alt="" className="box" />
					</ImageWrapper>

					<PokemonTypes>
						{types &&
							types.map((type) => (
								<PokemonType
									bg={colorTypes[type].bg}
									textColor={colorTypes[type].textColor}
									key={type}
								>
									{type}
								</PokemonType>
							))}
					</PokemonTypes>
				</>
			)}
		</ContentDetails>
	);
};

export default PokemonDetails;
