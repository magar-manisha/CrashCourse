import { useLoaderData, useParams } from "@remix-run/react"

export const loader = async() =>{

  interface note {
    "postId": string;
    "id": string;
    "name": string;
    "email": string;
    "body": string;
  }


  const response = await fetch("https://jsonplaceholder.typicode.com/comments");
  const data : note[] = await response.json();
  return {notes: data};
}

const NoteId = () => {
    const {noteId} = useParams();
    const {notes} = useLoaderData<typeof loader>();
  return (
   <div className="h-screen bg-purple-500 place-items-center" >
    <div className=" text-center w-1/2">
      <h1 className="text-2xl">NoteId= {noteId}</h1>
        <div className="list-none">
          {notes.filter(item => item.id == noteId).map((item) => (<li key={item.id}> {item.body}</li>))}
        </div>
    </div>
        
    </div>
  )
}

export default NoteId