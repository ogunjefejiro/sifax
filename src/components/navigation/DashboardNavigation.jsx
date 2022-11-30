import { TemplateIcon } from "@heroicons/react/outline";
import { dashboardNavLinks } from "../../helpers/data";

const DashboardNavigation = ({ pathname }) => {
  return (
    <div className="flex flex-col justify-between gap-4 h-full relative py-4 overflow-y-auto">
      <div>
        <div className="flex justify-between items-center gap-2 py-3 mx-5 lg:mx-6">
          <a href="/" className="flex gap-2 items-center">
            <TemplateIcon className="w-4 md:w-8 text-primary" />
            <h2 className="font-bold text-xl md:text-3xl text">Tuscot</h2>
          </a>
        </div>

        <div className="mt-4">
          <div className="flex flex-col">
            {dashboardNavLinks?.map(
              ({ path, title, icon, activeIcon }, i) => (
                <a
                  key={i}
                  href={path}
                  className={`flex gap-3 items-center px-8 py-3 w-full hover:text-primary cursor-pointer ${
                    pathname == path ? "border-r-2 border-primary" : ""
                  }`}
                >
                  <p className={`w-6 ${pathname == path ? "text-primary" : ""}`}>
                    {pathname == path ? activeIcon : icon}
                  </p>
                  <h2 className="text-sm">{title}</h2>
                </a>
              )
              // )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavigation;
