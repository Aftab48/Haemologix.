"use client";

import Link from "next/link";
import Image from "next/image";

interface NavbarProps {
  activePage?: "features" | "impact" | "contact";
}

const Navbar = ({ activePage }: NavbarProps) => {
  const getLinkClassName = (page: string) => {
    const baseClasses =
      "hover:text-secondary transition-colors font-dm-sans font-medium";
    const isActive = activePage === page;
    return `${baseClasses} ${isActive ? "text-primary" : "text-text-da.rk"}`;
  };

  return (
    <header className="backdrop-blur-lg sticky top-4 mx-4 md:mx-8 lg:mx-16 z-50 border border-mist-green/40 rounded-2xl shadow-lg px-6 py-3 flex justify-between items-center glass-morphism">
      <div className="container mx-auto px-2 md:px-4 py-2 md:py-4 flex items-center justify-between gap-px rounded bg-transparent">
        <div className="flex items-center gap-2">
          <div className="w-12 h-12 rounded-full flex items-center justify-center bg-primary/10 border-2 border-primary animate-glow">
            <Image
              src="/logo.png"
              alt="Logo"
              width={48}
              height={48}
              className="rounded-full"
            />
          </div>
          <Link
            href={"/"}
            className="text-xl font-outfit font-bold text-primary"
          >
            HaemoLogix
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/#features" className={getLinkClassName("features")}>
            Features
          </Link>
          <Link href="/impact" className={getLinkClassName("impact")}>
            Impact
          </Link>
          <Link href="/contact" className={getLinkClassName("contact")}>
            Contact
          </Link>
          
        </nav>
       
      </div>
    </header>
  );
};

export default Navbar;
