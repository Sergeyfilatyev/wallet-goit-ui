import {
  NavigationBox,
  NavigationHome,
  NavigationStatistics,
  NavigationCurrency,
} from "./NavigationStyled";

import Media from "react-media";

export const Navigation = () => {
  return (
    <>
      <Media
        queries={{
          s: "(max-width: 767px)",
        }}
      >
        {(matches) => (
          <NavigationBox>
            <NavigationHome linkName="Home" />
            <NavigationStatistics linkName="Statistics" />
            {matches.s && <NavigationCurrency linkName="Currency" />}
          </NavigationBox>
        )}
      </Media>
    </>
  );
};
