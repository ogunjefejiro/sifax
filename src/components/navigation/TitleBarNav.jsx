import { motion, AnimatePresence } from "framer-motion";
import DashboardNavigation from "./DashboardNavigation";
import { BellIcon, ChevronDownIcon, MenuAlt3Icon, PlusIcon } from "@heroicons/react/outline";

const TitleBarNav = ({ pathname, menuOpen, setMenuOpen }) => {
  return (
    <div className="py-5 px-4 lg:px-8 lg:py-5 w-full border-b">
      <div className="flex justify-between items-center gap-4">
        <a href="/" className="flex gap-2 items-center lg:hidden">
          <h2 className="font-bold text-xl text-primary">Tuscot</h2>
        </a>
        <div className="flex w-full justify-end">
          <div className=" items-center gap-6 hidden lg:flex">
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-[#f7f8f9] p-3 mr-12 rounded-lg outline-none text-base placeholder:text-[#A5A5A5]"
            />
            <button className="btn btn-primary flex gap-2">
              <PlusIcon className="w-4" /> New Project
            </button>
            <div className="min-w-fit">
              <BellIcon className="w-7 text-[#b6b6b6]" />
            </div>
            <div className="flex gap-4 items-center py-1  text-sm cursor-pointer min-w-fit">
              <span className="w-9 h-9 rounded-full bg-[#C4C4C4]"></span>
              <div>
                <h2 className="text-[#222222]">Fejiro Ogunje</h2>
                <h2 className="text-xs text-[#AAAAAA]">Manager</h2>
              </div>
            </div>
            <div className="min-w-fit">
              <ChevronDownIcon className="w-4" />
            </div>
          </div>
        </div>
        <MenuAlt3Icon className="lg:hidden w-8 text-black cursor-pointer" onClick={() => setMenuOpen(true)} />
      </div>

      {/* mobile menu start */}
      {menuOpen && (
        <div
          className="fixed left-0 right-0 bottom-0 h-screen w-full lg:hidden bg-[#0000003d] z-[99999]"
          onClick={() => setMenuOpen(false)}
        >
          <AnimatePresence>
            <motion.div
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              exit={{ x: -100 }}
              className="fixed top-0 left-0 bg-white h-screen"
              onClick={(e) => e.stopPropagation()}
            >
              <DashboardNavigation pathname={pathname} />
            </motion.div>
          </AnimatePresence>
        </div>
      )}

      {/* mobile menu end */}
    </div>
  );
};

export default TitleBarNav;
