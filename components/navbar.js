import NavIcon from "./NavIcon.js";

export default function NavBar() {
  return (
    <div className="w-full h-full flex flex-row sm:justify-end sm:border-b-2 shadow-md">
      <NavIcon
        filledIcon="/home.svg"
        outlineIcon="/home-outline.svg"
        pageName="Home"
        pathName="/"
      />
      <NavIcon
        filledIcon="/person.svg"
        outlineIcon="/person-outline.svg"
        pageName="About"
        pathName="/about"
      />
      <NavIcon
        filledIcon="/bag-handle.svg"
        outlineIcon="/bag-handle-outline.svg"
        pageName="Projects"
        pathName="/projects"
      />
      <NavIcon
        filledIcon="/navigate-circle.svg"
        outlineIcon="/navigate-circle-outline.svg"
        pageName="Contact"
        pathName="/contact"
      />
    </div>
  );
}
