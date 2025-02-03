import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import NavBar from "../components/NavBar";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <main className="h-screen bg-purple-500 p-6">
      <NavBar />
      <div className="flex-col justify-center items-center text-center">
        <h1 className="font-bold text-4xl pb-3">A better way of keeping track of your Notes </h1>
        <p>Try our early beta and never loose track of your notes again!</p>
        <button className="bg-yellow-500 py-2 px-4 rounded-xl mt-3">
          <Link to={"./notes"}>Try Know!</Link>
        </button>
      </div>
    </main>
  );
}
