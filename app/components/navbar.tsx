"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
//   Button,
} from "@nextui-org/react";
import Image from 'next/image'

export const AcmeLogo = () => {
  return (
    <Image
      src="/logo.png"  // from public folder
      alt="Virsa Logo"
      width={130}
      height={130}
      priority 
      unoptimized // if this is above the fold
    />
  );
};

export default function App_Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Gallery", path: "/gallery" },
    { name: "Events", path: "/events" },
    { name: "Core", path: "/core" },
    { name: "Heads", path: "/heads" },
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth="full">
      <NavbarContent >
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          
          <p className="font-bold text-inherit ">
            <Link className="text-4xl" href="/"><AcmeLogo /></Link>
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 " justify="center">
        <NavbarItem>
          <Link className="text-2xl" color="foreground" href="/events">
            Event
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link className="text-2xl" aria-current="page" href="/gallery">
            Gallery
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-2xl" color="foreground" href="/core">
            Core
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-2xl" color="foreground" href="/heads">
            Heads
          </Link>
        </NavbarItem>
      </NavbarContent>
      {/* will use Later for Forms */}
      {/* <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent> */}
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              className="w-full"
              color="foreground"
              href={item.path}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
      
    </Navbar>
  );
}
