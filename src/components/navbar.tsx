"use client";

import Link from "next/link";

export default function NavButton() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Link href="/" onClick={scrollToTop} className="text-xl font-bold text-black hover:text-sage-500 transition-colors">
      Feed Forward
    </Link>
  );
}
