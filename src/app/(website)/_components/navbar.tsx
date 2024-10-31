import { Button } from "@/components/ui/button";
import { Menu, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// type Props = {};

const LandingPageNavBar = () => {
  return (
    <div className="flex w-full justify-between items-center">
      <div className="text-3xl font-semibold flex items-center gap-x-3">
        <Menu className="h-6 w-6" />
        <Image alt="logo" src="/opal-logo.svg" height={40} width={40} />
        Opal
      </div>
      <div className="hidden gap-x-10 items-center lg:flex">
        <Link
          href={"/"}
          className="bg-[#7320DD] py-2 px-5 font semibold text-lg rounded-full hover:bg-[#7230DD]/80"
        >
          Home
        </Link>
        <Link href={"/"}>Pricing</Link>
        <Link href={"/"}>Contact</Link>
      </div>
      <Link href={"/auth/sign-in"}>
        <Button className="text-base flex gap-x-2">
          <User fill="#000" />
          Login
        </Button>
      </Link>
      Landin Page
    </div>
  );
};

export default LandingPageNavBar;
