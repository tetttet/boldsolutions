"use client";

import Link from "next/link";
import Logo from "./logo";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-xs">
          {/* Logo */}
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-4 text-sm font-medium text-gray-800">
            <li>
              <Link
                href="/about"
                className="px-4 py-2 rounded-xl hover:bg-blue-50 transition-colors duration-200"
              >
                Про нас
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="px-4 py-2 rounded-xl hover:bg-blue-50 transition-colors duration-200"
              >
                Сервисы
              </Link>
            </li>
            <li>
              <Link
                href="/contacts"
                className="px-4 py-2 rounded-xl hover:bg-blue-50 transition-colors duration-200"
              >
                Контакты
              </Link>
            </li>
          </ul>

          {/* Mobile burger icon */}
          <button
            className="md:hidden z-40 p-2 rounded-lg hover:bg-gray-100 transition"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div
            className={clsx(
              "md:hidden fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-30 transform transition-transform duration-300 ease-in-out",
              menuOpen ? "translate-x-0" : "translate-x-full"
            )}
          >
            <div className="bg-white p-5 pt-16 flex flex-col gap-4 text-gray-800">
              <Link
                href="/about"
                onClick={toggleMenu}
                className="text-lg hover:text-blue-600"
              >
                Про нас
              </Link>
              <Link
                href="/services"
                onClick={toggleMenu}
                className="text-lg hover:text-blue-600"
              >
                Сервисы
              </Link>
              <Link
                href="/contacts"
                onClick={toggleMenu}
                className="text-lg hover:text-blue-600"
              >
                Контакты
              </Link>
            </div>
          </div>

          {/* Overlay when menu is open */}
          {menuOpen && (
            <div
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-20"
              onClick={toggleMenu}
            />
          )}
        </div>
      </div>
    </header>
  );
}
