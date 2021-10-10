import React from "react";
import { useSelector } from "react-redux";
import { AllSettingsStoreSelector } from "./store/appConfig/selectors";
import { IntlProvider } from "react-intl";
import { getMessages } from "./i18n";
import Panel from "./components/Panel";

function App() {
  const settings = useSelector(AllSettingsStoreSelector);
  return (
    <IntlProvider
      messages={getMessages(settings.language)}
      locale={settings.language}
      defaultLocale="pl"
    >
      <Panel />
    </IntlProvider>
  );
}

export default App;
