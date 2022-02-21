import i18n from "~~/lang";

export default defineNuxtPlugin((nxApp) => {
  nxApp.vueApp.use(i18n);
});
