import { Grid } from "@mui/material";
import ContentContainer from "./components/ContentContainer/ContentContainer";
import CookiesBanner from "./components/CookiesBanner/CookiesBanner";
import Footer from "./components/Footer/Footer";
import ItemsBody from "./components/ItemsBody/ItemsBody";
import LanguageProvider from "./components/LanguageProvider/LanguageProvider";
import Panel from "./components/Panel/Panel";
import Topbar from "./components/TopBar/Topbar";

function App() {
  return (
    <Grid
      sx={{ width: "100%", overflow: "hidden", backgroundColor: "#f3f3f3" }}
    >
      <LanguageProvider>
        <Topbar />
        <ContentContainer>
          <CookiesBanner />
          <Panel />
          <ItemsBody />
        </ContentContainer>
        <Footer />
      </LanguageProvider>
    </Grid>
  );
}

export default App;
