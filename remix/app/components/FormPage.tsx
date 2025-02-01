const FormPage = () => {
  
  return (
    <div className=" bg-white p-6">
      <form action="" method="POST">
        <label className="text-black">
          Title
        <br />  <input type="text" name="title" className="text-black bg-purple-200 ml-2 w-1/2 h-10"/>
        </label>
        <br />
        <br />
        <br />
        <label className="text-black">
          Content
          <br/><textarea name="content" rows={5} cols={40} className="text-black bg-purple-200 ml-2"></textarea>
        </label>
        
        <br/><button className="bg-yellow-500 py-2 px-4 rounded-xl mt-3">
             Add Notes!
        </button>
      </form>
    </div>
  );
};

export default FormPage;
