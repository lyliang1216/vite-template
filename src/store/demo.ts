import { ref } from 'vue';
import { defineStore } from 'pinia';

const useDemoStore = defineStore('demo', () => {
  const counter = ref(0);

  const increment = () => {
    counter.value++;
  };

  return {
    counter,
    increment,
  };
});

export default useDemoStore;
