"use client"

import { Avatar, Button, Input } from "@mantine/core"
import { SearchIcon, MenuIcon, XIcon, CircleUser, User, User2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Box, Portal, Text } from '@mantine/core';
import { useHeadroom } from '@mantine/hooks';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const isAuthenticated = true
    const pinned = useHeadroom({ fixedAt: 120 });

  const navItems = [
    { name: "Home", href: "/"  ,className: "max-md:order-2" },
    { name: "Library", href: "/library", className: "max-md:order-3" },
    {
      name: (
        <Input
        className="max-md:order-1"
          placeholder="Search.."
          radius={"lg"}
          leftSection={<SearchIcon size={16} />}
        />
      ),
      href: "",
    },
    { name: "My Readings", href: "/my-reads", className: "max-md:order-4" },
    { name: "Bookmarks", href: "/bookmarks", className: "max-md:order-5" },
  ]

  return (
    <>
     <Portal>
        <Box
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            padding: 'var(--mantine-spacing-xs)',
            height: 60,
            zIndex: 1000000,
            transform: `translate3d(0, ${pinned ? 0 : '-110px'}, 0)`,
            transition: 'transform 400ms ease',
            backgroundColor: 'var(--mantine-color-body)',
            className: "w-full bg-white/45 rounded-lg px-4 sm:px-6 py-4 z-50"
          }}
        >
    {/* <header className="w-full bg-white/45 rounded-lg px-4 sm:px-6 py-4 z-50"> */}
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-1">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#b287f89f] rounded-full flex items-center justify-center hover:scale-110 hover:rotate-12 transition-all duration-300 ease-out cursor-pointer">
            <Image src={"/logo.png"} alt="DigiLibrary-logo" height={50} width={50} />
          </div>
          <span className="text-lg sm:text-xl font-medium text-indigo-700 transition-colors duration-300 cursor-pointer">
            DigiLibrary
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-black">
          {navItems.map((item, index) => (
            <Link key={index} className={item.className} href={item.href}>
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right side actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {isAuthenticated ? (
            <div className="flex items-center gap-2 sm:gap-3">
              <Button
                variant="outline"
                color="violet"
                radius={"xl"}
                className="hidden md:block"
                leftSection={<User2 size={16} />}
              >
                My Store
              </Button>
            </div>
          ) : (
            <Button
              variant="filled"
              color="violet"
              radius={"lg"}
              className="hidden md:block"
            >
              Sign In
            </Button>
          )}

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-md text-black hover:bg-purple-100"
          >
            {menuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white w-full h-full rounded-lg shadow-md mt-3  py-4 px-3 flex flex-col gap-4 text-black">
            <div className="flex flex-col gap-4">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`hover:text-purple-600 transition-colors duration-300 ${item.className}`}
            >
              {item.name}
            </Link>
          ))}
          </div>
          {isAuthenticated ? (
            <Button variant="outline" color="violet" radius="lg" fullWidth>
              Upload
            </Button>
          ) : (
            <Button variant="filled" color="violet" radius="lg" fullWidth>
              Sign In
            </Button>
          )}
          <div className="flex-1 w-full h-full"></div>
        </div>
      )}
    {/* </header> */}
        </Box>
      </Portal>
    </>
  )
}











// bolt Ai:


// "use client"
// import React, { useState } from 'react';
// import { Search, ShoppingCart, User, Upload, Menu, X } from 'lucide-react';

// const Header: React.FC = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <header className="bg-white shadow-lg sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <div className="flex items-center space-x-2">
//             <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-orange-500 rounded-lg flex items-center justify-center">
//               <span className="text-white font-bold text-sm">B</span>
//             </div>
//             <span className="text-xl font-bold text-gray-900">BookVault</span>
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center space-x-8">
//             <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Browse</a>
//             <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Free Books</a>
//             <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Premium</a>
//             <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Categories</a>
//           </nav>

//           {/* Search Bar */}
//           <div className="hidden md:flex flex-1 max-w-lg mx-8">
//             <div className="relative w-full">
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
//               <input
//                 type="text"
//                 placeholder="Search books, authors, topics..."
//                 className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               />
//             </div>
//           </div>

//           {/* Action Buttons */}
//           <div className="hidden md:flex items-center space-x-4">
//             <button className="flex items-center space-x-1 px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">
//               <Upload className="w-4 h-4" />
//               <span className="text-sm font-medium">Upload</span>
//             </button>
//             <button className="p-2 text-gray-700 hover:text-blue-600 transition-colors">
//               <User className="w-5 h-5" />
//             </button>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className="md:hidden p-2 text-gray-700"
//           >
//             {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="md:hidden py-4 border-t border-gray-200">
//             <div className="flex flex-col space-y-4">
//               <div className="relative">
//                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
//                 <input
//                   type="text"
//                   placeholder="Search books..."
//                   className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 />
//               </div>
//               <nav className="flex flex-col space-y-2">
//                 <a href="#" className="text-gray-700 hover:text-blue-600 font-medium py-2">Browse</a>
//                 <a href="#" className="text-gray-700 hover:text-blue-600 font-medium py-2">Free Books</a>
//                 <a href="#" className="text-gray-700 hover:text-blue-600 font-medium py-2">Premium</a>
//                 <a href="#" className="text-gray-700 hover:text-blue-600 font-medium py-2">Categories</a>
//               </nav>
//               <div className="flex items-center justify-between pt-4 border-t border-gray-200">
//                 <button className="flex items-center space-x-1 text-gray-700">
//                   <Upload className="w-4 h-4" />
//                   <span className="text-sm font-medium">Upload</span>
//                 </button>
//                 <div className="flex items-center space-x-4">
//                   <button className="relative text-gray-700">
//                     <ShoppingCart className="w-5 h-5" />
//                     <span className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 text-white rounded-full text-xs flex items-center justify-center">3</span>
//                   </button>
//                   <button className="text-gray-700">
//                     <User className="w-5 h-5" />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;