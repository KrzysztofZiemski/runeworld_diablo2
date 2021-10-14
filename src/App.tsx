import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { AllSettingsStoreSelector } from "./store/appConfig/selectors";
import { IntlProvider } from "react-intl";
import { getMessages } from "./i18n/i18n";
import Panel from "./components/Panel/Panel";
import ItemsTable from "./components/ItemsTable/ItemsTable";
import Topbar from "./components/TopBar/Topbar";
import ContentContainer from "./components/ContentContainer/ContentContainer";

function App() {
  const settings = useSelector(AllSettingsStoreSelector);
  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <IntlProvider
        messages={getMessages(settings.language)}
        locale={settings.language}
        defaultLocale="pl"
      >
        <Topbar />
        <ContentContainer>
          <Panel />
          <ItemsTable />
        </ContentContainer>
      </IntlProvider>
    </div>
  );
}

export default App;
