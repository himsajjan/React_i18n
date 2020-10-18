import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import French from "../lang/fr.json";
import Arabic from "../lang/ar.json";
import English from "../lang/en.json";

export const Context = React.createContext();

const local = navigator.language.split(/[-_]/)[0];

const supportedMessages = {
  fr: French,
  en: English,
  ar: Arabic
};
const language = navigator.language.split(/[-_]/)[0];

const Wrapper = (props) => {
  const [locale, setLocale] = useState(language);

  const [selectedMessage, setMessages] = useState(supportedMessages[local]);

  function selectLanguage(e) {
    const newLocale = e.target.value;
    setLocale(newLocale);
    setMessages(supportedMessages[newLocale])
  }

  return (
    <Context.Provider value={{ locale, selectLanguage }}>
      <IntlProvider messages={selectedMessage} locale={locale}>
        {props.children}
      </IntlProvider>
    </Context.Provider>
  );
};

export default Wrapper;
