"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, Button, Dropdown, Kbd, Label } from "@heroui/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";

const UserAvatarModal = ({ linksData, user }) => {
  const { name, image, email } = user
  const logoutUser = async () => {
    const { data, error } = await authClient.signOut();
    if (data) {
      toast.success('Logout successful')
      redirect('/login')
    }
    if (error) {
      toast.error('try again')
    }

  }
  return (
    <Dropdown>
      <Button className={'p-0'} aria-label="Menu" variant="secondary">
        <Avatar  >
          <Avatar.Image alt={name} src={image} loading="eager" className="" />
          <Avatar.Fallback>{name[0]}</Avatar.Fallback>
        </Avatar>
      </Button>
      <Dropdown.Popover className={' bg-background/70 backdrop-blur-lg border-2 border-teal-500 mr-3'}>
        <div className="p-8 pb-0 space-y-4">
          <Avatar className="mx-auto w-15 h-15 rounded-full" >
            <Avatar.Image alt={name} src={image} className="" loading="eager"/>

            <Avatar.Fallback>{name[0]}</Avatar.Fallback>
          </Avatar>
          <p className="text-center">{name}</p>
          <p>{email}</p>
          <div className="text-center">
            <Link href={'/profile'}>
              <Button size="lg" className={'rounded bg-teal-600 hover:bg-teal-800 text-white'}>View profile</Button>
            </Link>

          </div>
        </div>

        <Dropdown.Menu >
          {linksData.map((d, i) => <Dropdown.Item key={i}>
            <Link href={d.href}>{d.name}</Link>
          </Dropdown.Item>)}


        </Dropdown.Menu>
        <div className="p-4 ">
          <Button variant="danger" onClick={logoutUser} className={'w-full rounded-none'}>Logout</Button>
        </div>

      </Dropdown.Popover>
    </Dropdown>
  );
};

export default UserAvatarModal;