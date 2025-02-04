import { Link, useLoaderData } from "@remix-run/react";
import { db } from '~/utils/db.server'

export const loader = async () => {
  interface Note {
    id: string;
    title: string;
    body: string;
    createdAt: Date;
  }

  const notes: Note[] = await db.note.findMany({
    take: 20,
    select: { id: true, title: true, body: true, createdAt: true },
    orderBy: { createdAt: 'desc' },
  });

  return { notes };
};

const NoteLayout = () => {
  const { notes } = useLoaderData<typeof loader>();

  return (
    <div>
      <div className="mt-9 min-h-screen flex justify-center">
        <div className="w-1/3">
            <button className="bg-yellow-500 p-3 rounded-xl w-full">Notes</button>
            <ul className=" text-black text-center">
                {notes.map((item) => (
                    <div key={item.id} className="bg-white border-2 rounded-lg p-5 mt-5 ">
                      <Link to={`/notes/${item.id}`}>
                      <p>{item.title}</p>
                      <p>{new Date(item.createdAt).toLocaleString()}</p>
                    </Link>
                    </div>
                  ))}{" "}
              </ul>
        </div>
      </div>
    </div>
  );
};

export default NoteLayout;
