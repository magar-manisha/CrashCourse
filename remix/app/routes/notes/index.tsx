import { Link } from "@remix-run/react"
import FormPage from "~/components/FormPage"

const Notes = () => {
  return (
    <div className="h-screen bg-purple-500" >
      <div className="place-items-center">
        <FormPage/>
      <div className="mt-5">
      <ul className="grid grid-cols-4 gap-4 w-full h-50% text-black">
        <li className="bg-white border-2 rounded-lg p-5 m-5"><Link to="/notes/1">View Note 1</Link></li>
        <li className="bg-white border-2 rounded-lg p-5 m-5"><Link to="/notes/2">View Note 2</Link></li>
        <li className="bg-white border-2 rounded-lg p-5 m-5"><Link to="/notes/3">View Note 3</Link></li>
        <li className="bg-white border-2 rounded-lg p-5 m-5"><Link to="/notes/4">View Note 4</Link></li>
        <li className="bg-white border-2 rounded-lg p-5 m-5"><Link to="/notes/5">View Note 5</Link></li>
        <li className="bg-white border-2 rounded-lg p-5 m-5"><Link to="/notes/6">View Note 6</Link></li>
      </ul>
      </div>
      </div>
    </div>
  )
}

export default Notes