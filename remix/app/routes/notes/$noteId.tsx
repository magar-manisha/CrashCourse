import { useParams } from "@remix-run/react"

const Note = () => {
    const param = useParams();

  return (
    <div>
        <h1>noteId= {param.noteId}</h1>
    </div>
  )
}

export default Note