<script>
import axios from 'axios'

export default {
  data() {
    return {
      data: {}
    }
  },
  mounted() {
    axios.get('api/contact.json').then((response) => {
      this.data = response.data;
    });
  }
}
</script>

<template>
  <img src="@/assets/image.jpg" alt="Andreas Johannisson" />
  <h2>{{ $t('contact') }}</h2>
  <ul>
    <li>
      <span class="icon">home</span>
      <span v-for="line in data.address">{{ line }}<br></span>
    </li>
    <li>
      <span class="icon">mail</span>
      <a :href="'mailto:' + data.mail">{{ data.mail }}</a>
    </li>
    <li>
      <span class="icon">phone_android</span>
      <a :href="'tel:' + data.phone">{{ data.phone }}</a>
    </li>
  </ul>
  <div class="no-print">
    <h2>{{ $t('document') }}</h2>
    <ul>
      <li>
        <span class="icon">description</span>
        <a href="/konsultprofil/andreas_johannisson.pdf" target="_blank">{{ $t('pdf')}}</a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
h2 {
  font-size: 1.8rem;
}
img {
  margin: 3rem 1rem 0 1rem;
  width: 200px;
  border-radius: 50%;
}
li {
  padding-left: 1.7rem;
  text-indent: -1.7rem;
}
.icon {
  padding-right: 0.4rem;
  position: relative;
  top: 0.3rem;
}
</style>
