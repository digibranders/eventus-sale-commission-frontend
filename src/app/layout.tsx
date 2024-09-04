"use client";
import { ToastContainer } from "react-toastify";
import { Suspense } from "react";

import "react-toastify/dist/ReactToastify.css";
import "../app/styles/globals.scss";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Sales Comission</title>
      </head>
      <body>
        <ToastContainer />
        <Suspense>
          {children}
        </Suspense>
      </body>
    </html>
  );
}
