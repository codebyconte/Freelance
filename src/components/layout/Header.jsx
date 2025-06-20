"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { StackedLayout } from "@/components/ui/stacked-layout";
import {
  Sidebar,
  SidebarBody,
  SidebarItem,
  SidebarSection,
  SidebarLabel,
  SidebarDivider,
  SidebarHeader,
} from "@/components/ui/sidebar";
import {
  Navbar,
  NavbarItem,
  NavbarSection,
  NavbarSpacer,
  NavbarLabel,
  NavbarDivider,
} from "@/components/ui/navbar";

export default function Header({ children }) {
  const pathname = usePathname();

  return (
    <StackedLayout
      navbar={
        <Navbar className="max-lg:hidden">
          <Link href="/" className="flex justify-center items-center">
            <Image
              src="/Logo2.svg"
              width={80}
              height={80}
              alt="Logo Code by Conte"
            />
            <NavbarLabel>Code By Conte</NavbarLabel>
          </Link>
          <NavbarDivider />
          <NavbarSection>
            <NavbarItem href="/services" current={pathname === "/services"}>
              Offres & tarifs
            </NavbarItem>

            <NavbarItem
              href="/outils-business"
              current={pathname === "/outils-business"}
            >
              Outils business
            </NavbarItem>
            <NavbarItem href="/portfolio" current={pathname === "/portfolio"}>
              Portfolio
            </NavbarItem>
            <NavbarItem href="/a-propos" current={pathname === "/a-propos"}>
              À propos
            </NavbarItem>
            <NavbarItem href="/blog" current={pathname.startsWith("/blog")}>
              Blog
            </NavbarItem>
          </NavbarSection>
          <NavbarSpacer />
          <NavbarSection>
            <Button href="/contact" color="blue">
              Contact
            </Button>
          </NavbarSection>
        </Navbar>
      }
      sidebar={
        <Sidebar>
          <SidebarBody>
            <SidebarHeader>
              <Link href="/" className="flex justify-center items-center">
                <Image
                  src="/Logo2.svg"
                  width={80}
                  height={80}
                  alt="Logo Code by Conte"
                />
                <SidebarLabel>Code By Conte</SidebarLabel>
              </Link>
            </SidebarHeader>
            <SidebarSection>
              <SidebarItem href="/services">Offres & tarifs</SidebarItem>

              <SidebarItem href="/outils-business">Outils business</SidebarItem>

              <SidebarItem href="/portfolio">Portofolio</SidebarItem>
              <SidebarItem href="/a-propos">À propos</SidebarItem>
              <SidebarItem href="/blog">Blog</SidebarItem>
            </SidebarSection>
            <SidebarSection>
              <Button href="/contact" color="blue">
                Contact
              </Button>
            </SidebarSection>
          </SidebarBody>
        </Sidebar>
      }
    >
      {children}
    </StackedLayout>
  );
}
