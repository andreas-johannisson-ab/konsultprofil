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
  <article class="felx" v-for="institution in data.institutions">
    <h3 class="gradient">{{ institution.title }}</h3>
    <h4>{{ institution.institution }}<span>{{ institution.date }}</span></h4>
  </article>
  <h3 class="gradient">{{ $t('courses') }}</h3>
  <article v-for="course in data.courses">
    <h4>{{ course.institution }}</h4>
    <ul>
      <li v-for="course in course.courses">{{ course }}</li>
    </ul>
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
