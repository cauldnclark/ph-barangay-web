"use client";
import Logo from "./Logo";
import { CiGrid42 } from "react-icons/ci";
import SidebarLink from "./SidebarLink";
import Icon from "./Icon";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import clsx from "clsx";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="h-fit md:h-full rounded p-4 bordered-wrapper">
      <div className="flex justify-between items-center">
        <Logo />
        <div
          className="flex md:hidden bordered-wrapper p-1 rounded"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Icon name={RxHamburgerMenu} />
        </div>
      </div>
      <ul
        className={clsx(
          "md:flex flex-col p-0 mt-2",
          !isOpen ? "hidden" : "flex"
        )}
      >
        <SidebarLink href="/dashboard">
          <Icon name={CiGrid42} />
          <p>Dashboard</p>
        </SidebarLink>
        <SidebarLink href="/another">
          <Icon name={CiGrid42} />
          <p>Another Page</p>
        </SidebarLink>
        <SidebarLink href="/another-page">Another Page</SidebarLink>
      </ul>
    </section>
  );
};

export default Sidebar;
