import { useLoaderData } from "@remix-run/react";
import { db } from "~/utils/db.server";

export const loader = async ({params}: { params: { noteId: string } }) => {
  interface note {
    
    id: string;
    title: string;
    body: string;
  }

  const note = await db.note.findUnique({
    where: {id: params.noteId}
  })

  if (!note){
    throw new Error("No such note");
    
  }
  const data = {note}
  return data;
};

const NoteId = () => {
  const { note } = useLoaderData<{ note: { id: string; title: string; body: string } }>();
  return (
    <div className="flex min-h-screen justify-center mt-9">
      <div className="text-center w-1/2">
         <p>{note.body}</p>
      </div>
    </div>
  );
};

export default NoteId;
