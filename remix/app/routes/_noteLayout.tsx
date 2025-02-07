import {  NavLink, Outlet } from "@remix-run/react"

const NavBar = () => {
  return (
    <div>
        <div>
        <ul className="flex gap-x-4 justify-center pt-6">
            <li><NavLink to={"/"} className={({ isActive }) => isActive ? "text-yellow-500" : "hover:text-yellow-500"}>Home</NavLink></li>
            <li><NavLink to={"/notes"} className={({ isActive }) => isActive ? "text-yellow-500" : "hover:text-yellow-500"}>Add Notes</NavLink></li>
            <li> <NavLink to={"/notes/noteList"} className={({ isActive }) => isActive ? "text-yellow-500" : "hover:text-yellow-500"}>My Notes</NavLink></li>
        </ul>
        </div>
        <Outlet />

    </div>
  )
}

export default NavBar