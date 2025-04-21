"use client";

import {
  BellIcon,
  Cookie,
  CreditCard,
  Inbox,
  MessageSquare,
  Settings,
  User,
} from "lucide-react";
import UserItem from "./UserItem";
import { Command, CommandGroup, CommandItem, CommandList } from "./ui/command";
import Link from "next/link";

export default function Sidebar() {
  const menuList = [
    {
      group: "General",
      items: [
        {
          link: "/profile",
          icon: <User />,
          text: "Profile",
        },
        {
          link: "/inbox",
          icon: <Inbox />,
          text: "Inbox",
        },

        {
          link: "/",
          icon: <CreditCard />,
          text: "Billing",
        },
        {
          link: "/",
          icon: <BellIcon />,
          text: "Notifications",
        },
      ],
    },
    {
      group: "Settings",
      items: [
        {
          link: "/",
          icon: <Settings />,
          text: "General Settings",
        },
        {
          link: "/",
          icon: <Cookie />,
          text: "Privacy",
        },
        {
          link: "/",
          icon: <MessageSquare />,
          text: "Logs",
        },
      ],
    },
  ];

  return (
    <div className="fixed flex flex-col gap-4 w-[300px] min-w-[300px] border-r min-h-screen p-4">
      <div>
        <Link href="/">
          <UserItem />
        </Link>
      </div>
      <div className="grow">
        <Command style={{ overflow: "visible" }}>
          <CommandList style={{ overflow: "visible" }}>
            {menuList.map((menu: any, key: number) => (
              <CommandGroup key={key} heading={menu.group}>
                {menu.items.map((option: any, optionKey: number) => (
                  <CommandItem
                    key={optionKey}
                    className="flex gap-2 cursor-pointer"
                  >
                    <Link href={option.link} className="flex gap-2">
                      {option.icon}
                      {option.text}
                    </Link>
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </div>

      <div>
        <Link href="/team" className="flex items-center gap-2">
          <Settings />
          <span> Team Settings</span>
        </Link>
      </div>
    </div>
  );
}
