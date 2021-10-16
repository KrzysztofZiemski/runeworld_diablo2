import { Language } from "../types/language";
import pl from "./pl.json";
import en from "./en.json";

const i18n = {
  [Language.PL]: pl,
  [Language.EN]: en,
};

export const flattenMessages = (nestedMessages: any, prefix = "") => {
  if (nestedMessages === null) {
    return {};
  }
  return Object.keys(nestedMessages).reduce((messages, key) => {
    const value = nestedMessages[key];
    const prefixedKey = prefix ? `${prefix}.${key}` : key;

    if (typeof value === "string") {
      Object.assign(messages, { [prefixedKey]: value });
    } else {
      Object.assign(messages, flattenMessages(value, prefixedKey));
    }

    return messages;
  }, {});
};

export const getMessages = (language: Language) => {
  const file = i18n[language] || pl;
  return flattenMessages(file);
};
