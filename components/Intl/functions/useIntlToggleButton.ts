import { useI18n } from "vue-i18n";
import { LocaleEnum } from "~~/lang";

const useIntlToggleButton = () => {
  const { locale } = useI18n();
  const { toggle, handleToggle } = useToggle(false, (t) => {
    if (t) locale.value = LocaleEnum.en;
    else {
      locale.value = LocaleEnum.zh;
    }
  });

  const intlBtnTitle = computed(() =>
    locale.value === LocaleEnum.en ? LocaleEnum.zh : LocaleEnum.en
  );

  return {
    locale: intlBtnTitle,
    handleToggle,
  };
};

export default useIntlToggleButton;
