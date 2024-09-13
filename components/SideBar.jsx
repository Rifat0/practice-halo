"use client";

import collapseLogo from "@/public/assets/images/logo/logo-icon.png";
import logo from "@/public/assets/images/logo/logo_light.png";
import { ArrowRight, Grid } from "feather-icons-react";
import Image from "next/image";
import Script from "next/script";
import SimpleBar from "simplebar-react";
// import 'simplebar-react/dist/simplebar.min.css';
import { NavLink } from "./NavLink";

export const SideBar = () => {
  return (
    <>
      <div className="sidebar-wrapper" data-layout="stroke-svg">
        <div>
          <div className="logo-wrapper">
            <a href="/">
              <Image className="img-fluid" src={logo} alt="Logo" />
            </a>
            <div className="back-btn">
              <ArrowRight />
            </div>
            <div className="toggle-sidebar">
              <Grid className="status_toggle middle sidebar-toggle" />
            </div>
          </div>
          <div className="logo-icon-wrapper">
            <a href="index.html">
              <Image className="img-fluid" src={collapseLogo} alt="" />
            </a>
          </div>
          <nav className="sidebar-main">
            <div className="left-arrow" id="left-arrow">
              <ArrowRight />
            </div>
            <div id="sidebar-menu">
              <ul className="sidebar-links">
                <SimpleBar style={{ maxHeight: 300 }}>
                  <li className="back-btn">
                    <div className="mobile-back text-end">
                      <span>Back</span>
                      <ArrowRight aria-hidden="true" />
                    </div>
                  </li>

                  <li className="pin-title sidebar-main-title">
                    <div>
                      <h6>Pinned</h6>
                    </div>
                  </li>

                  <NavLink
                    tittle="Dashboard"
                    link="/dashboard"
                    icon="icon-element-4"
                  />
                  <NavLink
                    tittle="Profile"
                    link="/profile"
                    icon="icon-people"
                  />
                  <NavLink
                    tittle="Invoice"
                    link="/invoice"
                    icon="icon-clipboard-text"
                  />
                  <NavLink
                    tittle="Appointment"
                    link="/appointment"
                    icon="icon-hospital"
                  />
                  <NavLink
                    tittle="Special"
                    link="/special"
                    icon="icon-receipt-text"
                  />
                  <NavLink
                    tittle="News and Events"
                    link="/news-and-events"
                    icon="icon-receipt-2"
                  />
                </SimpleBar>
              </ul>
            </div>
            <div className="right-arrow" id="right-arrow">
              <ArrowRight />
            </div>
          </nav>
        </div>
      </div>
        <Script src="assets/js/sidebar-menu.js"></Script>
        <Script src="assets/js/sidebar-pin.js"></Script>
    </>
  );
};
