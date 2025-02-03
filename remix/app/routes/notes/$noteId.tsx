import { useParams } from "@remix-run/react"

const NoteId = () => {
    const param = useParams();

  return (
   <div className="h-screen bg-purple-500" >
        <h1>noteId= {param.noteId}</h1>
    </div>
  )
}

export default NoteId