import { useQuery } from '@apollo/client';
import { useState, useEffect, useMemo } from 'react';
import { getPokemonsQuery } from '../../graphql/Queries';
import { DashboardWrapper, DashboardLeft } from './styles';
import CardList from './CardList';
import Pagination from './Pagination';
import PokemonDetails from './PokemonDetails';

function Dashboard() {
	const [first, setFirst] = useState(10);
	const [curPokemon, setCurPokemon] = useState({});
	const [curPage, setCurPage] = useState(1);
	const numPerPage = 10;

	const { loading, error, data, fetchMore } = useQuery(getPokemonsQuery, {
		variables: { first }
	});

	const idxOfLastPokemon = curPage * numPerPage;
	const idxOfFirstPokemon = idxOfLastPokemon - numPerPage;
	const curPokemons = useMemo(
		() => (data ? data.pokemons.slice(idxOfFirstPokemon, idxOfLastPokemon) : []),
		[data, idxOfFirstPokemon, idxOfLastPokemon]
	);

	useEffect(() => {
		if (curPokemons.length > 0) {
			setCurPokemon(curPokemons[0]);
		}
	}, [curPokemons]);

	const handleNext = () => {
		if (curPokemons.length > 0 && curPokemons.length === numPerPage) {
			if (first / numPerPage === curPage) {
				fetchMore({
					variables: {
						first: first + numPerPage
					}
				});
				setFirst((prevFirst) => prevFirst + numPerPage);
			}

			setCurPage((p) => p + 1);
		}
	};

	const handlePrev = () => {
		if (first > numPerPage) {
			if (curPage > 1) {
				setCurPage((p) => p - 1);
			}
		}
	};

	return (
		<DashboardWrapper>
			{error ? (
				<p>Oops, something went wrong :(</p>
			) : (
				<div>
					<DashboardLeft>
						<CardList
							pokemons={curPokemons}
							loading={loading}
							setCurPokemon={setCurPokemon}
						/>
						<Pagination
							numPerPage={numPerPage}
							total={first}
							paginate={setCurPage}
							curPage={curPage}
							handlePrev={handlePrev}
							handleNext={handleNext}
						/>
					</DashboardLeft>
					<PokemonDetails loading={loading} curPokemon={curPokemon} />
				</div>
			)}
		</DashboardWrapper>
	);
}

export default Dashboard;
