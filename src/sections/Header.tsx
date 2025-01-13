import Link from "next/link";
export const Header = () => {
  return (
    <div className="flex justify-center relative top-3  ">
      <nav className="flex gap-1 p-0.5 border border-white/20 rounded-full bg-white/15 ">
        <Link className="navlinks" href="/">Home</Link>
        <Link className="navlinks"  href="/">Projects</Link>
        <Link className="navlinks"  href="/">About</Link>
        <Link className="navlinks bg-white text-gray-800 hover:bg-white hover:text-gray-800 "  href="/">Contacts</Link>
      </nav>
    </div>
  );
};
// text-white text-lg transition-transform duration-300 hover:scale-110 hover:text-blue-400