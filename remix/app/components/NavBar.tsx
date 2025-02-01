import { Link } from "@remix-run/react"

const NavBar = () => {
  return (
    <div>
        <ul className="flex gap-x-4 justify-center pt-6 pb-9 bg-purple-500">
            <li className="active:text-yellow-500"><Link to={"/"}>Home</Link></li>
            <li> <Link to={"/notes"}>My Notes</Link></li>
        </ul>
    </div>
  )
}

export default NavBar