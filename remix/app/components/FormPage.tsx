import { Form, redirect, useNavigation } from "@remix-run/react";

export const action = async ({ request }: { request: Request }) => {
  const formData = await request.formData();
  const title = formData.get("title");
  const body = formData.get("body");
  console.log({ title, body });
  return redirect("/notes");
};

const FormPage = () => {
  const navigation = useNavigation();
  const isSubmitting = !(navigation.state === "idle");
    return (
        <div className=" bg-white p-6 flex text-center rounded-xl">
          <Form method="POST">
            <label className="text-black">
              Title
            <br />  <input type="text" name="title" className="text-black bg-purple-200 w-full h-10"/>
            </label>
            <br />
            <br />
            <br />
            <label className="text-black">
              Content
              <br/><textarea name="body" rows={5} cols={60} className="text-black bg-purple-200 w-full"></textarea>
            </label>
            
            <br/><button type="submit" className="bg-yellow-500 py-2 px-4 rounded-xl mt-3">
                 {isSubmitting? "Submitting!": "Add Notes!"}
            </button>
          </Form>
        </div>
      );
    };

export default FormPage