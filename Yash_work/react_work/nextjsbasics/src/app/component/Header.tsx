"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
    const pathname=usePathname();
  return (
    <div className="ml-9">
       <nav style={{ display: "flex", gap: "20px" }}>
          <Link href="/" style={{ color: pathname === "/" ? "blue" : "white" }}>
        Home
      </Link>

      <Link href="/about" style={{ color: pathname === "/about" ? "blue" : "white" }}>
        About
      </Link>
      <Link href="/contact" style={{ color: pathname === "/contact" ? "blue" : "white" }}>
        Contact
      </Link>
        
        </nav>
    </div>
  )
}
