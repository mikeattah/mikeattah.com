import NavIcon from "./NavIcon.js";

export default function NavBar() {
  return (
    <div className="w-full h-full flex flex-row sm:justify-end sm:border-b-2 shadow-md">
      <NavIcon
        pathName="/"
        pageName="Home"
        outlineIcon="/home-outline.svg"
        filledIcon="/home.svg"
      />
      <NavIcon
        pathName="/about"
        pageName="About"
        outlineIcon="/person-outline.svg"
        filledIcon="/person.svg"
      />
      <NavIcon
        pathName="/projects"
        pageName="Projects"
        outlineIcon="/bag-handle-outline.svg"
        filledIcon="/bag-handle.svg"
      />
      <NavIcon
        pathName="/contact"
        pageName="Contact"
        outlineIcon="/navigate-circle-outline.svg"
        filledIcon="/navigate-circle.svg"
      />
    </div>
  );
}
