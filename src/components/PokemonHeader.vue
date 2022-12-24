<template>
  <img
    class="title-page"
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/375px-International_Pok%C3%A9mon_logo.svg.png"
    alt=""
  />

  <div class="pokemon-question">
    <div>
      <p class="text-success">Aciertos: {{ aciertos }}</p>
      <p class="text-error">Desaciertos: {{ desaciertos }}</p>
    </div>
    <img
      class="pokeball-img"
      src="https://i.pinimg.com/originals/09/da/92/09da926c2b94d95008a9e3b2f60bfdd3.png"
      alt=""
    />
  </div>
</template>

<script>
export default {
  props: {
    aciertos: {
      type: Number,
      default: 0,
      required: true
    },
    desaciertos: {
      type: Number,
      default: 0,
      required: true
    }
  }
};
</script>

<style scoped>
.pokeball-img {
  width: 60px;
  height: 60px;
}

.pokemon-question {
  display: flex;

  justify-content: space-between;
  align-items: center;
  gap: 10px;
}
.pokemon-question p {
  font-weight: bold;
}
.text-success {
  color: green;
}
.text-error {
  color: red;
}
</style>