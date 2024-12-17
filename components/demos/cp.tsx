import React from "react";
import Link from "next/link";
import { HomeIcon, PencilIcon, GithubIcon, LinkedinIcon, MailIcon, XIcon, XCircleIcon, TwitterIcon } from "lucide-react";
import { SiLeetcode, SiCodechef, SiCodeforces, SiGeeksforgeeks } from "react-icons/si";
import {
    IconBrandX,
  } from "@tabler/icons-react";

import { cn } from "@/lib/utils";
import { Dock, DockIcon } from "../ui/dock";

const DATA = {
  navbar: [
    // { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "#", icon: PencilIcon, label: "Blog" },
  ],
  contact: {
    social: {
      Leetcode: {
        name: "Leetcode",
        url: "https://leetcode.com/little_krishna/",
        icon: SiLeetcode,
      },
      GFG: {
        name: "GFG",
        url: "https://www.geeksforgeeks.org/user/little_krishna/",
        icon: SiGeeksforgeeks,
      },
      Codechef: {
        name: "CodeChef",
        url: "https://www.codechef.com/users/little_krishna",
        icon: SiCodechef,
      },
      Codeforces: {
        name: "Codeforces",
        url: "https://codeforces.com/profile/gauravsharma2002",
        icon: SiCodeforces,
      },
      // X: {
      //   name: "X",
      //   url: "https://x.com/Manas_Kush",
      //   icon: IconBrandX,
      // },
    },
  },
};

export function CpDemo() {
  return (
    <div className="relative flex  w-full flex-col items-center justify-center overflow-hidden rounded-lg  ">
        
      <Dock direction="middle">
        {/* {DATA.navbar.map((item) => (
          <DockIcon key={item.label}>
            <Link 
              href={item.href} 
              className="flex items-center justify-center w-12 h-12 rounded-full hover:bg-gray-100"
            >
              <item.icon className="w-6 h-6" />
            </Link>
          </DockIcon>
        ))} */}
        
        {Object.entries(DATA.contact.social).map(([name, social]) => (
          <DockIcon key={name}>
            <Link 
              href={social.url} 
              className="flex items-center justify-center w-12 h-12 rounded-full hover:bg-gray-100"
            >
              <social.icon className="w-6 h-6" />
            </Link>
          </DockIcon>
        ))}
      </Dock>
    </div>
  );
}