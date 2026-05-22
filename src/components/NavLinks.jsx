'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";


const NavLinks = ({href , children , className}) => {
      const pathName = usePathname();
      const isActive = pathName === href;
    
    return (
        <div>
            <Link href={href} className={`${className} ${isActive ? 'text-sky-700 border-b-2 p-1 border-sky-700' : ""}`}>{children}</Link>
        </div>
    );
};

export default NavLinks;