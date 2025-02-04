import { Form, redirect, useLoaderData } from "@remix-run/react";
import { db } from "~/utils/db.server";

export const loader = async ({ params }: { params: { noteId: string } }) => {
  interface note {
    id: string;
    title: string;
    body: string;
  }

  const note = await db.note.findUnique({
    where: { id: params.noteId },
  });

  if (!note) {
    throw new Error("No such note");
  }
  const data = { note };
  return data;
};


export const action = async({ params }: { params: { noteId: string } }) =>{
  const { noteId } = params;

  if (!noteId) {
    throw new Error("No noteId provided");
  }

  await db.note.delete({
    where: {
      id: noteId,
    },
  });

  return redirect("/notes/noteList")

}

const NoteId = () => {
  const { note } = useLoaderData<{
    note: { id: string; title: string; body: string };
  }>();
  return (
    <div className="flex min-h-screen justify-center mt-9">
      <div>
        <div className="text-center">
          <p>{note.body}</p>
        </div>

        <footer>
          <Form method="POST">
            <button className="btn btn-delete bg-red-900 py-2 px-4 rounded-xl mt-44">
              Delete
            </button>
          </Form>
        </footer>
      </div>
    </div>
  );
};

export default NoteId;
