import { type ReactElement } from "react";
import NavBar from "./nav-bar";
import Footer from "./footer";

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <div className="relative bg-[#1E1E1E] ">
      <NavBar />
      {children}
      <Footer className="pb-24 pt-12" />
    </div>
  );
}
