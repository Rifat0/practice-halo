"use client";

import { LoggedUserContext } from '@/context';
import { LogOut, Settings } from 'feather-icons-react';
import { signOut, useSession } from "next-auth/react";
import Image from 'next/image';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';

export const NavBarUser = () => {

    const { data: session } = useSession();
	const [loginSession ,setLoginSession] = useState(session);
	const [logInUser ,setLogInUser] = useState(null);
    const { loggedUserData, setLoggedUserData } = useContext(LoggedUserContext);

	useEffect(() => {
		setLoginSession(session);
        async function fetchData() {
            const response = await fetch('/api/me');
            const data = await response.json();
            setLoggedUserData(data);
        }
        fetchData();
	}, [session]);

    return (
        <li className="profile-nav onhover-dropdown px-0 py-0">
            <div className="d-flex profile-media align-items-center">
                <Image className="img-30 round-badge-success " src={loggedUserData?.avatar} alt="" width={30} height={30} />
                <div className="flex-grow-1"><span>{loggedUserData?.name}</span>
                </div>
            </div>

            <ul className="profile-dropdown onhover-show-div">
                <li>
                    <Link href="#">
                    <Settings />
                    <span>Account </span>
                    </Link>
                </li>
                {loginSession && (
                <li>
                    <Link href="#" onClick={() => signOut()}>
                    <LogOut />
                    <span>Logout </span>
                    </Link>
                </li>
                )}
            </ul>
        </li>
    )
}
