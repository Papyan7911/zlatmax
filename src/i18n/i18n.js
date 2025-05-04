import i18n from 'i18next';

import { initReactI18next } from 'react-i18next';

import LanguageDetector from 'i18next-browser-languagedetector';



import translationEN from '../locales/English/translation.json';
import translationHY from '../locales/Armenian/translation.json'

const resources = {

 en: { translation: translationEN },

 hy: { translation: translationHY }

};



i18n

 .use(LanguageDetector) // ընտրում է լեզուն ըստ դիտարկիչի կամ տեղային կարգավորումների

 .use(initReactI18next)

 .init({

 resources,

 fallbackLng: en , // Եթե լեզուն չի գտնվում՝ օգտագործի անգլերեն

 interpolation: {

 escapeValue: false 

 }

 });



export default i18n