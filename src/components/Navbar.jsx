import React, { useState, useRef, useEffect } from "react";

const menuData = [
  { title: "Product", items: ["Overview", "Features", "Integrations", "Security"] },
  { title: "Solutions", items: ["For Teams", "For Individuals", "Enterprise"] },
  { title: "Resources", items: ["Docs", "Blog", "Community"] },
  { title: "Pricing", items: ["Plans", "FAQ"] },
];

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <nav ref={navRef} className="bg-white bo
    rder-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p>Home</p>

        </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <d iv className="flex items-center justify-between h-16">
          {/* Left: Logo */}
          <div className="flex items-center">
            <a href="/" className="text-xl font-bold text-gray-900">
              Logo
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuData.map((m) => (
              <div key={m.title} className="relative">
                <button
                  onMouseEnter={() => setOpenMenu(m.title)}
                  onMouseLeave={() => setOpenMenu(null)}
                  className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 focus:outline-none"
                >
                  <span>{m.title}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div
                  onMouseEnter={() => setOpenMenu(m.title)}
                  onMouseLeave={() => setOpenMenu(null)}
                  className={`absolute z-20 mt-2 w-48 bg-white shadow-lg rounded-md ${openMenu === m.title ? "block" : "hidden"}`}
                >
                  <div className="py-1">
                    {m.items.map((it) => (
                      <a key={it} href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        {it}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Right-most: Auth Buttons */}
            <div className="flex items-center space-x-3">
              <button className="text-gray-700 hover:text-gray-900">Log in</button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Sign up</button>
            </div>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </d>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${mobileOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {menuData.map((m) => (
            <div key={m.title} className="border-b">
              <button
                onClick={() => setOpenMenu(openMenu === m.title ? null : m.title)}
                className="w-full flex justify-between items-center px-3 py-2 text-left text-gray-700"
              >
                <span>{m.title}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div className={`${openMenu === m.title ? "block" : "hidden"} pl-4 pb-2`}>
                {m.items.map((it) => (
                  <a key={it} href="#" className="block px-2 py-1 text-gray-600 hover:bg-gray-100 rounded">
                    {it}
                  </a>
                ))}
              </div>
            </div>
          ))}

          <div className="px-3 py-2 flex space-x-2">
            <button className="text-gray-700">Log in</button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md">Sign up</button>
          </div>
        </div>
      </div>
    </nav>
  );
}