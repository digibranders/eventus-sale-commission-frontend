
import { Metadata } from "next";
import Sidebar from "../components/SideBar/SideBar";
import TopBar from "../components/TopBar/TopBar";
import Breadcrumb from "../components/Common/Breadcrumb";

export const metadata: Metadata = {
  title: "Dashboard - Sales Comission",
  description: "",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-64 ">
        <div className="sticky top-0 z-[100]">
          <TopBar />
        </div>
        <div className="px-6 bg-[#f4f4f4]">{children}</div>
      </div>
    </div>
  );
}
