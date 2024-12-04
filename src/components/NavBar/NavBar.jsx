import { useState } from "react";
import Link from "../Link/Link";
import { HiOutlineMenu,HiOutlineMenuAlt1 } from "react-icons/hi";

const NavBar = () => {
    const [open,setOpen] = useState(false);
    const routes = [
        { id: 1, path: "/home", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/blog", name: "Blog" }
      ];
      
    return (
        <div>
            <div onClick={()=>setOpen(!open) } className="md:hidden">
                {
                    open === true? 
                    <HiOutlineMenuAlt1 className="text-3xl"></HiOutlineMenuAlt1>
                    : <HiOutlineMenu className="text-3xl"></HiOutlineMenu>
                }
            </div>
            
            <ul className={`md:flex duration-1000 absolute
            md:static
            ${open? 'top-16':'-top-60'}
            `}>
                {
                    routes.map(route => <Link key ={route.id} route={route}></Link>)
                }
            </ul>
        </div>
    );
};

export default NavBar;