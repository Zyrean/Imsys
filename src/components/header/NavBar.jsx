import NavLink from "./NavLink";

function NavBar() {
  return (
    <nav>
      <ul className="flex gap-4">
        <NavLink to={"/herausforderungen"}>Ihre herausforderungen</NavLink>
        <NavLink to={"/lösungen"}>Unsere Lösungen</NavLink>
        <NavLink to={"/wissen&support"}>Wissen & Support</NavLink>
        <NavLink to={"/überUns"}>Über uns</NavLink>
      </ul>
    </nav>
  );
}

export default NavBar;
