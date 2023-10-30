import Link from "next/link";
import ThemeSwitcher from "@/Components/providers/ThemeSwitcher";
import SearchBar from "@/Components/SeachBar";
3 / 0.4;
const Navbar = () => {
  return (
    <div
      className="h-12 w-full flex items-center p-4 justify-between gap-4 bg-[#0074e1] text-white md:h-20"
      style={{ position: "sticky", top: "0", left: "0", right: "0" }}
    >
      {/* Logo */}
      <Link
        href="/"
        className="text-bold text-xl md:text-2xl cursor-pointer w-80 px-5"
      >
        GrowwStonks ↗
      </Link>
      <div className="flex justify-end items-center gap-4 grow">
        {/* Search bar */}
        <SearchBar />
        {/* Toggle theme*/}
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Navbar;
