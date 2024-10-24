import { BrandLogo } from "@/components/BrandLogo";
import Link from "next/link";
import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";

export function NavBar() {
  return (
    <header className="flex py-6 shadow-xl fixed top-0 w-full z-10 bg-background/95">
      <nav className="flex container font-semibold items-center gap-10">
        <Link href="/" className="mr-auto">
          <BrandLogo />
        </Link>
        <Link className="text-lg" href="/#">
          Features
        </Link>
        <Link className="text-lg" href="/#pricing">
          Pricing
        </Link>
        <Link className="text-lg" href="/#">
          About
        </Link>
        <div className="text-lg">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <Link href="/dashboard">Dashboard</Link>
          </SignedIn>
        </div>
      </nav>
    </header>
  );
}
