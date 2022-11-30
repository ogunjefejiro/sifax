import React, { useEffect, useState } from "react";
import { dashboardNavLinks } from "../../helpers/data";
import { motion } from "framer-motion";
import DashboardNavigation from "../navigation/DashboardNavigation";
import TitleBarNav from "../navigation/TitleBarNav";
import { useLocation } from "react-router-dom";

const DashboardLayout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [pageReady, setPageReady] = useState(false);
  const [pageTitle, setPageTitle] = useState("");
  const location = useLocation();

  const getPageTitle = () => {
    dashboardNavLinks?.map(({ path, title }) => (path == location.pathname ? setPageTitle(title) : ""));
  };

  useEffect(() => {
    getPageTitle();
    setPageReady(true);
  }, []);

  return (
    <>
      {pageReady && (
        <div className="h-screen flex justify-content items-center text-black">
          <aside className="hidden bg-white h-screen w-3/12 overflow-y-auto lg:block border-r">
            <DashboardNavigation pathname={location.pathname} />
          </aside>

          <div className="h-screen w-full mx-auto bg-[#fafafa] overflow-y-auto overflow-x-hidden">
            <div className="sticky top-0 z-[20] bg-white">
              <TitleBarNav menuOpen={menuOpen} setMenuOpen={setMenuOpen} pageTitle={pageTitle} pathname={pageTitle} />
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="px-3 sm:px-8 py-8"
            >
              {children}
            </motion.div>
          </div>
        </div>
      )}
    </>
  );
};

export default DashboardLayout;
