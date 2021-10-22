import { useSelector } from "react-redux";
import { AllSettingsStoreSelector } from "./store/appConfig/selectors";
import { IntlProvider } from "react-intl";
import { getMessages } from "./i18n/i18n";
import Panel from "./components/Panel/Panel";
import ItemsBody from "./components/ItemsBody/ItemsBody";
import Topbar from "./components/TopBar/Topbar";
import ContentContainer from "./components/ContentContainer/ContentContainer";

function App() {
  const settings = useSelector(AllSettingsStoreSelector);

  return (
    <div
      style={{ width: "100%", overflow: "hidden", backgroundColor: "#f3f3f3" }}
    >
      <IntlProvider
        messages={getMessages(settings.language)}
        locale={settings.language}
        defaultLocale="EN"
      >
        <Topbar />
        <ContentContainer>
          <Panel />
          <ItemsBody />
        </ContentContainer>
      </IntlProvider>
    </div>
  );
}

export default App;
