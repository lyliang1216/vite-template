<template>
  <div class="home">
    <HelloWorld msg="Vite + Vue" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue';

export default defineComponent({
  name: 'home',
  components: {
    HelloWorld,
  },
});
</script>
<style scoped>
.home {
  width: 100px;
  height: 100px;
}
</style>
