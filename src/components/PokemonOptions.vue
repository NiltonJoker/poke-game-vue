<template>
  <div class="options-container">
    <ul class="fade-in" v-if="pokemons.length !== 0">
      <li
        v-for="pokemon in pokemons"
        :key="pokemon.id"
        @click="$emit('selection', pokemon.id)"
      >
        {{ pokemon.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    pokemons: {
      type: Array,
      required: true,
    },
  },

  methods: {},
};
</script>

<style scoped>
ul {
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
li {
  background-color: white;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  cursor: pointer;
  padding: 8px 16px;
  width: 250px;
  text-transform: capitalize;
}

li:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.options-container {
  display: flex;
  justify-content: center;
}
</style>