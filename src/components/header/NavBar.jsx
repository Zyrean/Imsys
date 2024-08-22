import NavLink from "./NavLink";

function NavBar({ type, className, onToggleMenu }) {
  if (type === "mobile") {
    return (
      <nav className={className}>
        <ul className="flex flex-col gap-2">
          <NavLink
            onToggleMenu={onToggleMenu}
            to={"/herausforderungen"}
            type="mobile"
          >
            Ihre herausforderungen
          </NavLink>
          <NavLink onToggleMenu={onToggleMenu} to={"/loesungen"} type="mobile">
            Unsere Lösungen
          </NavLink>
          <NavLink onToggleMenu={onToggleMenu} to={"/blog"} type="mobile">
            Wissen & Support
          </NavLink>
          <NavLink onToggleMenu={onToggleMenu} to={"/ueberUns"} type="mobile">
            Über uns
          </NavLink>
        </ul>
      </nav>
    );
  }

  return (
    <nav>
      <ul className="flex gap-4">
        <NavLink
          to={"/herausforderungen"}
          className="hover-shadow-bottom py-6 hover:text-orange"
        >
          Ihre herausforderungen
        </NavLink>
        <NavLink
          to={"/loesungen"}
          className="hover-shadow-bottom py-6 hover:text-orange"
        >
          Unsere Lösungen
        </NavLink>
        <NavLink
          to={"/blog"}
          className="hover-shadow-bottom py-6 hover:text-orange"
        >
          Wissen & Support
        </NavLink>
        <NavLink
          to={"/ueberUns"}
          className="hover-shadow-bottom py-6 hover:text-orange"
        >
          Über uns
        </NavLink>
      </ul>
    </nav>
  );
}

export default NavBar;
