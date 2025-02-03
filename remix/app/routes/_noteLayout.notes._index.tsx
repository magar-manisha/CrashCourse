import { redirect } from "@remix-run/react";
import FormPage from "../components/FormPage";


export const action = async ({ request }: { request: Request }) => {
  const formData = await request.formData();
  const title = formData.get("title");
  const body = formData.get("body");
  console.log({ title, body });
  return redirect("/notes");
};


const Notes = () => {
  return (
    <div className="h-screen bg-purple-500">
      <div className="place-items-center">
        <FormPage />
      </div>
    </div>
  );
};

export default Notes;
