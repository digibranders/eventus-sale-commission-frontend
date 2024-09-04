"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cloneElement } from "react";
import { LuUser2 } from "react-icons/lu";
import { DASHBOARD, ZOHO_DATA, SALES_PERSON, ACHIEVEMENT_OUTPUT } from "../../../constants/routes";
import { PiChartPieSliceFill } from "react-icons/pi";
import { FaRegChartBar } from "react-icons/fa";
import { GrDocumentUser } from "react-icons/gr";
import { GoTrophy } from "react-icons/go";

const Sidebar: React.FC = () => {
  const pathname = usePathname();

  const getIcon = (icon: JSX.Element, href: string) =>
    cloneElement(icon, {
      color: pathname === href ? "#000" : "#000",
      size: 20,
    });

  const links = [
    { href: DASHBOARD, label: "Dashboard", icon: <PiChartPieSliceFill /> },
    { href: ZOHO_DATA, label: "Zoho data", icon: <FaRegChartBar /> },
    { href: SALES_PERSON, label: "Sales Person Input", icon: <GrDocumentUser /> },
    { href: ACHIEVEMENT_OUTPUT, label: "Sales Person Input", icon: <GoTrophy /> },
  ];

  return (
    <div className="h-screen w-64 bg-white border-r shadow-md fixed z-50">
      <div className="p-6 flex gap-2 justify-start items-center">
        <div>
          <LuUser2 size={24} />
        </div>
        <h2 className="text-sm font-semibold">Siddique Ahmed</h2>
      </div>
      <nav className="mt-4">
        {links.map((link) => (
          <Link href={link.href} key={link.href} className={`flex items-center py-2 px-4 mx-4 my-2 rounded-[8px] transition-colors ${
            pathname === link.href
              ? "bg-gray-100 text-black"
              : "text-gray-700 hover:bg-gray-100 hover:text-black"
          }`}>
            <span className="mr-3">{getIcon(link.icon, link.href)}</span>
            <span className="text-sm font-semibold">{link.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
