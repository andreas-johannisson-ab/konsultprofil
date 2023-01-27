<script>
import axios from 'axios'

export default {
  data() {
    return {
      data: []
    }
  },
  mounted() {
    axios.get('api/education.json').then((response) => {
      this.data = response.data;
    });
  }
}
</script>

<template>
  <h2>{{ $t('education') }}</h2>
  <article v-for="education in data">
    <h3 class="gradient" v-if="education.title">{{ education.title }}</h3>
    <h4>{{ education.institution }}<span>{{ education.date }}</span></h4>
    <p v-for="course in education.courses">{{ course }}</p>
  </article>
</template>

<style scoped>
article {
  margin-bottom: 1.5rem;
}
h2 {
  font-size: 2rem;
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
</style>
