import GA4React from "ga-4-react";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAgreeCookies } from "../store/appConfig/actions";
import { AllSettingsStoreSelector } from "../store/appConfig/selectors";

const enableGA = async () => {
  // console.log(process.env.REACT_APP_GA);
  // if (!process.env.REACT_APP_GA) return;
  // ReactGA.initialize(process.env.REACT_APP_GA);
  // ReactGA.pageview(window.location.pathname);
  if (!process.env.REACT_APP_GA) return;

  const ga4react = new GA4React(
    process.env.REACT_APP_GA,
    {
      /* ga custom config, optional */
    },
    [
      /* additional code, optional */
    ],
    5000 /* timeout, optional, defaults is 5000 */
    // options /* { nonce: ['first-script-is-async','second-script'] } */
  );

  ga4react.initialize().then(
    (ga4) => {
      ga4.pageview("path");
      ga4.gtag("event", "pageview", window.location.pathname); // or your custom gtag event
    },
    (err) => {
      console.error("ga4react initialize error", err);
    }
  );
};

export const useGA = () => {
  const dispatch = useDispatch();
  const setting = useSelector(AllSettingsStoreSelector);

  useEffect(() => {
    setting.agreeCookies && enableGA();
  }, [setting.agreeCookies]);

  const setEnable = useCallback(
    (value: boolean) => {
      dispatch(setAgreeCookies(value));
    },
    [dispatch]
  );

  return [setting.agreeCookies, setEnable] as const;
};
