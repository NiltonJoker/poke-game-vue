<template>
  <!-- <h1 v-if="!pokemon">Espere por favor...</h1> -->
  <PokemonLoading v-if="!pokemon" />

  <div class="pokemon-page fade-in" v-else>
    <PokemonHeader :aciertos="aciertos" :desaciertos="desaciertos" />

    <h2>¿Quién es ese Pokemón?</h2>
    <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />

    <PokemonOptions :pokemons="pokemonArr" @selection="checkAnswer" />

    <div v-if="showAnswer" class="fade-in">
      <h2 class="message-answer">{{ message }}</h2>
      <button class="btn-newgame" @click="newGame">Nuevo Juego</button>
    </div>
  </div>
</template>

<script>
import PokemonPicture from "@/components/PokemonPicture.vue";
import PokemonOptions from "@/components/PokemonOptions.vue";
import getPokemonOptions from "@/helpers/getPokemonOptions";
import PokemonLoading from "@/components/PokemonLoading.vue";
import PokemonHeader from "@/components/PokemonHeader.vue";

export default {
  components: { PokemonPicture, PokemonOptions, PokemonLoading, PokemonHeader },

  data() {
    return {
      pokemonArr: [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      message: "",
      aciertos: 0,
      desaciertos: 0,
    };
  },
  methods: {
    async mixedPokemonArray() {
      this.pokemonArr = await getPokemonOptions();

      const rndInt = Math.floor(Math.random() * 4);

      this.pokemon = this.pokemonArr[rndInt];
    },
    checkAnswer(pokemonSelected) {
      if (this.showAnswer) return;

      this.showAnswer = true;
      this.showPokemon = true;

      if (pokemonSelected === this.pokemon.id) {
        this.message = `Correcto, ${this.pokemon.name}`;
        this.aciertos++;
      } else {
        this.message = `Oops, era ${this.pokemon.name}`;
        this.desaciertos++;
      }
    },
    newGame() {
      this.showPokemon = false;
      this.showAnswer = false;
      this.pokemon = null;
      (this.pokemonArr = []), this.mixedPokemonArray();
    },
  },
  mounted() {
    this.mixedPokemonArray();
  },
};
</script>


<style scoped>
.title-page {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 100px;
  object-fit: contain;
}

.message-answer {
  text-transform: capitalize;
}
.pokemon-page {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  gap: 10px;
  margin-top: 20px;
}
.btn-newgame {
  border: none;
  padding: 8px 16px;
  border-radius: 5px;

  font-size: 15px;
  transition: all 0.3s ease-in-out;
  background-color: #e3350d;
  color: white;
  cursor: pointer;
}
</style>