import NavIcon from "./NavIcon";

export default function Navigation() {
  return (
    <nav className="w-[900px] h-[90px] fixed top-[45px] flex flex-row sm:justify-end sm:border-b-2 shadow-md z-10 border">
      <NavIcon
        filledIcon="/images/icons/home.svg"
        outlineIcon="/images/icons/home-outline.svg"
        pageName="Home"
        pathName="/"
      />
      <NavIcon
        filledIcon="/images/icons/person.svg"
        outlineIcon="/images/icons/person-outline.svg"
        pageName="About"
        pathName="/about"
      />
      <NavIcon
        filledIcon="/images/icons/navigate-circle.svg"
        outlineIcon="/images/icons/navigate-circle-outline.svg"
        pageName="Contact"
        pathName="/contact"
      />
    </nav>
  );
}
