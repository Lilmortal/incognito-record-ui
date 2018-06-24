import React from "react";
import { addLocaleData, IntlProvider } from "react-intl";
import localeEn from "react-intl/locale-data/en";
import localeZh from "react-intl/locale-data/zh";

addLocaleData([...localeEn, ...localeZh]);

const messages = {
  en: "en",
  zh: "zh"
};

// language without region code
const language = window.navigator.language.split(/[-_]/)[0];

const Intl = ({ children }) => (
  <IntlProvider locale={language} messages={messages[language]}>
    {children}
  </IntlProvider>
);

export default Intl;
