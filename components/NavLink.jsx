'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavLink = ({tittle, link, icon}) => {
    const pathname = usePathname();
    const isActive = pathname === link;

    return (
        <li className={(isActive ? 'active_menu sidebar-list' : 'sidebar-list')}>
            <i className="fa fa-thumb-tack"></i>
            <Link className="sidebar-link sidebar-title fs1" href={link}>
                <span className={`${icon} nav_font`}>
                    <span className="path1"></span>
                    <span className="path2"></span>
                    <span className="path3"></span>
                    <span className="path4"></span>
                    <span className="path5"></span>
                </span>
                {tittle}
            </Link>
        </li>
    )
}