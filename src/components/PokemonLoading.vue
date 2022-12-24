<template>
  <div class="loading-page">
    <img
      src="https://cdn.dribbble.com/users/948184/screenshots/2904916/media/f1f799feeea0cfdb569a03f66a208587.gif"
      alt="Loading"
    />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.loading-page {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: white;
}

.loading-page img {
  width: 400px;
  height: 400px;
  object-fit: contain;
}
</style>