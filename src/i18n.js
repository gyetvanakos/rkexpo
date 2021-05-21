import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
    'en': {
        welcomeMsg: 'Menu'
    },
    'cz': {
        welcomeMsg: 'Szia Lajos'
    }
};

export default new VueI18n({
    locale: 'en', // set locale
    fallbackLocale: 'cz', // set fallback locale
    messages, // set locale messages
  });
  