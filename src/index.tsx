import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store";
import CustomThemeProvider from "./styles/theme";

import "./styles/fonts.css";
import "./styles/normalize.css";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CustomThemeProvider>
        <App />
      </CustomThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorkerRegistration.register();
reportWebVitals();
