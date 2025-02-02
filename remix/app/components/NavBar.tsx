import {  NavLink } from "@remix-run/react"

const NavBar = () => {
  return (
    <div>
        <ul className="flex gap-x-4 justify-center pt-6 pb-9 bg-purple-500">
            <li><NavLink to={"/"} className={({ isActive }) => isActive ? "text-yellow-500" : "hover:text-yellow-500"}>Home</NavLink></li>
            <li> <NavLink to={"/notes"} className={({ isActive }) => isActive ? "text-yellow-500" : "hover:text-yellow-500"}>My Notes</NavLink></li>
        </ul>
    </div>
  )
}

export default NavBar