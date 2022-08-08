<script setup lang="ts">
import { ref, onMounted } from 'vue'
defineProps<{ msg: string }>()
const count = ref(0)
onMounted(() => {
  
})
</script>

<template>
  <div class="container">
    <div class="wrapper">
      <canvas id="surface"></canvas>
    </div>
  </div>

</template>

<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  background: #000;
}

.wrapper {
  margin: 20px auto;
  text-align: center;
}

canvas {
  width: 100%;
  height: 100%;
}
</style>
