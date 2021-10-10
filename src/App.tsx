import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { AllSettingsStoreSelector } from "./store/appConfig/selectors";
import { IntlProvider } from "react-intl";
import { getMessages } from "./i18n";
import Panel from "./components/Panel";
import { Rune } from "./types/rune";
import ItemsTable from "./components/ItemsTable";

function App() {
  const settings = useSelector(AllSettingsStoreSelector);
  return (
    <IntlProvider
      messages={getMessages(settings.language)}
      locale={settings.language}
      defaultLocale="pl"
    >
      <Panel />
      <ItemsTable />
    </IntlProvider>
  );
}

export default App;
