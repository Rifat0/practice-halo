"use client";

import { LoggedUserContext } from '@/context';
import { useState } from "react";

const LoggedUserProvider = ({ children }) => {
    const [loggedUserData, setLoggedUserData] = useState(null);

    return (
        <LoggedUserContext.Provider value={{ loggedUserData, setLoggedUserData }}>
            {children}
        </LoggedUserContext.Provider>
    )
}

export default LoggedUserProvider;
