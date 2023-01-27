<script>
import axios from 'axios'

export default {
  data() {
    return {
      data: []
    }
  },
  mounted() {
    axios.get('api/keywords.json').then((response) => {
      this.data = response.data;
    });
  }
}
</script>

<template>
  <h2>{{ $t('keywords') }}</h2>
  <ul v-for="group in data" class="keywords">
    <li v-for="keyword in group">{{ keyword }}</li>
  </ul>
</template>

<style scoped>
h2 {
  font-size: 1.8rem;
}
li {
  background: linear-gradient(125deg, #EEE 0%, #DDD 100%);
}
</style>
