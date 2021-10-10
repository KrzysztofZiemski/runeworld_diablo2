import { Language } from "../types/language";
import pl from "./pl.json";
import en from "./en.json";

const i18n = {
  [Language.PL]: pl,
  [Language.EN]: en,
};

export const getMessages = (language: Language) => {
  return pl;
};
