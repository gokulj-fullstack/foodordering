import "./sidebar.css";
import Nav from "react-bootstrap/Nav";
import { Link, useLocation } from "react-router-dom";
import { getUserRole } from "../../utils/userdata";
import { sideBarNavItems } from "../../config";

function Sidebar({ ref }: any) {
  const userInfo: any = getUserRole();
  const location = useLocation();

  return (
    <div ref={ref} className="sidebar-container">
      <Nav className="flex-column">
        <ul className="sidebar-nav-list">
          {sideBarNavItems.map((item: any) => {
            if (item.access.includes(userInfo.role)) {
              return (
                <li>
                  <Nav.Link className="nav-links" as={Link} to={item.path}>
                 <span className="nav-links-text">{item.title}</span>
                  </Nav.Link>
                </li>
              );
            }
          })}
        </ul>
      </Nav>
    </div>
  );
}

export default Sidebar;
  