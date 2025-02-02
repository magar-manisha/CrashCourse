
const FormPage = () => {
    return (
        <div className=" bg-white p-6 flex text-center rounded-xl">
          <form action="" method="POST">
            <label className="text-black">
              Title
            <br />  <input type="text" name="title" className="text-black bg-purple-200 w-full h-10"/>
            </label>
            <br />
            <br />
            <br />
            <label className="text-black">
              Content
              <br/><textarea name="content" rows={5} cols={60} className="text-black bg-purple-200 w-full"></textarea>
            </label>
            
            <br/><button className="bg-yellow-500 py-2 px-4 rounded-xl mt-3">
                 Add Notes!
            </button>
          </form>
        </div>
      );
    };

export default FormPage