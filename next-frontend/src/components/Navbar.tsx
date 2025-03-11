"use client";

import {
  Navbar as FlowbiteNavbar,
  NavbarCollapse,
  NavbarLink,
} from "flowbite-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function Navbar() {
  const searchParams = useSearchParams();
  const walletId = searchParams.get("wallet_id");
  return (
    <FlowbiteNavbar fluid rounded className="flex justify-center">
      <NavbarCollapse>
        <Link href={`/?wallet_id=${walletId}`} passHref legacyBehavior>
          <NavbarLink className="text-xl">Carteira</NavbarLink>
        </Link>
        <Link href={`/assets/?wallet_id=${walletId}`} passHref legacyBehavior>
          <NavbarLink className="text-xl">Ativos</NavbarLink>
        </Link>
        <Link href={`/orders?wallet_id=${walletId}`} passHref legacyBehavior>
          <NavbarLink href="#" className="text-xl">
            Ordens
          </NavbarLink>
        </Link>
      </NavbarCollapse>
    </FlowbiteNavbar>
  );
}