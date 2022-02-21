import { createI18n } from "vue-i18n";

export enum LocaleEnum {
  "zh" = "zh",
  "en" = "en",
}

const i18n = createI18n({
  locale: LocaleEnum.zh,
  message: {},
});

export default i18n;
