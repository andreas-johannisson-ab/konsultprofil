import { createApp } from 'vue'
import { createI18n } from "vue-i18n";
import App from './App.vue'
import sv from './locales/sv.json'
import './assets/main.css'

const i18n = createI18n({
  locale: 'sv',
  fallbackLocale: 'sv',
  messages: { sv },
});

var app = createApp(App);
app.use(i18n);
app.mount('#app');
