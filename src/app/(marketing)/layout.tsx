import { NavBar } from "@/app/(marketing)/_components/NavBar";
import { PropsWithChildren } from "react";

export default function MarketingLayout({ children }: PropsWithChildren) {
  return (
    <div className="selection:bg-[hsl(320,65%,52%,20%)]">
      <NavBar />
      {children}
    </div>
  );
}
