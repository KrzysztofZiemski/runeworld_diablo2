import { useCallback, useEffect, useState } from "react";
import ReactGA from "react-ga";
import { useDispatch, useSelector } from "react-redux";
import { setAgreeCookies } from "../store/appConfig/actions";
import { AllSettingsStoreSelector } from "../store/appConfig/selectors";

const enableGA = () => {
  if (!process.env.REACT_APP_GA) return;
  ReactGA.initialize(process.env.REACT_APP_GA);
  ReactGA.pageview(window.location.pathname);
};

export const useGA = () => {
  const dispatch = useDispatch();
  const setting = useSelector(AllSettingsStoreSelector);

  useEffect(() => {
    setting.agreeCookies && enableGA();
  }, [setting.agreeCookies]);

  const setEnable = useCallback((value: boolean) => {
    dispatch(setAgreeCookies(value));
  }, []);

  return [setting.agreeCookies, setEnable] as const;
};
