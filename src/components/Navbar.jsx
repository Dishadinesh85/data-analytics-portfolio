function Navbar() {

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur text-white">

      <div className="max-w-6xl mx-auto flex justify-between items-center p-5">

        <h1 className="text-2xl font-bold text-blue-400">
          Disha.Dev
        </h1>


        <div className="space-x-6 hidden md:block">

          <a href="#home" className="hover:text-blue-400">
            Home
          </a>

          <a href="#about" className="hover:text-blue-400">
            About
          </a>

          <a href="#projects" className="hover:text-blue-400">
            Projects
          </a>

          <a href="#contact" className="hover:text-blue-400">
            Contact
          </a>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;