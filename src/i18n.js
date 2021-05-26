import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
    'en': {
        home:'HOME',
        aboutnav: 'ABOUT',
        references: 'REFERENCES',
        calculator: 'CALCULATOR',
        contact: 'CONTACT',
        tryOut: 'Try out the calculator',
        quality: 'Quality, reliability and advantageous solution',
        completeSol: 'COMPLETE SERVICE FOR EXHIBITIONS AND FAIRS',
        about: 'ABOUT',
        aboutText: 'RK Expo was established by splitting from Veletržní servis s.r.o. which was engaged in the exhibition for over 20 years. The company offer complete services for trade fairs and exhibitions. We provide realisation across Europe. We approach every order individually so we can fulfil every customer’s imagination.',
        aboutTextS: 'We build from the smallest to the largest sizes of the booths. The focus is set equally on local clients as the international. ',
        exhibition: '50+  EXHIBITION BOOTHS',
        customer: '100%  CUSTOMER SATISFACTION',
        country: '5+  COUNTRIES OF IMPLEMENTATION',
        homeRefText: 'We build from the smallest to the largest sizes of the booths. The focus is set equally on local clients as the international.',
        calcQuestion: 'Would you like to know the average price of your booth? Try out our calculator!',
        calculateMyPrice: 'CALCULATE MY PRICE',
        difference: 'Looking to make a difference at your next exhibition ? Let’s talk!',
        send: 'SEND',
        newsletter: 'Sign up for the newsletters in RK Expo',
        enterEmail: 'Enter email adress',
        signUp: 'SIGN UP',

     //Calculator

        size: 'Size',
        material: 'Material',
        graphics: 'Graphics',
        lightening: 'Lightening',
        additional: 'Additional feature',
        matOne:'Wood',
        matTwo: 'Glass',
        matThree: 'Metal',
        matFour: 'Plastic',
        poster: 'Poster',
        lights: 'Lights',
        table: 'Table',
        chair: 'Chair',
        flowers: 'Fake flowers',
        rear: 'Rear',
        mannequin: 'Mannequin',
        avgPrice:'Average price of your booth',
        note: ' Note that this price is just informative and the final price could differ.',
        collab: 'We are looking forward for collaboration with you',




    },
    'cz': {
        home:'DOMŮ',
        aboutnav: 'O NÁS',
        references: 'REFERENCE',
        calculator: 'KALKULAČKA',
        contact: 'KONTAKT',
        tryOut: 'Vyzkoušet kalkulačku',
        quality: 'Kvalita, spolehlivost a výhodná řešení',
        completeSol: 'KOMPLETNÍ SERVIS PRO VÝSTAVY A VELETRHY',
        about: 'O NÁS',
        aboutText: 'RK Expo vznikla rozdělením od firmy Veletržní servis s.r.o. která se výstavě věnovala více než 20 let. Společnost nabízí kompletní služby pro veletrhy a výstavy. Realizujeme po celé Evropě. Ke každé objednávce přistupujeme individuálně, abychom mohli naplnit představivost každého zákazníka.',
        aboutTextS: 'Neváhejte nás kontaktovat, klademe důraz na kvalitu, spolehlivost a výhodné řešení.',
        exhibition: '50+ VÝSTAVNÍCH STÁNKŮ',
        customer: '100% SPOKOJENOST ZÁKAZNÍKŮ',
        country: '5+ ZEMÍ IMPLEMENTACE',
        homeRefText: 'Stavíme od nejmenších po největší velikosti stánků. Důraz je kladen stejně na místní klienty jako na mezinárodní.',
        calcQuestion: 'Chtěli by jste vědět průměrnou cenu vašeho stánku? Vyzkoušejte naší kalkulačku!',
        calculateMyPrice: 'SPOČÍTAT CENU',
        difference: 'Chcete na své příští výstavě něco změnit? Kontaktujte nás!',
        send: 'ODESLAT,',
        newsletter: 'Přihlaste se k odběru novinek v RK Expo',
        enterEmail: 'Zadejte email adresu',
        signUp: 'ODEBÍRAT',

     //Calculator

        size: 'Velikost',
        material: 'Materiál',
        graphics: 'Grafika',
        lightening: 'Osvětlení',
        additional: 'Dodatek',
        matOne:'Dřevo',
        matTwo: 'Sklo',
        matThree: 'Kov',
        matFour: 'Plast',
        poster: 'Plakát',
        lights: 'Světla',
        table: 'Stůl',
        chair: 'Židle',
        flowers: 'Umělé květiny',
        rear: 'Zázemí',
        mannequin: 'Manekýn',
        avgPrice:'Průměrná cena stánku',
        note: 'Tato cena je pouze informativní a konečná cena se může lišit.',
        collab: 'Těšíme se na vzájemnou spolupráci.',
    },

};

export default new VueI18n({
    locale: 'en', // set locale
    fallbackLocale: 'cz', // set fallback locale
    messages, // set locale messages
  });
  