<script>
import axios from 'axios'

export default {
  data() {
    return {
      data: []
    }
  },
  mounted() {
    axios.get('api/experience.json').then((response) => {
      this.data = response.data;
    });
  }
}
</script>

<template>
  <h2>{{ $t('experience') }}</h2>
  <article v-for="experience in data">
    <h3 class="gradient">{{ experience.title }}</h3>
    <h4>{{ experience.location }}<span>{{ experience.date }}</span></h4>
    <p v-for="paragraph in experience.description" v-html="paragraph"></p>
    <ul class="keywords">
      <li v-for="keyword in experience.keywords">{{ keyword }}</li>
    </ul>
  </article>
</template>

<style scoped>
article {
  margin-bottom: 2rem;
  page-break-inside: avoid;
}
p {
  margin: 0.5rem 0;
}
h3 {
  padding-bottom: 0.4rem;
  margin-bottom: 0;
}
h4 span {
  float: right;
  position: relative;
  top: -1.9rem;
}
li {
  background: linear-gradient(125deg, #444 0%, #111 100%);
  color: #FFF;
}
</style>
