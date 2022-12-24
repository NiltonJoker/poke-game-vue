import getPokemonOptions, {
  getPokemons,
  getPokemonsNames,
} from "@/helpers/getPokemonOptions";
import { pokemons } from "../mocks/pokemons.mock";

describe("getPokemonOptions helpers", () => {
  test("Debe de regresar un arreglo de numeros", () => {
    const pokemons = getPokemons();

    expect(pokemons.length).toBe(650);
    expect(pokemons[0]).toBe(1);
    expect(pokemons[500]).toBe(501);
    expect(pokemons[649]).toBe(650);
  });

  test("debe de retornar un arreglo de 4 elementos con nombres de pokemons", async () => {
    const pokemonName = await getPokemonsNames([1, 2, 3, 4]);

    expect(pokemonName.length).toBe(4);

    expect(pokemonName).toStrictEqual(pokemons);

    expect(pokemonName).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: expect.any(String),
          id: expect.any(Number),
        }),
      ])
    );

    expect(pokemonName[0]).toEqual(
      expect.objectContaining({
        name: expect.any(String),
        id: expect.any(Number),
      })
    );
  });

  test("getPokemonOptions debe de retornar un arreglo mezclado", async () => {
    const pokemons = await getPokemonOptions();

    expect(pokemons.length).toBe(4);

    expect(pokemons).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: expect.any(String),
          id: expect.any(Number),
        }),
      ])
    );
  });
});
