import { Link, redirect, useLoaderData } from "@remix-run/react";
import FormPage from "../components/FormPage";


export const action = async ({ request }: { request: Request }) => {
  const formData = await request.formData();
  const title = formData.get("title");
  const body = formData.get("body");
  console.log({ title, body });
  return redirect("/notes");
};

export const loader = async () => {
  interface note {
    "postId": string;
    "id": string;
    "name": string;
    "email": string;
    "body": string;
  }

  const response = await fetch("https://jsonplaceholder.typicode.com/comments?_limit=4");
  const data: note[] = await response.json();
  return { notes: data };
};

const Notes = () => {
  const { notes } = useLoaderData<typeof loader>();
  return (
    <div className="h-screen bg-purple-500">
      <div className="place-items-center">
        <FormPage />
        <div className="mt-5">
          <ul className="grid grid-cols-4 gap-4 w-full h-50% text-black">
            {notes.map((item) => (
              <li
                key={item.id}
                className="bg-white border-2 rounded-lg p-5 m-5"
              >
                <Link to={`/notes/${item.id}`}>
                  New Notes - {item.id}
                </Link>
              </li>
            ))}{" "}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Notes;
