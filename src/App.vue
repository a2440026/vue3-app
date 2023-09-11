<template>
  <h1>{{ gdp }}</h1>
</template>

<script>
import {ref} from 'vue';
export default {
  setup() {
    const gdp = ref([]);

    async function fetchGdp() {
      gdp.value = await fetch('/api/gdp.json').then(res => {
        res
        console.log(res)
      })
    };

    fetchGdp();
    
    return {
      gdp
    };
  }
}
</script>
