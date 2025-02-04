import { Form, redirect, useNavigation, useRouteError, isRouteErrorResponse } from "@remix-run/react";
// import FormPage from "../components/FormPage";


export const action = async ({ request }: { request: Request }) => {
  const formData = await request.formData();
  const title = formData.get("title");
  const body = formData.get("body");
  console.log({ title, body });
  return redirect("/notes/noteList");
};


const Notes = () => {
    const navigation = useNavigation();
  const isSubmitting = !(navigation.state === "idle");
  return (
    <div className="flex min-h-screen justify-center pt-10">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md h-1/2">
      <h1 className="text-2xl font-bold text-center text-gray-800">Notes</h1>
        <Form method="POST">
            <label className="text-black">
              Title
            <br />  <input type="text" name="title" className="text-black bg-purple-200 w-full h-10 p-3"/>
            </label>
            <br />
            <br />
            <br />
            <label className="text-black">
              Content
              <br/><textarea name="body" rows={5} cols={60} className="text-black bg-purple-200 w-full p-3"></textarea>
            </label>
            
            <br/><button type="submit" className="bg-yellow-500 py-2 px-4 rounded-xl mt-3 w-full">
                 {isSubmitting? "Submitting!": "Add Notes!"}
            </button>
          </Form>
      </div>
    </div>
  );
};


export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>Error {error.status}</h1>
        <p>{error.data || "An unexpected error occurred."}</p>
      </div>
    );
  } else if (error instanceof Response) {
    return (
      <div>
        <h1>Error {error.status}</h1>
        <p>{error.statusText || "Unknown error occurred"}</p>
      </div>
    );
  } else if (error instanceof Error) {
    return (
      <div>
        <h1>Something went wrong!</h1>
        <p>{error.message}</p>
      </div>
    );
  } else {
    // Unknown error case
    return (
      <div>
        <h1>Unexpected Error</h1>
        <p>Something went wrong, but we’re not sure what.</p>
      </div>
    );
  }
}


export default Notes;
