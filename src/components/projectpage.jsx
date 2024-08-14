/* eslint-disable react/prop-types */
import { GiNotebook } from "react-icons/gi";
import Createprojectbutton from "./createprojectbutton";
import { useRef } from "react";
export default function Projectpage({
  handleproject,
  isprojectselected,
  addprojectdata,
  myproject,
  handledeleteproject,
  additems,
  deleteitem,
}) {
  const title = useRef();
  const details = useRef();
  const item = useRef();
  if (isprojectselected) {
    return (
      <div className="w-3/4 bg-black h-full flex justify-center items-center flex-col gap-5">
        <label className="text-white text-xl ml-[-198px] " htmlFor="heading">
          Project Name
        </label>
        <input
          ref={title}
          className="w-[20rem] h-10 rounded"
          id="heading"
          type="text"
        />
        <label className="text-white text-xl ml-[-198px] " htmlFor="heading">
          Project Details
        </label>
        <textarea
          ref={details}
          className="w-[20rem] h-[30vh] rounded"
          id="heading"
          type="text"
        />
        <div className="flex justify-end space-x-4">
          <button
            onClick={handleproject}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Cancel
          </button>
          <button
            onClick={() =>
              addprojectdata(title.current.value, details.current.value)
            }
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Save
          </button>
        </div>
      </div>
    );
  }
  if (myproject) {
    return (
      <>
        <div className="w-3/4 h-screen bg-black">
          <div className="w-3/4 h-3/4 bg-black flex justify-center items-center flex-col gap-5">
            <h1 className="text-white text-4xl">{`${myproject[0].counter}:${myproject[0].title}`}</h1>
            <p className="text-white">{myproject[0].details}</p>
            <button
              onClick={() => handledeleteproject(myproject[0].counter)}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Delete
            </button>
            <div className="flex gap-10">
              <input ref={item} className="w-60 h-12" type="text" />
              <button
                onClick={() =>
                  additems(item.current.value, myproject[0].counter)
                }
                className="p-3 bg-green-600 text-white rounded"
              >
                Add items
              </button>
            </div>
            {myproject[0].items.map((item, index) => {
              return (
                <div
                  className="flex gap-56 justify-center items-center"
                  key={index}
                >
                  <h1 key={index} className="text-white">
                    {item}
                  </h1>
                  <button
                    onClick={() => deleteitem(index, myproject[0].counter)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Delete Item
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="w-3/4 bg-black h-full flex justify-center items-center flex-col gap-5">
      <GiNotebook size={100} color="white" />
      <h1 className="text-white text-4xl">No Project Selected</h1>
      <p className="text-white">
        Select a Project or get started with the new one
      </p>
      <Createprojectbutton handleproject={handleproject}></Createprojectbutton>
    </div>
  );
}
