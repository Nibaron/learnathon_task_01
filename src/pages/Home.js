import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PokemonCard } from '../components';

export const Home = () => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20');
        const pokemons = await Promise.all(
          response.data.results.map(async (pokemon) => {
            const detailedResponse = await axios.get(pokemon.url);
            return detailedResponse.data;
          })
        );

        setAllPokemons(pokemons);
      } catch (error) {
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <main className="container mx-auto px-4">
      <section className="flex flex-col justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {allPokemons.map((pokemon, index) => (
            <PokemonCard
              key={index}
              id={pokemon.id}
              image={pokemon.sprites.other.dream_world.front_default}
              name={pokemon.name}
              types={pokemon.types}
            />
          ))}
        </div>
      </section>
    </main>
  );
};
