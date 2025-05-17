"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// Client component for navigation with state
export default function ClientNav() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const [menuHeight, setMenuHeight] = useState(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Calculate and store the height of the menu when it changes
  useEffect(() => {
    if (isOpen && menuRef.current) {
      setMenuHeight(menuRef.current.scrollHeight);
    } else {
      setMenuHeight(0);
    }
  }, [isOpen]);

  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 4vw",
        marginBottom: "3rem",
        height: "56px",
        minHeight: "56px",
        color: "#555555",
        backgroundColor: "var(--secondary)",
        position: "relative",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            color: "#555555",
          }}
        >
          <Image
            src="/codex_banner.png"
            alt="Logo"
            width={120}
            height={40}
            style={{ objectFit: "contain" }}
            priority
          />
        </Link>
      </div>

      {/* Hamburger menu icon - visible on mobile */}
      <button
        className="md:hidden flex flex-col justify-center items-center p-2"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-0.5 bg-[var(--primary)] mb-1.5 transition-transform ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-[var(--primary)] mb-1.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-[var(--primary)] transition-transform ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>

      {/* Desktop navigation - hidden on mobile */}
      <ul
        className="hidden md:flex"
        style={{
          gap: "2.0rem",
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
      >
        <li>
          <Link
            href="/"
            style={{ color: "var(--primary)", fontSize: "0.875rem" }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            style={{ color: "var(--primary)", fontSize: "0.875rem" }}
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            style={{ color: "var(--primary)", fontSize: "0.875rem" }}
          >
            Contact Us
          </Link>
        </li>
        <li>
          <Link
            href="/services"
            style={{ color: "var(--primary)", fontSize: "0.875rem" }}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            href="/benefits"
            style={{ color: "var(--primary)", fontSize: "0.875rem" }}
          >
            Benefits
          </Link>
        </li>
      </ul>

      {/* Mobile menu dropdown - animated */}
      <div
        ref={menuRef}
        className="absolute top-[56px] left-0 right-0 bg-[var(--secondary)] z-50 border-b border-[#e5e5e5] md:hidden overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: `${menuHeight}px`,
          opacity: isOpen ? 1 : 0,
          visibility: menuHeight === 0 ? "hidden" : "visible",
          transformOrigin: "top",
          transform: isOpen ? "scaleY(1)" : "scaleY(0.95)",
          boxShadow: isOpen ? "0 4px 6px -1px rgba(0, 0, 0, 0.1)" : "none",
        }}
      >
        <ul className="flex flex-col py-2">
          <li className="py-2 px-4 hover:bg-[rgba(0,0,0,0.05)] transition-colors duration-200">
            <Link
              href="/"
              style={{
                color: "var(--primary)",
                fontSize: "0.875rem",
                display: "block",
              }}
            >
              Home
            </Link>
          </li>
          <div className="mx-4 h-[0.5px] bg-gray-200"></div>
          <li className="py-2 px-4 hover:bg-[rgba(0,0,0,0.05)] transition-colors duration-200">
            <Link
              href="/about"
              style={{
                color: "var(--primary)",
                fontSize: "0.875rem",
                display: "block",
              }}
            >
              About Us
            </Link>
          </li>
          <div className="mx-4 h-[0.5px] bg-gray-200"></div>
          <li className="py-2 px-4 hover:bg-[rgba(0,0,0,0.05)] transition-colors duration-200">
            <Link
              href="/contact"
              style={{
                color: "var(--primary)",
                fontSize: "0.875rem",
                display: "block",
              }}
            >
              Contact Us
            </Link>
          </li>
          <div className="mx-4 h-[0.5px] bg-gray-200"></div>
          <li className="py-2 px-4 hover:bg-[rgba(0,0,0,0.05)] transition-colors duration-200">
            <Link
              href="/services"
              style={{
                color: "var(--primary)",
                fontSize: "0.875rem",
                display: "block",
              }}
            >
              Services
            </Link>
          </li>
          <div className="mx-4 h-[0.5px] bg-gray-200"></div>
          <li className="py-2 px-4 hover:bg-[rgba(0,0,0,0.05)] transition-colors duration-200">
            <Link
              href="/benefits"
              style={{
                color: "var(--primary)",
                fontSize: "0.875rem",
                display: "block",
              }}
            >
              Benefits
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
