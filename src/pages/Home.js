import React, { useState, useEffect } from "react";
import { ErrorSkeleton, Filter, LoadingSkeleton, PokemonCard } from "../components";
import { FetchData } from "../services";

export const Home = () => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedType, setSelectedType] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        setError(null);

        const pokemons = await FetchData();
        setAllPokemons(pokemons);
      } catch (error) {
        setError("Error fetching data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    getData();
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
        {/** Filter Options */}
        <Filter
          selectedType={selectedType}
          handleTypeChange={handleTypeChange}
          allPokemons={allPokemons}
        />

        {/** Display the Pokemon Card */}
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
