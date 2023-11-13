import React, { useState, useEffect } from "react";
import axios from "axios";
import { ErrorSkeleton, LoadingSkeleton, PokemonCard } from "../components";

export const Home = () => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedType, setSelectedType] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=30"
        );
        const pokemons = await Promise.all(
          response.data.results.map(async (pokemon) => {
            const detailedResponse = await axios.get(pokemon.url);
            return detailedResponse.data;
          })
        );

        setAllPokemons(pokemons);
      } catch (error) {
        setError("Error fetching data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredPokemons = selectedType
    ? allPokemons.filter((pokemon) =>
        pokemon.types.some((types) => types.type.name === selectedType)
      )
    : allPokemons;

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  if (loading) return <LoadingSkeleton />;
  if (error) return <ErrorSkeleton error={error} />;

  return (
    <main className="container mx-auto px-4">
      <section className="flex flex-col justify-center">
        <div className="mb-4 mt-4 flex justify-center">
          <label htmlFor="typeFilter" className="text-gray-700 mr-2 dark:text-white">
            Filter by Type:
          </label>
          <select
            id="typeFilter"
            onChange={handleTypeChange}
            value={selectedType || ""}
            className="border border-gray-300 rounded-md p-1"
          >
            <option value="">All Types</option>
            {[
              ...new Set(
                allPokemons.flatMap((pokemon) =>
                  pokemon.types.map((types) => types.type.name)
                )
              ),
            ].map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filteredPokemons.map((pokemon, index) => (
            <PokemonCard
              key={index}
              id={pokemon.id}
              image={pokemon.sprites.other.dream_world.front_default}
              name={pokemon.name}
              types={pokemon.types}
              selectedType={selectedType}
            />
          ))}
        </div>
      </section>
    </main>
  );
};
