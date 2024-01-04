"use client";
import React, { useEffect, useState } from "react";

//styles
import styles from "./Dashboard.module.css";

//icons
import { MdSpaceDashboard } from "react-icons/md";

//fundtions
import { getNameFromEmail } from "@/utils/functions";
import DashboardSideBar from "./DashboardSideBar";
import { usePathname } from "next/navigation";

function DashboardLayout({ children, email }) {
  const [showSidebar, setShowSidebar] = useState(false);
  const path = usePathname();
  
  useEffect(() => {
    setShowSidebar(false);
  }, [path]);

  const modifiedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { email });
    }
    return child;
  });

  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <MdSpaceDashboard
          onClick={() => setShowSidebar(!showSidebar)}
          className={
            showSidebar
              ? `${styles.dashboard} ${styles.active}`
              : styles.dashboard
          }
        />
        <p>Hi , {getNameFromEmail(email)} </p>
      </nav>
      <DashboardSideBar show={showSidebar} />
      <div className={styles.body}>{modifiedChildren}</div>
    </div>
  );
}

export default DashboardLayout;
