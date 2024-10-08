
import BootstrapClient from '@/components/BootstrapClient';

// import "@/public/assets/css/font-awesome.css";
import "@/public/assets/css/vendors/icofont.css";
// import "@/public/assets/css/vendors/slick.css";
import "@/public/assets/css/vendors/themify.css";
import { ChevronsUp } from 'feather-icons-react';

import "@/public/assets/css/vendors/animate.css";
// import "@/public/assets/css/vendors/flag-icon.css";
// import "@/public/assets/css/vendors/icofont.css";
// import "@/public/assets/css/vendors/prism.css";
import "@/public/assets/css/vendors/scrollbar.css";
// import "@/public/assets/css/vendors/slick-theme.css";

// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.css';

// Page specific css
import "@/public/assets/css/color-1.css";
import "@/public/assets/css/responsive.css";
import "@/public/assets/css/style.css";
import "@/public/assets/css/vendors/calendar.css";
import "@/public/assets/icomoon/style.css";

import LoggedUserProvider from '@/components/LoggedUserProvider';
import { NavBar } from "@/components/NavBar";
import { SideBar } from '@/components/SideBar';
import { SessionProvider } from 'next-auth/react';
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Practice Halo",
  description: "Practice Halo patient portal.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <LoggedUserProvider>
            <div className="loader-wrapper">
              <div className="loader loader-1">
                <div className="loader-outter"></div>
                <div className="loader-inner"></div>
                <div className="loader-inner-1"></div>
              </div>
            </div>
            <div className="tap-top">
              <ChevronsUp />
            </div>

            <div className="page-wrapper compact-wrapper" id="pageWrapper">
              <div className="page-body-wrapper horizontal-menu">
                <SideBar />
                <div className="page-body">            
                  <div className="container-fluid">
                    <div className="row starter-main">
                      <div className="col-sm-12">
                        <div className="card">
                          <NavBar />
                          {children}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <BootstrapClient />
          </LoggedUserProvider>
        </SessionProvider>
      </body>
  </html>
  );
}
