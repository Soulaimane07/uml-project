import { useState } from "react";
import { IoTrash } from "react-icons/io5";
import { getVisibilityIcon } from "./Functions";

const Sidebar = ({elementId, elements, setShowSidebar, setAddAttribute}) => {
  const element = elements?.find(el => el.id === Number(elementId));

  const [newLabel, setNewLabel] = useState(element?.name);



  return (
    <div 
        className="element-details fixed right-0 h-screen bg-blue-500 overflow-y-scroll w-1/4 rounded-md flex flex-col justify-between py-8 px-6"
        // onMouseLeave={()=> setShowSidebar(false)}
    >
      <div>
        <h3 className="flex space-x-2 justify-center text-center font-medium text-2xl mb-4">
          <p className="first-letter:uppercase">{element?.id}</p>
          <p>Details</p>
        </h3>

        <div className="mb-6">
          <input
            value={newLabel}
            onChange={(e) => setNewLabel(e.target.value)}
            type="text"
            className="bg-gray-50 border outline-blue-600 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5"
            placeholder={`${element?.name} name`}
          />
        </div>

        {element?.type === "class" &&
            <div className="mb-6">
              <h4 className="block mb-2 text-sm font-medium text-gray-900">Attributes</h4>
              <ul className="px-4 space-y-2">
                  {element?.attributes?.map((attr, index) => (
                    <div key={index} className="attribute-item flex justify-between items-center">
                        <p>
                          {getVisibilityIcon(attr.visibility)} {attr.name} ({attr.type})
                        </p>
                        <button
                            type="button"
                            // onClick={() => handleDeleteAttribute(attr.name)}
                            className="border focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-2.5 py-1.5 text-center border-orange-400 text-orange-400 hover:text-white hover:bg-orange-600 focus:ring-orange-900"
                        >
                          <IoTrash />
                        </button>
                    </div>
                  ))}
              </ul>

              <button
                  type="button"
                  onClick={()=> setAddAttribute(true)}
                  className="w-full mt-2 focus:outline-none text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-cyan-500 hover:bg-cyan-600 focus:ring-cyan-700"
              >
                  Add Attribute
              </button>
            </div>
        }


      </div>
    </div>
  );
};

export default Sidebar;