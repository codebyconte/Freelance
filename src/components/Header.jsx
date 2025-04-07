"use client";

import { usePathname } from "next/navigation";
import { StackedLayout } from "@/components/ui/stacked-layout";
import {
  Sidebar,
  SidebarBody,
  SidebarItem,
  SidebarSection,
} from "@/components/ui/sidebar";
import {
  Navbar,
  NavbarItem,
  NavbarSection,
  NavbarSpacer,
} from "@/components/ui/navbar";

export default function Header({ children }) {
  const pathname = usePathname();
  return (
    <StackedLayout
      navbar={
        <Navbar className="max-lg:hidden">
          <NavbarSection>
            <NavbarItem href="/" current={pathname === "/"}>
              Accueil
            </NavbarItem>
            <NavbarItem href="/services" current={pathname === "/services"}>
              Offres & tarifs
            </NavbarItem>
            <NavbarItem href="/portfolio" current={pathname === "/portofolio"}>
              Portfolio
            </NavbarItem>
          </NavbarSection>
          <NavbarSpacer />
          <NavbarSection>
            <NavbarItem href="/contact" current={pathname === "/contact"}>
              <span>Prendre RDV</span>
            </NavbarItem>
          </NavbarSection>
        </Navbar>
      }
      sidebar={
        <Sidebar>
          <SidebarBody>
            <SidebarSection>
              <SidebarItem href="/">Acceuil</SidebarItem>
              <SidebarItem href="/services">Offres & tarifs</SidebarItem>
              <SidebarItem href="/portfolio">Portofolio</SidebarItem>
              <SidebarItem href="/contact">Prendre RDV</SidebarItem>
            </SidebarSection>
          </SidebarBody>
        </Sidebar>
      }
    >
      {children}
    </StackedLayout>
  );
}
