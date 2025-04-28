import { NavLink } from "react-router-dom";
import { pages } from "../routes/routes";


const emptyOrNavsLink = () => {
  return pages?.length ? true : false;
};

const MainNavigation = () => {
  return emptyOrNavsLink() ? (
    <nav className="bg-white shadow-md px-6 py-4 flex gap-6 items-center">
      {pages.map((page) => (
        <NavLink
          key={page.path}
          to={page.path ?? "/"}
          className={({ isActive }) =>
            `text-lg font-medium transition-colors space-x-1.5 ${
              isActive
                ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                : "text-gray-600 hover:text-blue-500"
            }`
          }
        >
          {page.pagename}
        </NavLink>
      ))}
    </nav>
  ) : null;
};

export default MainNavigation;
