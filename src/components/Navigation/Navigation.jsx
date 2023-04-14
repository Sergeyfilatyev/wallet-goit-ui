import { useTranslation } from "react-i18next";
import {
  NavigationBox,
  NavigationHome,
  NavigationStatistics,
  NavigationCurrency,
} from "./NavigationStyled";

import Media from "react-media";

export const Navigation = () => {
  const { t } = useTranslation();
  return (
    <>
      <Media
        queries={{
          s: "(max-width: 767px)",
        }}
      >
        {(matches) => (
          <NavigationBox>
            <NavigationHome linkName={t("home")} />
            <NavigationStatistics linkName={t("stats")} />
            {matches.s && <NavigationCurrency linkName="Currency" />}
          </NavigationBox>
        )}
      </Media>
    </>
  );
};
