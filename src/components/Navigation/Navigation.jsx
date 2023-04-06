import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <>
      <nav>
        <NavLink to="/">
          <IconButton
            edge="end"
            color="#ffffff"
            aria-label="logout"
            sx={{ mr: 2 }}
          >
            <HomeIcon sx={{ fontSize: 30, color: "#FFFFFF" }} />
          </IconButton>
        </NavLink>
      </nav>
    </>
  );
};
