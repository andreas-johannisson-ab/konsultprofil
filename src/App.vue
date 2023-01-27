<script setup>
import Header from './components/Header.vue'
import Experience from './components/Experience.vue'
import Education from './components/Education.vue'
import Contact from './components/Contact.vue'
import Keywords from './components/Keywords.vue'
</script>

<template>
  <div>
    <main>
      <Header />
      <Experience />
      <Education />
    </main>
    <aside>
      <Contact />
      <Keywords />
    </aside>
  </div>
</template>

<style scoped>
div {
  display: flex;
  justify-content: space-between;
  margin: 2rem;
  column-gap: 5rem;
}
</style>
