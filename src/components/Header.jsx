import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="p-4 flex gap-4 w-full bg-black rounded-xl">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `block py-2 pr-4 pl-3 duration-200 ${
            isActive ? "text-orange-700" : "text-gray-700"
          } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          `block py-2 pr-4 pl-3 duration-200 ${
            isActive ? "text-orange-700" : "text-gray-700"
          } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
        }
      >
        About
      </NavLink>
      <NavLink
        to="/studyresources"
        className={({ isActive }) =>
          `block py-2 pr-4 pl-3 duration-200 ${
            isActive ? "text-orange-700" : "text-gray-700"
          } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
        }
      >
        Study Resources
      </NavLink>
      <NavLink
        to="/campusnavigation"
        className={({ isActive }) =>
          `block py-2 pr-4 pl-3 duration-200 ${
            isActive ? "text-orange-700" : "text-gray-700"
          } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
        }
      >
        Campus Navigation
      </NavLink>
      <NavLink
        to="/realtimeclassschedule"
        className={({ isActive }) =>
          `block py-2 pr-4 pl-3 duration-200 ${
            isActive ? "text-orange-700" : "text-gray-700"
          } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
        }
      >
        Real Time Class Schedule
      </NavLink>
      <NavLink
        to="/chatforum"
        className={({ isActive }) =>
          `block py-2 pr-4 pl-3 duration-200 ${
            isActive ? "text-orange-700" : "text-gray-700"
          } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
        }
      >
        Chat Forum
      </NavLink>
    </div>
  );
}

export default Header;
