<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h3>counter: {{ counter }}</h3>
    <button @click="add">Add Count</button>
  </div>
</template>

<script lang="ts" setup>
import useDemoStore from '@/store/demo';
import { storeToRefs } from 'pinia';

const demoStore = useDemoStore();
const { counter } = storeToRefs(demoStore);

const add = () => {
  demoStore.increment();
};
</script>
