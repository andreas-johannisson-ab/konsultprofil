<template>
  <h1 class="gradient">{{ $t("name") }}</h1>
  <h2>{{ $t('title') }}</h2>
  <p>Som person är jag, som är skriven i VueJS</p>
  <p>Källkod för konsultprofilen:<br><a class="gradient" target="_blank" :href="$t('github')">{{ $t('github') }}</a></p>
</template>

<style scoped>
h2 {
  margin: 0 0 2rem 0;
}
p {
  margin: 0.5rem 0;
}
a {
  font-weight: bold;
}
</style>
