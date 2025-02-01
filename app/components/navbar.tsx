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

export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default function App_Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Gallery", path: "/gallery" },
    { name: "Events", path: "/event" },
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
          <AcmeLogo />
          <p className="font-bold text-inherit ">
            <Link className="text-4xl" href="/">VIRSA</Link>
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 " justify="center">
        <NavbarItem>
          <Link className="text-xl" color="foreground" href="/event">
            Event
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link className="text-xl" aria-current="page" href="/gallery">
            Gallery
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-xl" color="foreground" href="/core">
            Core
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-xl" color="foreground" href="/heads">
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
