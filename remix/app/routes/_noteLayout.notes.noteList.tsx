import { Link, useLoaderData } from "@remix-run/react";

export const loader = async () => {
  interface note {
    postId: string;
    id: string;
    name: string;
    email: string;
    body: string;
  }

  const response = await fetch(
    "https://jsonplaceholder.typicode.com/comments?_limit=4"
  );
  const data: note[] = await response.json();
  return { notes: data };
};

const NoteLayout = () => {
  const { notes } = useLoaderData<typeof loader>();

  return (
    <div>
      <div className="mt-5 bg-purple-500 h-screen">
        <ul className="grid grid-cols-4 gap-4 w-full h-50% text-black">
          {notes.map((item) => (
            <li key={item.id} className="bg-white border-2 rounded-lg p-5 m-5">
              <Link to={`/notes/${item.id}`}>New Notes - {item.id}</Link>
            </li>
          ))}{" "}
        </ul>
      </div>
    </div>
  );
};

export default NoteLayout;
