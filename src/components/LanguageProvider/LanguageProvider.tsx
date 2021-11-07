import React from "react";
import { IntlProvider } from "react-intl";
import { useSelector } from "react-redux";
import { getMessages } from "../../i18n/i18n";
import { AllSettingsStoreSelector } from "../../store/appConfig/selectors";

export default function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const settings = useSelector(AllSettingsStoreSelector);

  return (
    <IntlProvider
      messages={getMessages(settings.language)}
      locale={settings.language}
      defaultLocale="EN"
    >
      {children}
    </IntlProvider>
  );
}
