import { XIcon } from "@heroicons/react/outline";
import { navLinks } from "../../helpers/data";

const MobileNavBar = ({ pageLink, setMenuOpen }) => {
  return (
    <aside className="flex flex-col gap-6 py-8 px-4">
      <div className="px-2 flex justify-between items-center  mt-2 mb-4">
        <a href="/" className="flex gap-2 items-center">
          <h2 className="font-bold text-xl text-primary">Tuscot</h2>
        </a>

        <XIcon className="w-5 text-white cursor-pointer" onClick={() => setMenuOpen(false)} />
      </div>

      <nav>
        <ul className="flex flex-col gap-4">
          {navLinks?.map(({ path, title }, i) => (
            <a
              href={path}
              key={i}
              target={title == "Blog" && "_blank"}
              className={`${pageLink == path && "text-accent font-semibold"} text-white hover:text-accent capitalize`}
              onClick={() => setMenuOpen(false)}
            >
              {title}
            </a>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default MobileNavBar;
