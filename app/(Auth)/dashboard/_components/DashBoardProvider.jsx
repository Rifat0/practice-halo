"use client";

import { DashboardContext } from '@/context';
import { useState } from "react";

const DashBoardProvider = ({ children }) => {
    const [dashboardData, setDashboardData] = useState({});

    return (
        <DashboardContext.Provider value={{ dashboardData, setDashboardData }}>
            {children}
        </DashboardContext.Provider>
    )
}

export default DashBoardProvider;
