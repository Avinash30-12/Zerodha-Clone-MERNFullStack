import React ,{useState} from "react";
import {Link} from "react-router-dom";


const Menu = () => {
  const [selectedMenu , setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen , setIsProfileDropdownOpen] = useState(false);

  const handleClickMenu =(index)=>{
    setSelectedMenu(index);
  }
  const handleProfileClick =(index)=>{
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  }
  const menuClass ="menu";
  const activeMenuClass ="menuSelected";
  return (
    <div className="menu-container">
      <img src="logo.png" alt="Logo" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link style={{textDecoration:"none"}} to="/" onClick={()=>handleClickMenu(0)}>
            <p className={selectedMenu === 0 ? activeMenuClass: menuClass }>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/orders" onClick={()=>handleClickMenu(1)}>
            <p className={selectedMenu===1 ? activeMenuClass: menuClass }>Orders</p>
            </Link>
          </li>
          <li>
             <Link style={{textDecoration:"none"}} to="/holdings" onClick={()=>handleClickMenu(2)}>
            <p className={selectedMenu===2 ? activeMenuClass: menuClass }>Holdings</p>
            </Link>
          </li>
          <li>
             <Link style={{textDecoration:"none"}} to="/positions" onClick={()=>handleClickMenu(3)}>
            <p className={selectedMenu===3 ? activeMenuClass: menuClass }>Positions</p>
            </Link>
          </li>
          <li>
             <Link style={{textDecoration:"none"}} to="/funds" onClick={()=>handleClickMenu(4)}>
            <p className={selectedMenu===4 ? activeMenuClass: menuClass }>Funds</p>
            </Link>
          </li>
          <li>
             <Link style={{textDecoration:"none"}} to="/apps" onClick={()=>handleClickMenu(5)}>
            <p className={selectedMenu===5 ? activeMenuClass: menuClass }>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;