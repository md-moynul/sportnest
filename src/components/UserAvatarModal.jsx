"use client";
import { SquarePlus } from "@gravity-ui/icons";
import { Avatar, Button, Dropdown, Kbd, Label } from "@heroui/react";
import Link from "next/link";

const UserAvatarModal = () => {
  return (
    <Dropdown>
      <Button className={'p-0'} aria-label="Menu" variant="secondary">
        <Avatar>
          <Avatar.Image alt="John Doe" src="https://img.heroui.chat/image/avatar?w=400&h=400&u=3" />
          <Avatar.Fallback>JD</Avatar.Fallback>
        </Avatar>
      </Button>
      <Dropdown.Popover className={' bg-background/70 backdrop-blur-lg border-2 border-teal-500 mr-3'}>
        <div className="p-8 pb-0 space-y-4">
          <Avatar className="mx-auto w-15 h-15 rounded-full" >
            <Avatar.Image alt="John Doe" src="https://img.heroui.chat/image/avatar?w=400&h=400&u=3" className="" />

            <Avatar.Fallback>JD</Avatar.Fallback>
          </Avatar>
          <p className="text-center">Moynul is</p>
          <p>mmmdmoynulislam@gmail.com</p>
          <div className="text-center">
            <Link href={'/profile'}>
              <Button size="lg" className={'rounded '}>View profile</Button>
            </Link>

          </div>
        </div>

        <Dropdown.Menu >
          <Dropdown.Item >

            <Label>New file</Label>
            <Kbd className="ms-auto" slot="keyboard" variant="light">

            </Kbd>
          </Dropdown.Item>

        </Dropdown.Menu>
        <div className="p-4 ">
          <Button className={'w-full rounded-none'}>Logout</Button>
        </div>

      </Dropdown.Popover>
    </Dropdown>
  );
};

export default UserAvatarModal;