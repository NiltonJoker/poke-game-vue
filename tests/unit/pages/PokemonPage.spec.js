import PokemonPage from "@/pages/PokemonPage";
import PokemonPicture from "@/components/PokemonPicture";
import PokemonOptions from "@/components/PokemonOptions";

import { shallowMount, mount } from "@vue/test-utils";
import { pokemons } from "../mocks/pokemons.mock";

describe("PokemonPage Component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(PokemonPage);
  });

  test("debe de hacer match con el snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("debe de llamar el mixedPokemonArr al montar", () => {
    const mixedPokemonArrSpy = jest.spyOn(
      PokemonPage.methods,
      "mixedPokemonArray"
    );

    shallowMount(PokemonPage);

    expect(mixedPokemonArrSpy).toHaveBeenCalled();
  });

  test("Debe de hacer match con el snapshot cuando cargan los pokemons", () => {
    const wrapper = mount(PokemonPage, {
      data() {
        return {
          pokemonArr: pokemons,
          pokemon: pokemons[0],
          showPokemon: false,
          showAnswer: false,
          message: "",
          aciertos: 0,
          desaciertos: 0,
        };
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  test("Debe de mostrar los componentes de PokemonPicture y PokemonOptions", () => {
    const wrapper = mount(PokemonPage, {
      data() {
        return {
          pokemonArr: pokemons,
          pokemon: pokemons[0],
          showPokemon: false,
          showAnswer: false,
          message: "",
          aciertos: 0,
          desaciertos: 0,
        };
      },
    });

    const picture = wrapper.findComponent(PokemonPicture);
    const options = wrapper.findComponent(PokemonOptions);

    expect(picture.exists()).toBe(true);
    expect(options.exists()).toBe(true);

    expect(picture.props("pokemonId")).toBe(1);
    expect(Boolean(options.props("pokemons"))).toBe(true);
  });

  test('Pruebas con checkAnswer', async () => {
    
    const wrapper = shallowMount(PokemonPage, {
      data() {
        return {
          pokemonArr: pokemons,
          pokemon: pokemons[0],
          showPokemon: false,
          showAnswer: false,
          message: "",
          aciertos: 0,
          desaciertos: 0,
        };
      },
    });

    await wrapper.vm.checkAnswer(1)

    expect(wrapper.find('h2.message-answer').exists()).toBeTruthy()
    expect(wrapper.vm.showPokemon).toBeTruthy()
    expect(wrapper.find('h2.message-answer').text()).toBe(`Correcto, ${pokemons[0].name}`)

  })

  test('Pruebas con checkAnswer sino es correcto', async () => {
    
    const wrapper = shallowMount(PokemonPage, {
      data() {
        return {
          pokemonArr: pokemons,
          pokemon: pokemons[0],
          showPokemon: false,
          showAnswer: false,
          message: "",
          aciertos: 0,
          desaciertos: 0,
        };
      },
    });

    await wrapper.vm.checkAnswer(2)

    expect(wrapper.find('h2.message-answer').exists()).toBeTruthy()
    expect(wrapper.vm.showPokemon).toBeTruthy()
    expect(wrapper.vm.message).toBe(`Oops, era ${pokemons[0].name}`)

  })
  
});
