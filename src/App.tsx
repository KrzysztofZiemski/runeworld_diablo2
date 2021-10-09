import React from "react";
import { useSelector } from "react-redux";
import { AllSettingsStoreSelector } from "./store/app/selectors";
import { IntlProvider } from "react-intl";
import i18n, { getMessages } from "./i18n";

function App() {
  const settings = useSelector(AllSettingsStoreSelector);
  return (
    <IntlProvider
      messages={getMessages(settings.language)}
      locale={settings.language}
      defaultLocale="pl"
    >
      app
    </IntlProvider>
  );
}

export default App;
