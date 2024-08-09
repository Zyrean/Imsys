import NavLink from "./NavLink";

function NavBar() {
  return (
    <nav>
      <ul className="flex gap-4">
        <NavLink
          to={"/herausforderungen"}
          className="hover-shadow-bottom py-6 hover:text-blue"
        >
          Ihre herausforderungen
        </NavLink>
        <NavLink
          to={"/loesungen"}
          className="hover-shadow-bottom py-6 hover:text-blue"
        >
          Unsere Lösungen
        </NavLink>
        <NavLink
          to={"/blog"}
          className="hover-shadow-bottom py-6 hover:text-blue"
        >
          Wissen & Support
        </NavLink>
        <NavLink
          to={"/ueberUns"}
          className="hover-shadow-bottom py-6 hover:text-blue"
        >
          Über uns
        </NavLink>
      </ul>
    </nav>
  );
}

export default NavBar;
