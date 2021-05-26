import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
    'en': {
        about: 'ABOUT',
        aboutText: 'RK Expo was established by splitting from Veletržní servis s.r.o. which was engaged in the exhibition for over 20 years. The company offer complete services for trade fairs and exhibitions. We provide realisation across Europe. We approach every order individually so we can fulfil every customer’s imagination.',
    },
    'cz': {
        about: 'ABOUT',
        aboutText:'Naše společnost RK EXPO s.r.o. vznikla odštěpením od firmy Veletržní servis s.r.o., která se zabývá výstavnictvím přes 20 let.Nabízíme kompletní služby i servis pro veletrhy a výstavy. Provádíme realizace výstavních expozic po celé Evropě. Přistupujeme ke každé zakázce individuálně a expozici Vám ušijeme přímo na míru.Neváhejte nás oslovit. Klademe důraz na kvalitu, spolehlivost a výhodné řešení.'
    }

};

export default new VueI18n({
    locale: 'en', // set locale
    fallbackLocale: 'cz', // set fallback locale
    messages, // set locale messages
  });
  