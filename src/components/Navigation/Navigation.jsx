import {
  NavigationBox,
  NavigationHome,
  NavigationStatistics,
} from "./NavigationStyled";

export const Navigation = () => {
  return (
    <>
      <NavigationBox>
        <NavigationHome linkName="Home" />
        <NavigationStatistics linkName="Statistics" />
      </NavigationBox>
    </>
  );
};
