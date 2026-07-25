import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaProjectDiagram,
  FaUser,
  FaCog,
  FaCreditCard,
} from "react-icons/fa";
import "./dashboardComponents.css";
import { FaPlusCircle } from "react-icons/fa";
const menuItems = [
  {
    title: "Dashboard",
    icon: <FaHome />,
    path: "/dashboard",
  },
  {
    title: "Workflows",
    icon: <FaProjectDiagram />,
    path: "/workflows",
  },
  {
    title: "Profile",
    icon: <FaUser />,
    path: "/profile",
  },
  {
    title: "Settings",
    icon: <FaCog />,
    path: "/settings",
  },
  {
    title: "Billing",
    icon: <FaCreditCard />,
    path: "/billing",
  },
  {
  title: "Create Workflow",
  icon: <FaPlusCircle />,
  path: "/create-workflow",
},
];

function Sidebar() {
  return (
    <aside className="sidebar">

      <div>

        <h2 className="logo">
          FlowPilot AI
        </h2>

        <nav className="sidebar-menu">

          {menuItems.map((item) => (

            <NavLink
              key={item.title}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "sidebar-link active"
                  : "sidebar-link"
              }
            >

              {item.icon}

              <span>{item.title}</span>

            </NavLink>

          ))}

        </nav>

      </div>

    </aside>
  );
}

export default Sidebar;