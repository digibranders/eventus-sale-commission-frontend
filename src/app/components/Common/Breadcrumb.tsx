"use client";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { AiOutlineRight } from "react-icons/ai";
import React from "react";

const Breadcrumb: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();

  // Split the pathname to create breadcrumb items
  const pathnames = pathname.split("/").filter((x) => x);

  return (
    <nav className="flex items-center space-x-2 py-4 px-6 bg-[#f4f4f4] rounded">
      <Link href="/" className="text-[#1C1C1C]/40 hover:text-gray-600 transition">
        Dashboard
      </Link>

      {pathnames.map((value, index) => {
        const isLast = index === pathnames.length - 1;
        const href = `/${pathnames.slice(0, index + 1).join("/")}`;

        return (
          <div key={href} className="flex items-center space-x-2">
            <AiOutlineRight className="text-gray-400" />

            {isLast ? (
              <span className="text-gray-500 font-medium">{formatLabel(value)}</span>
            ) : (
              <Link href={href} className="text-gray-400 hover:text-gray-600 transition">
                {formatLabel(value)}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
};

// Function to format the breadcrumb labels
const formatLabel = (label: string): string => {
  return label
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export default Breadcrumb;
