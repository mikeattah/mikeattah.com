import NavIcon from "../NavIcon/NavIcon";

function NavBar() {
  return (
    <nav className="w-full h-[90px] flex flex-row justify-center align-center sm:border-b-2 shadow-md z-10 border">
      <div className="">
        <span className="">mikeattah[h]</span>
      </div>
      <div className="">
        <NavIcon pageName="Home" pathName="/" />
        <NavIcon pageName="About" pathName="/about" />
        <NavIcon pageName="Projects" pathName="/projects" />
        <NavIcon pageName="Contact" pathName="/contact" />
      </div>
    </nav>
  );
}

export default NavBar;
